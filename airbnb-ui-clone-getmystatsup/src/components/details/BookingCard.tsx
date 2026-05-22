"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";

type BookingCardProps = {
  nightlyRate: number;
};

export function BookingCard({ nightlyRate }: BookingCardProps) {
  const [nights, setNights] = useState(4);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const cleaningFee = 69;
  const serviceFee = 52;
  const totalGuests = adults + children;

  const total = useMemo(() => nightlyRate * nights + cleaningFee + serviceFee, [nightlyRate, nights]);

  const formattedDateRange = useMemo(() => {
    const checkIn = new Date(2026, 6, 12);
    const checkOut = new Date(checkIn);
    checkOut.setDate(checkIn.getDate() + nights);

    return `${checkIn.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${checkOut.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
  }, [nights]);

  const adjustCount = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    direction: "increment" | "decrement",
  ) => {
    setter((current) => {
      if (direction === "increment") {
        return current + 1;
      }
      return Math.max(0, current - 1);
    });
  };

  return (
    <>
    <Card className="sticky top-8 p-5">
      <p className="text-xl font-semibold text-slate-900">${nightlyRate} night</p>
      <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
        <button
          type="button"
          onClick={() => setIsDateModalOpen(true)}
          className="flex w-full items-center justify-between border-b border-[var(--border-subtle)] px-4 py-3 text-left hover:bg-[var(--surface-muted)]"
        >
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.09em] text-slate-500">Dates</span>
            <span className="text-sm font-medium text-slate-800">{formattedDateRange}</span>
          </span>
          <span className="text-xs font-semibold text-[var(--brand)]">Change</span>
        </button>
        <button
          type="button"
          onClick={() => setIsGuestModalOpen(true)}
          className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-[var(--surface-muted)]"
        >
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.09em] text-slate-500">Guests</span>
            <span className="text-sm font-medium text-slate-800">{totalGuests} guests {infants > 0 ? `, ${infants} infant${infants > 1 ? "s" : ""}` : ""} {pets > 0 ? `, ${pets} pet${pets > 1 ? "s" : ""}` : ""}</span>
          </span>
          <span className="text-xs font-semibold text-[var(--brand)]">Change</span>
        </button>
      </div>
      <Button className="mt-4 w-full" onClick={() => setIsReviewModalOpen(true)}>
        Reserve
      </Button>
      <p className="mt-2 text-center text-xs text-slate-500">You won&apos;t be charged yet</p>

      <dl className="mt-5 space-y-2 text-sm text-slate-700">
        <div className="flex justify-between">
          <dt>${nightlyRate} x {nights} nights</dt>
          <dd>${nightlyRate * nights}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Cleaning fee</dt>
          <dd>${cleaningFee}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Service fee</dt>
          <dd>${serviceFee}</dd>
        </div>
        <div className="mt-3 flex justify-between border-t border-[var(--border-subtle)] pt-3 font-semibold text-slate-900">
          <dt>Total before taxes</dt>
          <dd>${total}</dd>
        </div>
      </dl>
    </Card>
    <Modal isOpen={isDateModalOpen} title="Change dates" onClose={() => setIsDateModalOpen(false)}>
      <div className="space-y-4">
        <p className="text-sm text-slate-600">Pick your trip length with a quick preview calendar.</p>
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.09em] text-slate-500">Length of stay</p>
          <input
            type="range"
            min={1}
            max={14}
            value={nights}
            onChange={(event) => setNights(Number(event.target.value))}
            className="mt-3 w-full"
          />
          <p className="text-sm font-medium text-slate-800">{nights} nights selected</p>
        </div>
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-4 text-sm text-slate-700">
          Date preview: {formattedDateRange}
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={() => setIsDateModalOpen(false)}>
            Save dates
          </Button>
        </div>
      </div>
    </Modal>

    <Modal isOpen={isGuestModalOpen} title="Guests" onClose={() => setIsGuestModalOpen(false)}>
      <div className="space-y-4">
        {[
          { label: "Adults", detail: "Ages 13+", value: adults, setValue: setAdults, minimum: 1 },
          { label: "Children", detail: "Ages 2-12", value: children, setValue: setChildren, minimum: 0 },
          { label: "Infants", detail: "Under 2", value: infants, setValue: setInfants, minimum: 0 },
          { label: "Pets", detail: "Bringing a service animal?", value: pets, setValue: setPets, minimum: 0 },
        ].map((group) => (
          <div key={group.label} className="flex items-center justify-between rounded-2xl border border-[var(--border-subtle)] bg-white px-4 py-3">
            <div>
              <p className="font-semibold text-slate-900">{group.label}</p>
              <p className="text-sm text-slate-600">{group.detail}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  if (group.value > group.minimum) {
                    adjustCount(group.setValue, "decrement");
                  }
                }}
                className="h-8 w-8 rounded-full border border-[var(--border-subtle)] text-lg text-slate-700 hover:bg-[var(--surface-muted)]"
              >
                -
              </button>
              <span className="w-6 text-center text-sm font-semibold text-slate-900">{group.value}</span>
              <button
                type="button"
                onClick={() => adjustCount(group.setValue, "increment")}
                className="h-8 w-8 rounded-full border border-[var(--border-subtle)] text-lg text-slate-700 hover:bg-[var(--surface-muted)]"
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <Button variant="outline" onClick={() => setIsGuestModalOpen(false)}>
            Save guests
          </Button>
        </div>
      </div>
    </Modal>

    <Modal isOpen={isReviewModalOpen} title="Review and continue" onClose={() => setIsReviewModalOpen(false)}>
      <div className="space-y-5">
        <article className="rounded-2xl border border-[var(--border-subtle)] bg-white p-4">
          <h4 className="text-lg font-semibold text-slate-900">Your trip</h4>
          <dl className="mt-3 space-y-2 text-sm text-slate-700">
            <div className="flex justify-between">
              <dt>Dates</dt>
              <dd>{formattedDateRange}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Guests</dt>
              <dd>{totalGuests} guests</dd>
            </div>
            <div className="flex justify-between">
              <dt>Nightly rate</dt>
              <dd>${nightlyRate}</dd>
            </div>
          </dl>
        </article>

        <article className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-4">
          <h4 className="text-lg font-semibold text-slate-900">Price details</h4>
          <dl className="mt-3 space-y-2 text-sm text-slate-700">
            <div className="flex justify-between">
              <dt>${nightlyRate} x {nights} nights</dt>
              <dd>${nightlyRate * nights}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Cleaning fee</dt>
              <dd>${cleaningFee}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Service fee</dt>
              <dd>${serviceFee}</dd>
            </div>
            <div className="mt-3 flex justify-between border-t border-[var(--border-subtle)] pt-3 font-semibold text-slate-900">
              <dt>Total before taxes</dt>
              <dd>${total}</dd>
            </div>
          </dl>
        </article>

        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={() => setIsReviewModalOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsReviewModalOpen(false)}>Continue to pay</Button>
        </div>
      </div>
    </Modal>
    </>
  );
}
