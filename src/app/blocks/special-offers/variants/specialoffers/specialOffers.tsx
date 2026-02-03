"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, UtensilsCrossed } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SpecialOffersBlockProps } from "@/app/types/common.types";
import { specialOffersData } from "@/app/hooks/data-special-offers";
import { cn } from "@/lib/utils";

const SpecialOffersBlock = ({
  items = specialOffersData.items,
  emptyMessage = specialOffersData.emptyMessage,
  className,
}: SpecialOffersBlockProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  if (!items || items.length === 0) {
    return <div className="p-10 text-center bg-[#F9F3EB]">{emptyMessage}</div>;
  }

  return (
    <div
      className={cn(
        "bg-[#F9F3EB] py-20 text-black min-h-[70vh] flex flex-col justify-center overflow-hidden",
        className,
      )}
    >
      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif italic mb-4 text-neutral-800">
            Our Special Selection
          </h2>
          <div className="w-20 h-1 bg-[#c24156] mx-auto opacity-50 mb-8"></div>

          {/* Bouton Voir Menu Principal */}
          <button className="px-8 py-3 bg-neutral-900 text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#c24156] transition-colors shadow-lg">
            View Full Menu
          </button>
        </motion.div>
      </div>

      {/* --- SLIDER SECTION --- */}
      <section className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          speed={1000}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            768: { slidesPerView: 1.5, spaceBetween: 20 },
            1280: { slidesPerView: 1.8, spaceBetween: 30 },
          }}
          className="w-full !pb-16"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="flex items-center">
              {({ isActive }) => (
                <motion.div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-2xl bg-neutral-800"
                  animate={{
                    scale: isActive ? 1.05 : 0.85,
                    opacity: isActive ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                  />

                  {/* Overlay dégradé */}
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- NAVIGATION CONTROLS --- */}
      </section>
    </div>
  );
};

export default SpecialOffersBlock;
