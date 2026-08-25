import type { GoogleSheetsConfig } from "./types";

export const googleSheetsConfig: GoogleSheetsConfig = {
  webhookUrl:
    process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL ||
    "",
  sheetId: process.env.GOOGLE_SHEET_ID || "",
  sheetName: process.env.GOOGLE_SHEET_NAME || "Leads",
  enabled: Boolean(
    process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL ||
    process.env.GOOGLE_SHEET_ID
  ),
};
