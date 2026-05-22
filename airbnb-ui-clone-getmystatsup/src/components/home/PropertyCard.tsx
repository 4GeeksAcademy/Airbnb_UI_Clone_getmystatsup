import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Listing } from "@/types/listing";

type PropertyCardProps = {
  listing: Listing;
};

export function PropertyCard({ listing }: PropertyCardProps) {
  const [from, to] = listing.imagePalette;

  return (
    <Card className="overflow-hidden">
      <Link href={`/rooms/${listing.id}`} className="block">
        <div
          className="relative h-52"
          style={{
            background: `linear-gradient(135deg, ${from}, ${to})`,
          }}
        >
          <button
            type="button"
            className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700"
          >
            Save
          </button>
          {listing.guestFavorite ? (
            <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-800">
              Guest favorite
            </span>
          ) : null}
        </div>
      </Link>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{listing.title}</h3>
            <p className="text-sm text-slate-600">{listing.location}</p>
            <p className="text-sm text-slate-500">{listing.distance}</p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-slate-800">{listing.rating} ({listing.reviews})</p>
        </div>
        <div className="flex items-center justify-between">
          <Badge label={`${listing.pricePerNight} / night`} />
          <Link href={`/rooms/${listing.id}`} className="text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-strong)]">
            View stay
          </Link>
        </div>
      </div>
    </Card>
  );
}
