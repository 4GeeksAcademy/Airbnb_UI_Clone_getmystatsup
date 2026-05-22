import type { ListingSection as ListingSectionType } from "@/types/listing";

import { PropertyCard } from "./PropertyCard";

type ListingSectionProps = {
  section: ListingSectionType;
};

export function ListingSection({ section }: ListingSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h2 className="text-3xl leading-tight text-slate-900">{section.title}</h2>
          <p className="text-sm text-slate-600">{section.subtitle}</p>
        </div>
        <button type="button" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
          View all
        </button>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {section.listings.map((listing) => (
          <PropertyCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
