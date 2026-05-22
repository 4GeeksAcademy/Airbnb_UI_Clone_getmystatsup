type CategoryTabsProps = {
  categories: string[];
};

export function CategoryTabs({ categories }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category, index) => (
        <button
          key={category}
          type="button"
          className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold ${
            index === 0
              ? "border-transparent bg-[var(--foreground)] text-white"
              : "border-[var(--border-subtle)] bg-white text-slate-700 hover:bg-[var(--surface-muted)]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
