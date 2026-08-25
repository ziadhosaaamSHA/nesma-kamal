export type ContactType =
  | "email"
  | "whatsapp"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "facebook"
  | "linkedin"
  | "x"
  | "spotify"
  | "apple"
  | "phone"
  | "other";

export interface ContactInfoItem {
  label: string;
  value: string;
  href?: string;
  type?: ContactType;
}
