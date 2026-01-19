"use client";

import { HeroCreativeSliderBlock } from "@/app/blocks/hero";
import AnimatedCardStack from "@/app/blocks/meetStars/AnimatedCardStack";
import AnimatedCardStack2 from "@/app/blocks/meetStars/AnimatedCardStack2";
import MeetStars from "@/app/blocks/meetStars/MeetStars";
import { sliderHeroData } from "@/app/hooks/data-hero";

const Menu2 = () => {
  const cards = [
    <div key="1" className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      <h2 className="text-4xl font-bold text-white">Card 1</h2>
    </div>,
    <div key="2" className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
      <h2 className="text-4xl font-bold text-white">Card 2</h2>
    </div>,
    <div key="3" className="w-full h-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
      <h2 className="text-4xl font-bold text-white">Card 3</h2>
    </div>,
    <div key="4" className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
      <h2 className="text-4xl font-bold text-white">Card 4</h2>
    </div>
  ];

  return (
    <>
      <HeroCreativeSliderBlock {...sliderHeroData} />
      {/* <AnimatedCardStack /> */}
      <div className="h-screen w-full flex items-center justify-center">
        <div className=" h-96 w-96 p-24">
          <AnimatedCardStack2 cards={cards} />
        </div>
      </div>
    </>
  );
};

export default Menu2;
