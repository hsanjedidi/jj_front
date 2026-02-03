"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroInnerBlock from "../common/hero-inner/Hero-inner";
import { HeroInnerHistoryData } from "@/app/hooks/data";

const EntertainmentPage = () => {
  return (
    <div className="bg-[#0F1C1C] min-h-screen selection:bg-[#D4AF37] selection:text-[#0F1C1C]">
      <HeroSection />

      <div className="relative z-10 bg-[#0F1C1C]">
        <LiveMusicSection />
        <IrishDancingSection />
        <AdditionalEventsSection />
      </div>

      {/* Footer décoratif simple */}
      <footer className="py-20 text-center border-t border-[#D4AF37]/10">
        <p className="font-serif italic text-[#F5F5DC]/40 text-sm italic">
          Authentic Irish Hospitality Since 1908
        </p>
      </footer>
    </div>
  );
};

const HeroSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <HeroInnerBlock
      title={"Entertainment"}
      image={"/hero/gallery-14a.jpg"}
      altText={HeroInnerHistoryData.altText}
      breadcrumbs={[
        { id: 1, title: "Home", link: "/" },
        { id: 2, title: "Entertainment", link: "/entertainment" },
      ]}
    />
  );
};

const LiveMusicSection = () => {
  return (
    <section className="py-24 lg:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Image avec cadre décalé */}
        <motion.div
          className="lg:col-span-7 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute -top-6 -left-6 w-full h-full border border-[#D4AF37]/20 hidden lg:block" />
          <div className="relative aspect-[16/10] overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
            <img
              src="/ourImages/awards/madessen.png"
              className="w-full h-full object-cover"
              alt="Live Music"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-[#D4AF37] p-10 hidden lg:block">
            <p className="font-serif text-[#0F1C1C] text-3xl italic leading-none">
              Live
            </p>
            <p className="text-[#0F1C1C] text-[10px] font-bold tracking-widest uppercase mt-2 text-right">
              Every Night
            </p>
          </div>
        </motion.div>

        {/* Texte */}
        <div className="lg:col-span-5 text-[#F5F5DC]">
          <h2 className="font-serif text-5xl md:text-7xl mb-8 italic">
            Microphone Madness
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                The Schedule
              </h3>
              <p className="text-xl font-light">
                Monday – Sunday <span className="text-[#D4AF37] mx-2">/</span>{" "}
                <span className="italic text-[#F5F5DC]/60">from 8.30pm</span>
              </p>
            </div>
            <div className="pt-8 border-t border-[#D4AF37]/10">
              <h4 className="font-serif text-2xl mb-4 italic">
                The Legends: Dubh Linn
              </h4>
              <p className="text-[#F5F5DC]/60 leading-relaxed font-light italic">
                Declan (accordion), Paddy (guitar) and Sean (whistles) bring
                over 40 years of mastery to JJ'S, weaving the very fabric of
                Irish soul through every note.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IrishDancingSection = () => {
  return (
    <section className="py-24 lg:py-40 bg-[#142626]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 text-[#F5F5DC]">
          <h2 className="font-serif text-5xl md:text-7xl mb-8 italic text-right lg:text-left">
            Karaoke Idol
          </h2>
          <div className="space-y-8 text-right lg:text-left">
            <div>
              <h3 className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Main Stage
              </h3>
              <p className="text-xl font-light italic text-[#F5F5DC]/80">
                Performed Nightly from 10.00pm
              </p>
            </div>
            <p className="text-[#F5F5DC]/60 leading-relaxed font-light italic">
              Led by John and Ciara, our troupe features world-class performers
              from the industry’s most prestigious global shows. A visceral,
              rhythmic masterpiece.
            </p>
            <button className="mt-8 border border-[#D4AF37]/30 px-10 py-4 text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#D4AF37] hover:text-[#0F1C1C] transition-all duration-500">
              Book a Front Row Table
            </button>
          </div>
        </div>

        <motion.div
          className="lg:col-span-7 order-1 lg:order-2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#D4AF37]/20 hidden lg:block" />
          <div className="relative aspect-[16/10] overflow-hidden grayscale-[0.3]">
            <img
              src="/ourImages/awards/karaoke.png"
              className="w-full h-full object-cover shadow-2xl"
              alt="Irish Dancing"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AdditionalEventsSection = () => {
  const events = [
    {
      title: "Jammin's Nights",
      venue: "",
      schedule: "Every Sunday",
      time: "9:00pm",
    },
    {
      title: "The Craic",
      venue: "",
      schedule: "Tuesday to Saturday",
      time: "8:00pm",
    },
    {
      title: "The Ark Angels Band",
      venue: "Fireside Lounge",
      schedule: "Thursdays",
      time: "7:30pm",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
            The Weekly Program
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#F5F5DC] italic leading-tight">
            Beyond the Main Stage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#D4AF37]/10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`p-12 text-center group transition-all duration-700 hover:bg-[#D4AF37]/5 ${index !== events.length - 1 ? "md:border-r border-[#D4AF37]/10" : ""}`}
            >
              <h3 className="font-serif text-2xl text-[#F5F5DC] mb-6 italic group-hover:text-[#D4AF37] transition-colors">
                {event.title}
              </h3>
              <p className="text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] font-bold mb-4">
                {event.venue}
              </p>
              <div className="w-8 h-[1px] bg-[#D4AF37]/30 mx-auto mb-6"></div>
              <p className="text-[#F5F5DC]/50 text-sm font-light italic mb-1">
                {event.schedule}
              </p>
              <p className="text-[#F5F5DC]/40 text-xs tracking-widest">
                {event.time}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntertainmentPage;
