"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // Importé pour la navigation

const Entertainment = () => {
  return (
    <section className="py-32 px-4 bg-[#0F1C1C] relative overflow-hidden">
      {/* Background Texture subtile */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[120px] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* CÔTÉ GAUCHE : TEXTE */}
          <div className="order-2 lg:order-1">
            <header className="mb-10">
              <span className="text-[#d4af37] uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                Must See
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-[#f5f5dc] leading-[1.1] mb-8">
                <span className="italic">Entertainment</span> at JJ'S
              </h2>
              <div className="w-20 h-[1px] bg-[#d4af37]/50"></div>
            </header>

            <p className="text-[#f5f5dc]/70 text-xl font-light leading-relaxed mb-12 max-w-xl">
              Enjoy a traditional Irish welcome 7 nights a week with live music,
              and Irish dancing shows starting from 8pm. Experience the magic of
              authentic Irish culture in the heart of Dublin.
            </p>

            {/* Caractéristiques Luxe */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-white/10 pt-10 mb-12">
              <div>
                <p className="text-[#d4af37] text-xs uppercase tracking-widest mb-2 font-bold">
                  Live Music
                </p>
                <p className="text-[#f5f5dc] text-sm font-light italic">
                  Every Evening
                </p>
              </div>
              <div>
                <p className="text-[#d4af37] text-xs uppercase tracking-widest mb-2 font-bold">
                  Irish Dancing
                </p>
                <p className="text-[#f5f5dc] text-sm font-light italic">
                  From 8:00 PM
                </p>
              </div>
              <div>
                <p className="text-[#d4af37] text-xs uppercase tracking-widest mb-2 font-bold">
                  Atmosphere
                </p>
                <p className="text-[#f5f5dc] text-sm font-light italic">
                  Authentic & Chic
                </p>
              </div>
            </div>

            {/* BOUTON : View Entertainment Schedule */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <a
    href="/events" // Insérez votre URL ici
    // Ouvre dans un nouvel onglet
    rel="noopener noreferrer" // Sécurité pour les liens externes
    className="inline-flex items-center group relative overflow-hidden border border-[#d4af37]/40 px-8 py-4 text-[#d4af37] uppercase tracking-[0.2em] text-[11px] font-bold transition-all duration-500 hover:text-[#0F1C1C]"
  >
    {/* Effet de remplissage au survol */}
    <span className="absolute inset-0 bg-[#d4af37] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>

    <span className="relative z-10 flex items-center gap-3">
      View Entertainment Schedule
      <svg
        className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </span>
  </a>
</motion.div>
          </div>

          {/* CÔTÉ DROIT : IMAGE AVEC CADRE DÉCALÉ */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 p-4 lg:p-0">
              {/* Le cadre doré fin derrière l'image */}
              <div className="absolute top-10 -right-6 bottom-10 -left-6 border border-[#d4af37]/30 rounded-sm hidden lg:block translate-x-4"></div>

              <div className="overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <Image
                  src="/ourImages/band/bad.png"
                  alt="Live Band"
                  width={800}
                  height={1000}
                  className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              </div>

              {/* Badge flottant minimaliste */}
              <div className="absolute -bottom-8 right-12 bg-[#d4af37] text-[#1A3030] p-8 rounded-sm shadow-2xl flex flex-col items-center min-w-[140px]">
                <span className="text-4xl font-serif font-bold leading-none">
                  07
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold mt-2 text-center">
                  Nights <br /> A Week
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
