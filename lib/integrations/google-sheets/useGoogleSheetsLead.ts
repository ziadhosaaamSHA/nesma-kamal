"use client";

import { useState, useCallback } from "react";
import { sendLeadToGoogleSheets } from "./googleSheetsClient";
import type { LeadSubmissionPayload, GoogleSheetsResponse } from "./types";

export interface UseGoogleSheetsLeadReturn {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | null;
  submitLead: (payload: LeadSubmissionPayload) => Promise<GoogleSheetsResponse>;
  reset: () => void;
}

export function useGoogleSheetsLead(): UseGoogleSheetsLeadReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setIsError(false);
    setError(null);
  }, []);

  const submitLead = useCallback(
    async (payload: LeadSubmissionPayload): Promise<GoogleSheetsResponse> => {
      setIsSubmitting(true);
      setIsError(false);
      setError(null);

      try {
        const result = await sendLeadToGoogleSheets(payload);
        if (result.success) {
          setIsSuccess(true);
          setIsSubmitting(false);
          return result;
        } else {
          setIsError(true);
          setError(result.error || "Failed to submit lead to Google Sheets");
          setIsSubmitting(false);
          return result;
        }
      } catch (err: any) {
        const errMsg = err.message || "An unexpected error occurred";
        setIsError(true);
        setError(errMsg);
        setIsSubmitting(false);
        return {
          success: false,
          error: errMsg,
        };
      }
    },
    []
  );

  return {
    isSubmitting,
    isSuccess,
    isError,
    error,
    submitLead,
    reset,
  };
}
