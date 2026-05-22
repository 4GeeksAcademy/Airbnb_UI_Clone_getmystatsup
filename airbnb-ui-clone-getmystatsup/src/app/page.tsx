import { CategoryTabs } from "@/components/home/CategoryTabs";
import { InspirationSection } from "@/components/home/InspirationSection";
import { ListingSection } from "@/components/home/ListingSection";
import { SearchBar } from "@/components/home/SearchBar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { categories, listingSections } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-10 px-4 pb-28 pt-7 md:px-8 md:pb-14">
        <header className="space-y-5">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-600">Airbnb style discovery</p>
            <h1 className="max-w-3xl text-4xl leading-tight text-slate-900 md:text-6xl">
              Find uncommon stays for your next escape.
            </h1>
          </div>
          <SearchBar />
          <CategoryTabs categories={categories} />
        </header>

        <div className="space-y-10">
          {listingSections.map((section) => (
            <ListingSection key={section.id} section={section} />
          ))}
        </div>

        <InspirationSection />
      </main>

      <SiteFooter />
      <MobileBottomNav />
    </div>
  );
}

