import { Button } from "@/components/ui/Button";

const slots = [
  { label: "Where", value: "Search destinations" },
  { label: "Check in", value: "Add dates" },
  { label: "Check out", value: "Add dates" },
  { label: "Who", value: "Add guests" },
];

export function SearchBar() {
  return (
    <section className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface)] p-2 shadow-[0_16px_36px_rgba(52,43,30,0.12)]">
      <div className="grid gap-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_auto] md:items-center">
        {slots.map((slot) => (
          <button
            key={slot.label}
            type="button"
            className="rounded-full px-4 py-3 text-left hover:bg-[var(--surface-muted)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.09em] text-slate-500">{slot.label}</p>
            <p className="text-sm font-medium text-slate-900">{slot.value}</p>
          </button>
        ))}
        <Button className="h-12 w-full md:w-auto">Search</Button>
      </div>
    </section>
  );
}
