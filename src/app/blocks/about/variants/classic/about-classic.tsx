"use client";
import Image from "next/image";
import React from "react";

import { AboutBlockProps } from "@/app/types/common.types";

const AboutClassicBlock = ({
  imageUrl,
  altText,
  descriptionParagraphs,
  subtitle,
  title,
}: AboutBlockProps) => {
  if (!imageUrl || !altText || !descriptionParagraphs) return null;

  return (
    <section className="bg-[#F9F3EB] py-20 px-6 md:px-12 lg:px-24 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* SECTION TEXTE */}
        <div className="order-2 lg:order-1 space-y-8 lg:pr-16">
          <div className="flex flex-col gap-4">
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-500 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gray-400"></span>{" "}
              {subtitle || "OUR STORY"}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight uppercase">
              {title || "Murray's Bar & Grill"}
            </h2>
          </div>

          {/* max-w-md assure que le texte reste compact et loin de l'image */}
          <div className="space-y-6 text-gray-700 leading-relaxed max-w-md">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <button className="bg-[#C14455] hover:bg-[#a33948] text-white px-8 py-3 rounded-full font-bold tracking-wider transition-colors duration-300 uppercase text-sm">
            More About Us
          </button>
        </div>

        {/* SECTION IMAGES */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          {/* Image Principale */}
          <div className="relative w-[280px] h-[380px] md:w-[450px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={imageUrl}
              alt={altText}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Image Secondaire (Cocktail) avec ajustement du retrait à gauche */}
          <div className="absolute -bottom-10 -left-4 md:-left-16 lg:-left-12 w-[160px] h-[200px] md:w-[280px] md:h-[320px] rounded-lg overflow-hidden shadow-xl z-10 hidden sm:block border-4 border-[#F9F3EB]">
            <Image
              src="/ourImages/drink/drink3.png"
              alt="Detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClassicBlock;
