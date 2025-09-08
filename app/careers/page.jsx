"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { ROLES } from "@/app/data/CareersData";


export default function Careers() {
  const [sel, setSel] = useState(ROLES[0]);
  const [showDetailsMobile, setShowDetailsMobile] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white mt-16">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10">
        <h1 className="text-4xl md:text-5xl font-bold">Careers at WeCode</h1>
        <p className="text-gray-400 mt-3 max-w-2xl">
          Join us to innovate, mentor, and build future-ready solutions.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
          <aside
            className={[
              "bg-neutral-900 rounded-xl p-2 md:p-3 md:sticky md:top-6 max-h-[70vh] overflow-auto",
              "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
              showDetailsMobile ? "hidden md:block" : "block"
            ].join(" ")}
          >
            <ul className="space-y-2">
              {ROLES.map((r, index) => (
                <li key={r.id + "-" + index}>
                  <button
                    onClick={() => {
                      setSel(r);
                      if (typeof window !== "undefined" && window.innerWidth < 768) {
                        setShowDetailsMobile(true);
                      }
                    }}
                    className={`w-full text-left rounded-lg p-3 transition ${
                      sel.id === r.id ? "bg-neutral-800" : "hover:bg-neutral-800/70"
                    }`}
                  >
                    <div className="text-sm text-gray-400">
                      {r.locations.join(", ")}
                    </div>
                    <div className="font-semibold mt-1">{r.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{r.level}</div>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Details */}
          <section
            className={[
              "bg-neutral-900 rounded-2xl p-6 md:p-8",
              showDetailsMobile ? "block" : "hidden md:block"
            ].join(" ")}
          >
            {/* Mobile back + apply */}
            <div className="md:hidden mb-4 flex items-center justify-between">
              <button
                onClick={() => setShowDetailsMobile(false)}
                className="rounded-lg bg-neutral-800 px-3 py-2 text-sm hover:bg-neutral-700"
              >
                ← Back
              </button>
              <Link
                href={sel.applyUrl}
                className="rounded-lg bg-purple-500 px-4 py-2 font-medium hover:bg-purple-400"
              >
                Apply
              </Link>
            </div>

            {/* Desktop header */}
            <div className="hidden md:flex items-start justify-between gap-4">
              <div>
                <div className="text-gray-400">{sel.locations.join(" • ")}</div>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">{sel.title}</h2>
                <div className="text-sm text-gray-500 mt-1">{sel.level}</div>
              </div>
              <Link
                href={sel.applyUrl}
                className="shrink-0 rounded-lg bg-purple-500 px-4 py-2 font-medium hover:bg-purple-400"
              >
                Apply
              </Link>
            </div>

            {/* Mobile title */}
            <div className="md:hidden">
              <div className="text-gray-400">{sel.locations.join(" • ")}</div>
              <h2 className="text-2xl font-bold mt-2">{sel.title}</h2>
              <div className="text-xs text-gray-500 mt-1">{sel.level}</div>
            </div>

            <div className="mt-6 grid gap-6">
              <div className="rounded-xl bg-neutral-800 p-5">
                <h3 className="text-lg font-semibold">Minimum Qualifications</h3>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                  {(sel.minQual ?? []).map((q, i) => <li key={i}>{q}</li>)}
                </ul>
              </div>

              <div className="rounded-xl bg-neutral-800 p-5">
                <h3 className="text-lg font-semibold">Perks and Benefits</h3>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                  {(sel.benefits ?? []).map((q, i) => <li key={i}>{q}</li>)}
                </ul>
              </div>

              <div className="rounded-xl bg-neutral-800 p-5">
                <h3 className="text-lg font-semibold">Preferred Qualifications</h3>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                  {(sel.prefQual ?? []).map((q, i) => <li key={i}>{q}</li>)}
                </ul>
              </div>

              <div className="rounded-xl bg-neutral-800 p-5">
                <h3 className="text-lg font-semibold">About the Job</h3>
                <div className="mt-3 space-y-2 text-gray-300">
                  {(sel.about ?? []).map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}