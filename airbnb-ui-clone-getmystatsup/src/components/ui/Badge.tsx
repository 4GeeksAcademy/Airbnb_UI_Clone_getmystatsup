type BadgeProps = {
  label: string;
};

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
      {label}
    </span>
  );
}
