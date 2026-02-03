import { AboutClassic } from "@/app/blocks/about";
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
import Entertainment from "@/app/blocks/badges/BadgesList";

const HomePage = () => {
  return (
    <>
      <>
        <Landing />
        {/* Dirrab l about t3 home */}
        <AboutClassic {...aboutData} />

        {/* Dirrab explore sapces */}
        <MeetStars />

        {/* Dirrab brand vlaues */}
        <ServicesList {...ServiceCardListData} />

        {/* Dirrab Entertainment */}
        <Entertainment   />
        {/* / Badges - Block */}

        {/* Dirrab menu f home */}
        <Cta {...ctaData} />

        {/* Gallery */}
        <MasonryGallery {...galleryData} />

        {/* Special Offers - Block */}
        <SpecialOffersBlock {...specialOffersData} />
      </>
    </>
  );
};

export default HomePage;
