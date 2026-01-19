import { HeroCreativeSliderBlock } from "@/app/blocks/hero";
import AnimatedCardStack from "@/app/blocks/meetStars/AnimatedCardStack";
import AnimatedCardStack2 from "@/app/blocks/meetStars/AnimatedCardStack2";
import MeetStars from "@/app/blocks/meetStars/MeetStars";
import { sliderHeroData } from "@/app/hooks/data-hero";

const Menu2 = () => {
  return (
    <>
      <HeroCreativeSliderBlock {...sliderHeroData} />
      <AnimatedCardStack />
      <AnimatedCardStack2 />
    </>
  );
};

export default Menu2;
