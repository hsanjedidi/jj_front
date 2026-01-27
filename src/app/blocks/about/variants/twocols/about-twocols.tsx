"use client";
import React from "react";
import { AboutBlockProps } from "@/app/types/common.types";

interface AboutBlockWithImagesProps extends AboutBlockProps {
  title?: string;
  leftImage?: string;
  smallRightImage?: string;
}

const AboutTwoCols = ({
  title = "UTTERLY UNIQUE LOCATIONS",
  descriptionParagraphsTwo = [],
  leftImage = "/about/gallery-27a.jpg", // L'image de la ville/port
  smallRightImage = "/about/gallery-29a.jpg", // L'image de la danseuse
}: AboutBlockWithImagesProps) => {
  if (!descriptionParagraphsTwo || descriptionParagraphsTwo.length === 0) {
    return null;
  }

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* GAUCHE : La grande image d'ambiance (7 colonnes sur 12) */}
        <div className="lg:col-span-7 w-full h-[500px] lg:h-[700px]">
          <img
            src={leftImage}
            alt="Atmospheric location"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DROITE : Petite image + Texte (5 colonnes sur 12) */}
        <div className="lg:col-span-5 flex flex-col items-start lg:pl-12">
          {/* Petite image verticale style portrait */}
          <div className="w-full max-w-[320px] mb-12 self-center lg:self-start">
            <img
              src={smallRightImage}
              alt="Performance"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* Bloc Texte */}
          <div className="max-w-md">
            <h2 className="text-xl md:text-5xl font-light tracking-widest uppercase mb-8 leading-tight">
              {title}
            </h2>

            <div className="space-y-6 text-gray-300 font-light leading-relaxed text-sm tracking-wide">
              {descriptionParagraphsTwo.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Bouton style lien en bas */}
          </div>
        </div>
      </div>
    </section>
  );
};

AboutTwoCols.displayName = "AboutTwoCols";
export default AboutTwoCols;
