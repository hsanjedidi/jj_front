"use client";
import React from "react";

// interface
import { AboutBlockProps } from "@/app/types/common.types";

interface AboutBlockWithImagesProps extends AboutBlockProps {
  title?: string;
  rightImages?: string[];
}

const AboutTwoCols = ({
  title = "Volto Restaurant",
  descriptionParagraphsTwo,
  rightImages = ["/about/gallery-21a.webp", "/about/gallery-29a.jpg"],
}: AboutBlockWithImagesProps) => {
  if (!descriptionParagraphsTwo || descriptionParagraphsTwo.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-24" role="region" aria-label="About Volto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT — TEXT */}
        <div className="max-w-xl">
          <h2 className="mb-10 font-serif text-4xl tracking-wide text-[#c9a25d]">
            {title}
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed text-[17px]">
            {descriptionParagraphsTwo.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* RIGHT — IMAGES (same size) */}
        <div className="grid grid-cols-2 gap-12 items-start">
          {rightImages.slice(0, 2).map((src, index) => (
            <div
              key={index}
              className="w-[300px] h-[420px] overflow-hidden shadow-xl"
            >
              <img
                src={src}
                alt={`About image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

AboutTwoCols.displayName = "AboutTwoCols";
export default AboutTwoCols;
