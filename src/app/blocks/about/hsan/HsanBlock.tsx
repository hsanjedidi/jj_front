"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type DiscoverMoreProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
};

const DiscoverMore = ({
  title = "Discover More",
  subtitle = "Step Into Our Story",
  description = "I create premium digital experiences with a strong focus on design, performance, and elegance. Every detail matters.",
  image = "/ourImages/awards/award.jpg",
}: DiscoverMoreProps) => {
  return (
    <section className="relative overflow-hidden bg-[#F9F3EB] py-20 sm:py-28">
      {/* subtle background glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ================= TEXT ================= */}
        <div className="space-y-6">
          {subtitle && (
            <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-[#d4af37] font-semibold">
              {subtitle}
            </span>
          )}

          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-black leading-tight">
            {title}
          </h2>

          <p className="max-w-xl text-sm sm:text-base text-black/65 leading-relaxed">
            {description}
          </p>

          <div className="pt-4">
            <button className="group relative inline-flex items-center gap-3 rounded-full border border-[#d4af37]/40 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#312806] transition-all duration-300 hover:bg-[#d4af37] hover:text-black">
              Our History
              <span className="block h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
            </button>
          </div>
        </div>

        {/* ================= IMAGE AJUSTÉE ================= */}
        {/* 1. On enlève h-[420px] pour éviter de compresser l'image.
            2. On utilise 'relative w-full' pour que l'image prenne sa place naturelle.
        */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl">
          <img
            src={image}
            alt="Discover more"
            className="w-full h-auto block object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* overlay léger (optionnel) */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* border glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
};

export default DiscoverMore;
