import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--brand)] text-white hover:bg-[var(--brand-strong)] shadow-[0_10px_24px_rgba(170,56,39,0.22)]",
  ghost: "bg-transparent text-[var(--foreground)] hover:bg-black/5",
  outline: "border border-[var(--border-subtle)] bg-white text-[var(--foreground)] hover:bg-[var(--surface-muted)]",
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
