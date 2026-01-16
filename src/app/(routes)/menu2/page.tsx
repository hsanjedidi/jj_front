import { HeroCreativeSliderBlock } from "@/app/blocks/hero";
import { sliderHeroData } from "@/app/hooks/data-hero";

const  Menu2 = () => {
  return (
    <>
      <HeroCreativeSliderBlock {...sliderHeroData} />   

    </>
  );
}

export default Menu2;