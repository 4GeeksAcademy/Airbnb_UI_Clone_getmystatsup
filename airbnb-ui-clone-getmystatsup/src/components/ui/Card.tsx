import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface)] shadow-[0_12px_32px_rgba(72,49,26,0.06)] ${className}`}
    >
      {children}
    </article>
  );
}
