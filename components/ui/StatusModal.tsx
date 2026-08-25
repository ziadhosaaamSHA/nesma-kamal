"use client";

import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { CheckCircle, WarningCircle, ArrowClockwise } from "@phosphor-icons/react";
import Modal, { type ModalSize } from "./Modal";
import Button from "./Button";
import { cn } from "./utils";

export type StatusType = "loading" | "success" | "error";

export interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: StatusType;
  title?: ReactNode;
  message?: ReactNode;
  actionText?: string;
  onAction?: () => void;
  secondaryActionText?: string;
  onSecondaryAction?: () => void;
  size?: ModalSize;
  lang?: "en" | "ar";
}

export function LoadingSpinner({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeMap = {
    sm: "w-6 h-6 border-2",
    md: "w-12 h-12 border-3",
    lg: "w-16 h-16 border-4",
  };

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div
        className={cn(
          "rounded-full border-moss-200 border-t-moss-600 animate-spin",
          sizeMap[size]
        )}
      />
    </div>
  );
}

export function SuccessState({
  title,
  message,
  actionText,
  onAction,
  lang = "en",
}: {
  title?: ReactNode;
  message?: ReactNode;
  actionText?: string;
  onAction?: () => void;
  lang?: "en" | "ar";
}) {
  const isAr = lang === "ar";

  return (
    <div className="flex flex-col items-center text-center py-4 px-2 space-y-4">
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-16 h-16 rounded-full bg-moss-100 flex items-center justify-center text-moss-700 shadow-sm"
      >
        <CheckCircle size={38} weight="fill" />
      </motion.div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-gray-900 font-display">
          {title || (isAr ? "تمت العملية بنجاح" : "Success!")}
        </h3>
        <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
          {message || (isAr ? "تم تسجيل طلبك وسنتواصل معك في أقرب وقت." : "Your request has been received successfully.")}
        </p>
      </div>

      {actionText && onAction && (
        <div className="pt-3 w-full flex justify-center">
          <Button variant="primary" onClick={onAction} className="w-full sm:w-auto px-8">
            {actionText}
          </Button>
        </div>
      )}
    </div>
  );
}

export function ErrorState({
  title,
  message,
  actionText,
  onAction,
  secondaryActionText,
  onSecondaryAction,
  lang = "en",
}: {
  title?: ReactNode;
  message?: ReactNode;
  actionText?: string;
  onAction?: () => void;
  secondaryActionText?: string;
  onSecondaryAction?: () => void;
  lang?: "en" | "ar";
}) {
  const isAr = lang === "ar";

  return (
    <div className="flex flex-col items-center text-center py-4 px-2 space-y-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-16 h-16 rounded-full bg-burgundy-100 flex items-center justify-center text-burgundy-700 shadow-sm"
      >
        <WarningCircle size={38} weight="fill" />
      </motion.div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-gray-900 font-display">
          {title || (isAr ? "حدث خطأ ما" : "Something Went Wrong")}
        </h3>
        <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
          {message || (isAr ? "يرجى التحقق من البيانات والمحاولة مرة أخرى." : "Please check your information and try again.")}
        </p>
      </div>

      <div className="pt-3 w-full flex flex-col sm:flex-row items-center justify-center gap-3">
        {secondaryActionText && onSecondaryAction && (
          <Button variant="outline" onClick={onSecondaryAction} className="w-full sm:w-auto px-6">
            {secondaryActionText}
          </Button>
        )}
        {actionText && onAction && (
          <Button variant="secondary" onClick={onAction} className="w-full sm:w-auto px-8">
            {actionText}
          </Button>
        )}
      </div>
    </div>
  );
}

export function LoadingState({
  title,
  message,
  lang = "en",
}: {
  title?: ReactNode;
  message?: ReactNode;
  lang?: "en" | "ar";
}) {
  const isAr = lang === "ar";

  return (
    <div className="flex flex-col items-center text-center py-8 px-2 space-y-4">
      <LoadingSpinner size="lg" />
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900 font-display">
          {title || (isAr ? "جاري المعالجة..." : "Processing...")}
        </h3>
        {message && (
          <p className="text-xs sm:text-sm text-gray-500 max-w-xs leading-relaxed">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default function StatusModal({
  isOpen,
  onClose,
  status,
  title,
  message,
  actionText,
  onAction,
  secondaryActionText,
  onSecondaryAction,
  size = "sm",
  lang = "en",
}: StatusModalProps) {
  const themeMap: Record<StatusType, "primary" | "secondary" | "surface"> = {
    loading: "surface",
    success: "surface",
    error: "surface",
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      theme={themeMap[status]}
      showCloseButton={status !== "loading"}
      closeOnBackdropClick={status !== "loading"}
      lang={lang}
    >
      {status === "loading" && <LoadingState title={title} message={message} lang={lang} />}
      {status === "success" && (
        <SuccessState
          title={title}
          message={message}
          actionText={actionText}
          onAction={onAction || onClose}
          lang={lang}
        />
      )}
      {status === "error" && (
        <ErrorState
          title={title}
          message={message}
          actionText={actionText}
          onAction={onAction || onClose}
          secondaryActionText={secondaryActionText}
          onSecondaryAction={onSecondaryAction}
          lang={lang}
        />
      )}
    </Modal>
  );
}
