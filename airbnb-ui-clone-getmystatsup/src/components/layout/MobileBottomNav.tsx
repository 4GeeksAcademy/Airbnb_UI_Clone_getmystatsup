const items = ["Explore", "Wishlists", "Trips", "Profile"];

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border-subtle)] bg-[var(--surface)]/95 px-3 py-2 backdrop-blur md:hidden">
      <ul className="grid grid-cols-4 gap-2">
        {items.map((item, index) => (
          <li key={item}>
            <button
              type="button"
              className={`w-full rounded-xl px-2 py-2 text-xs font-semibold ${
                index === 0 ? "bg-[var(--foreground)] text-white" : "text-slate-700 hover:bg-[var(--surface-muted)]"
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
