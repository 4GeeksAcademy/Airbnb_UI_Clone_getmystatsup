const destinations = [
  { city: "Barcelona", type: "Apartment rentals" },
  { city: "Savannah", type: "Historic homes" },
  { city: "Vancouver", type: "Loft stays" },
  { city: "Tulum", type: "Beachfront villas" },
  { city: "Kyoto", type: "Traditional stays" },
  { city: "Austin", type: "Creative studios" },
  { city: "Nashville", type: "Music district homes" },
  { city: "Portland", type: "Cabin escapes" },
];

export function InspirationSection() {
  return (
    <section className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface)] p-6 md:p-8">
      <h2 className="text-3xl text-slate-900">Inspiration for future getaways</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {destinations.map((destination) => (
          <button
            key={destination.city}
            type="button"
            className="rounded-2xl border border-[var(--border-subtle)] bg-white px-4 py-4 text-left hover:bg-[var(--surface-muted)]"
          >
            <p className="font-semibold text-slate-900">{destination.city}</p>
            <p className="text-sm text-slate-600">{destination.type}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
