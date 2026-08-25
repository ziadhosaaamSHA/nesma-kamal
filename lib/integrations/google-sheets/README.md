# Google Sheets Integration

This directory contains all code for the Google Sheets lead-capture integration.  
Any form submission from `BookingForm` or the Hero modal is automatically forwarded here.

---

## Directory Structure

```
lib/integrations/google-sheets/
├── index.ts                 # Barrel exports (import everything from here)
├── types.ts                 # TypeScript types: LeadSubmissionPayload, GoogleSheetsResponse
├── config.ts                # Reads env vars, exposes googleSheetsConfig
├── googleSheetsClient.ts    # Client-side submission logic (calls /api/leads)
└── useGoogleSheetsLead.ts   # React hook: useGoogleSheetsLead()

app/api/leads/
└── route.ts                 # Next.js API route — logs leads and forwards to webhook
```

---

## How It Works

1. User fills and submits any `BookingForm` on the site.
2. `useGoogleSheetsLead` hook calls `sendLeadToGoogleSheets()`.
3. That function POSTs to **`/api/leads`** (server-side route).
4. The route logs the lead and forwards to your configured **Google Apps Script Webhook URL**.
5. The webhook appends a new row in your Google Sheet.

---

## Setup Guide

### Step 1 — Create a Google Sheet

1. Open [sheets.google.com](https://sheets.google.com) and create a new sheet named **Nesma Kamal Leads**.
2. Add these exact headers in Row 1:

   | A | B | C | D | E | F | G | H | I |
   |---|---|---|---|---|---|---|---|---|
   | Timestamp | Name | Age | Country | City | WhatsApp | Email | Source | Locale |

---

### Step 2 — Create a Google Apps Script Webhook

1. In your sheet, click **Extensions → Apps Script**.
2. Replace the default code with:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.Timestamp || new Date().toISOString(),
    data.Name || "",
    data.Age || "",
    data.Country || "",
    data.City || "",
    data.WhatsApp || "",
    data.Email || "",
    data.Source || "Website",
    data.Locale || "en",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Deploy → New Deployment**.
4. Type: **Web app**.
5. Execute as: **Me** | Who has access: **Anyone**.
6. Click **Deploy** — copy the **Web App URL**.

---

### Step 3 — Configure Environment Variables

Add the following to your `.env.local` file:

```env
# Google Sheets — Apps Script Webhook URL
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec

# Optional: used only for server-side API calls
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SHEET_NAME=Sheet1
```

> ⚠️ Never commit `.env.local` to version control. It's already in `.gitignore`.

---

### Step 4 — Deploy

Redeploy or restart your Next.js server.  
Every successful form submission will now appear as a new row in your Google Sheet within seconds.

---

## Usage in Code

### Using the Hook (recommended)

```tsx
import { useGoogleSheetsLead } from "@/lib/integrations/google-sheets";

const { submitLead, isSubmitting, isSuccess, isError } = useGoogleSheetsLead();

await submitLead({
  name: "Sara Ahmed",
  age: "28",
  country: "Egypt",
  city: "Cairo",
  whatsapp: "+20 100 123 4567",
  source: "Hero Booking Modal",
  locale: "en",
});
```

### Direct Function Call

```ts
import { sendLeadToGoogleSheets } from "@/lib/integrations/google-sheets";

const result = await sendLeadToGoogleSheets({ name: "...", whatsapp: "..." });
if (result.success) { ... }
```

---

## LeadSubmissionPayload Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | ✅ | Client's full name |
| `whatsapp` | ✅ | WhatsApp number (international format) |
| `age` | Optional | Numeric age |
| `country` | Optional | Country name |
| `city` | Optional | City name |
| `email` | Optional | Email address |
| `source` | Optional | Which form/page triggered the submission |
| `locale` | Optional | `"en"` or `"ar"` |
| `timestamp` | Auto-set | ISO 8601 string — auto-populated if not provided |
| `notes` | Optional | Any freeform notes |
