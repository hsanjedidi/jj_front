import { HeroCreativeSliderBlock } from "@/app/blocks/hero";
import { sliderHeroData } from "@/app/hooks/data-hero";

export function Menu2() {
  return (
    <>
      <HeroCreativeSliderBlock {...sliderHeroData} />
    </>
  );
}
