import { googleSheetsConfig } from "./config";
import type { LeadSubmissionPayload, GoogleSheetsResponse } from "./types";

/**
 * Sends lead data to Google Sheets via server API or directly via Apps Script Webhook.
 */
export async function sendLeadToGoogleSheets(
  lead: LeadSubmissionPayload
): Promise<GoogleSheetsResponse> {
  const payloadWithMeta: LeadSubmissionPayload = {
    ...lead,
    timestamp: lead.timestamp || new Date().toISOString(),
    locale: lead.locale || "en",
    source: lead.source || "Nesma Kamal Website",
  };

  try {
    // 1. If webhookUrl is configured, send directly or proxy through Next.js API
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloadWithMeta),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Failed with status ${response.status}`);
    }

    const data: GoogleSheetsResponse = await response.json();
    return data;
  } catch (error: any) {
    console.error("[GoogleSheetsIntegration] Error submitting lead:", error);

    // Fallback: If webhookUrl is directly accessible on client as fallback
    if (googleSheetsConfig.webhookUrl) {
      try {
        const fallbackRes = await fetch(googleSheetsConfig.webhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payloadWithMeta),
        });
        return {
          success: true,
          message: "Lead recorded via fallback webhook.",
        };
      } catch (fallbackErr) {
        console.error("[GoogleSheetsIntegration] Fallback error:", fallbackErr);
      }
    }

    return {
      success: false,
      error: error.message || "Failed to record lead in Google Sheets",
    };
  }
}
