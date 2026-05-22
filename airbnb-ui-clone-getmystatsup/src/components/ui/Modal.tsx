import type { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ isOpen, title, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-3 md:items-center">
      <div className="w-full max-w-xl rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface)] shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
        <header className="flex items-center justify-between border-b border-[var(--border-subtle)] px-5 py-4">
          <h3 className="text-xl text-slate-900">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[var(--border-subtle)] bg-white px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-[var(--surface-muted)]"
          >
            Close
          </button>
        </header>
        <div className="max-h-[78vh] overflow-y-auto px-5 py-4">{children}</div>
      </div>
    </div>
  );
}
