export interface LeadSubmissionPayload {
  name: string;
  age?: string | number;
  country: string;
  city: string;
  whatsapp: string;
  email?: string;
  source?: string;
  notes?: string;
  timestamp?: string;
  locale?: string;
}

export interface GoogleSheetsResponse {
  success: boolean;
  message?: string;
  rowId?: string | number;
  error?: string;
}

export interface GoogleSheetsConfig {
  webhookUrl?: string;
  sheetId?: string;
  sheetName?: string;
  enabled: boolean;
}
