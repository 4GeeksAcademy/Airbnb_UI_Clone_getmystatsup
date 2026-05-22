const columns = [
  {
    heading: "Support",
    links: ["Help Center", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options"],
  },
  {
    heading: "Hosting",
    links: ["Host your home", "Host an experience", "Responsible hosting", "Community forum"],
  },
  {
    heading: "Airbnb",
    links: ["Newsroom", "Careers", "Investors", "Gift cards"],
  },
];

export function SiteFooter() {
  return (
    <footer className="rounded-t-3xl border border-x-0 border-b-0 border-[var(--border-subtle)] bg-[var(--surface)] px-6 py-10 md:px-10">
      <div className="grid gap-8 md:grid-cols-3">
        {columns.map((column) => (
          <section key={column.heading}>
            <h3 className="text-base font-semibold text-slate-900">{column.heading}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-slate-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="mt-8 border-t border-[var(--border-subtle)] pt-4 text-sm text-slate-600">
        <p>2026 Airbnb Clone UI. Crafted for learning and portfolio use.</p>
      </div>
    </footer>
  );
}
