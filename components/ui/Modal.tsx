"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { bgColor } from "@/theme";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalProps) {
  // Disable background scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={clsx(
          bgColor.neutral,
          "rounded-xl shadow-lg w-[90%] max-w-md p-6",
          className
        )}
      >
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <div>{children}</div>
        <button
          className={clsx(bgColor.secondary,
            "mt-6 text-white rounded px-4 py-2 hover:bg-red-700 transition"
          )}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}
