import { NextResponse } from "next/server";
import { googleSheetsConfig } from "@/lib/integrations/google-sheets/config";
import type { LeadSubmissionPayload } from "@/lib/integrations/google-sheets/types";

export async function POST(request: Request) {
  try {
    const body: LeadSubmissionPayload = await request.json();

    // Basic validation
    if (!body.name || !body.whatsapp) {
      return NextResponse.json(
        { success: false, error: "Name and WhatsApp number are required." },
        { status: 400 }
      );
    }

    const leadRecord = {
      Timestamp: body.timestamp || new Date().toISOString(),
      Name: body.name,
      Age: body.age || "",
      Country: body.country || "",
      City: body.city || "",
      WhatsApp: body.whatsapp,
      Email: body.email || "",
      Source: body.source || "Website Booking Form",
      Locale: body.locale || "en",
    };

    console.log("[Leads API] New Lead Captured:", leadRecord);

    // If Google Sheets webhook URL is provided in env, forward to it
    if (googleSheetsConfig.webhookUrl) {
      try {
        const webhookResponse = await fetch(googleSheetsConfig.webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadRecord),
        });

        if (!webhookResponse.ok) {
          console.warn(
            `[Leads API] Google Sheets webhook returned status ${webhookResponse.status}`
          );
        }
      } catch (webhookError) {
        console.error("[Leads API] Webhook forwarding error:", webhookError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully.",
      data: leadRecord,
    });
  } catch (error: any) {
    console.error("[Leads API] Error processing lead:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process lead." },
      { status: 500 }
    );
  }
}
