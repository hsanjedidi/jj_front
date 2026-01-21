"use client";

import BlockTitle from "@/app/components/common/block-title/block-title";
import { teamBlockData } from "@/app/hooks/data-team";
import AnimatedCardStack from "./AnimatedCardStack";

const MeetStars = () => {


  const images = [
    "/ourImages/band/resident_band_5.jpg",
    "/ourImages/band/resident_band_4.jpg",
    "/ourImages/band/resident_band_3.jpg",
    "/ourImages/band/resident_band_2.jpg",
    "/ourImages/band/resident_band_1.jpg",
  ];

  const blockTitleProps = {
    title: teamBlockData.title,
    subtitle: teamBlockData.subtitle,
    phrase: teamBlockData.description,
    divider: teamBlockData.divider,
  };

  return (
    <div className={` bg-background flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 py-24 overflow-hidden  `}>
      <div className="team-block__container">
        <BlockTitle
          {...blockTitleProps}
        />
      </div>

      <div className=" w-80 h-80 sm:h-72 sm:w-72 lg:w-96 lg:h-96 -translate-x-4 md:-translate-x-0 mx-auto my-auto">
        <AnimatedCardStack
          randomRotation={false}
          sensitivity={200}
          sendToBackOnClick={true}
          cards={images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`card-${i + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ))}
          autoplayDelay={2000}
          pauseOnHover={false}
        />
      </div>
    </div>
  );
};

export default MeetStars;
