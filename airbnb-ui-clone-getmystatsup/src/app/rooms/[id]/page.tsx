import { notFound } from "next/navigation";

import { BookingCard } from "@/components/details/BookingCard";
import { Badge } from "@/components/ui/Badge";
import { findListingById } from "@/lib/mock-data";

type RoomPageProps = {
  params: Promise<{ id: string }>;
};

export default async function RoomPage({ params }: RoomPageProps) {
  const { id } = await params;
  const listing = findListingById(id);

  if (!listing) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-8 px-4 pb-16 pt-7 md:px-8">
      <header className="space-y-2">
        <h1 className="text-4xl text-slate-900">{listing.title}</h1>
        <p className="text-sm text-slate-600">
          {listing.location} • {listing.rating} ({listing.reviews} reviews)
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
        <div className="space-y-6">
          <div
            className="h-72 rounded-3xl border border-[var(--border-subtle)] md:h-[420px]"
            style={{
              background: `linear-gradient(135deg, ${listing.imagePalette[0]}, ${listing.imagePalette[1]})`,
            }}
          />

          <article className="space-y-4 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface)] p-6">
            <h2 className="text-2xl text-slate-900">Hosted by {listing.host.name}</h2>
            <p className="text-slate-700">{listing.description}</p>
            <div className="flex flex-wrap gap-2">
              <Badge label={`${listing.host.yearsHosting} years hosting`} />
              {listing.host.isSuperhost ? <Badge label="Superhost" /> : null}
              {listing.guestFavorite ? <Badge label="Guest favorite" /> : null}
            </div>
          </article>

          <article className="space-y-4 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface)] p-6">
            <h2 className="text-2xl text-slate-900">What this place offers</h2>
            <ul className="grid gap-2 text-slate-700 md:grid-cols-2">
              {listing.amenities.map((amenity) => (
                <li key={amenity} className="rounded-xl bg-white px-3 py-2">
                  {amenity}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <BookingCard nightlyRate={listing.pricePerNight} />
      </section>
    </main>
  );
}