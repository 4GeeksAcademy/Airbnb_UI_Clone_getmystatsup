import { notFound } from "next/navigation";
import { ListingSection } from "@/components/home/ListingSection";
import { categories, listings } from "@/lib/mock-data";

function filterListings(query: string) {
  if (!query) return listings;
  const q = query.toLowerCase();
  return listings.filter(
    (l) =>
      l.title.toLowerCase().includes(q) ||
      l.location.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q),
  );
}

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams?.q || "";
  const filtered = filterListings(query);

  if (!filtered.length) {
    return (
      <main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-8 px-4 pb-16 pt-7 md:px-8">
        <h1 className="text-3xl font-semibold text-slate-900">No results found</h1>
        <p className="text-slate-600">Try adjusting your search or filters.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-8 px-4 pb-16 pt-7 md:px-8">
      <h1 className="text-3xl font-semibold text-slate-900">Search results</h1>
      <p className="text-slate-600">{filtered.length} stays found for <span className="font-semibold">{query || "all"}</span></p>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {filtered.map((listing) => (
          <div key={listing.id}>
            <ListingSection section={{ id: listing.id, title: listing.title, subtitle: listing.location, listings: [listing] }} />
          </div>
        ))}
      </div>
    </main>
  );
}