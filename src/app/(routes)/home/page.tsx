import { AboutClassic } from "@/app/blocks/about";
import BadgesList from "@/app/blocks/badges/BadgesList";
import { GalleryBasic, MasonryGallery } from "@/app/blocks/gallery";
import { HeroCreativeSliderBlock } from "@/app/blocks/hero";
import { Landing } from "@/app/blocks/landing/Landing";
import MeetStars from "@/app/blocks/meetStars/MeetStars";
import { ServicesList } from "@/app/blocks/services";
import { SpecialOffersBlock } from "@/app/blocks/special-offers";
import { aboutData } from "@/app/hooks/data-about";
import { badgesListData } from "@/app/hooks/data-brands";
import { ctaData } from "@/app/hooks/data-cta";
import { menuWeekData } from "@/app/hooks/data-dish";
import { galleryData } from "@/app/hooks/data-gallery";
import { sliderHeroData } from "@/app/hooks/data-hero";
import { ServiceCardListData } from "@/app/hooks/data-services";
import { specialOffersData } from "@/app/hooks/data-special-offers";
import { teamBlockData } from "@/app/hooks/data-team";
import WeekSpecials from "@/app/blocks/menu/menu-week-specials/menuWeekSpecials";
import Cta from "@/app/blocks/cta/variants/ctaOne/ctaOne";
import { TeamOneBlock as TeamBlock } from "@/app/blocks/team";

const HomePage = () => {
  return (
    <>
      <>
        <Landing />
        <AboutClassic {...aboutData} />
        <BadgesList {...badgesListData} />

        <MeetStars />

        {/* Slider Hero - Block */}
        {/* <HeroCreativeSliderBlock {...sliderHeroData} /> */}
        {/* / Slider Hero - Block */}

        {/* About - Block */}
        {/* / About - Block */}

        {/* Special Offers - Block */}
        <SpecialOffersBlock {...specialOffersData} />
        {/* / Special Offers - Block */}
 {/* Services - List - Block */}
      <ServicesList {...ServiceCardListData} />
      {/* / Services - List - Block */}
        {/* Badges - Block */}
        {/* / Badges - Block */}

        {/* CTA - Block */}
        <Cta {...ctaData} />
        {/* / CTA - Block */}

        {/* Gallery */}
        <MasonryGallery {...galleryData} />
        {/* / Gallery */}
      </>
    </>
  );
};

export default HomePage;
