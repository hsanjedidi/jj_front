"use client";
import { useState } from "react";
import Image from "next/image";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Link from "next/link";

// Interface
import { Alignment, SpecialOffersBlockProps } from "@/app/types/common.types";
import { specialOffersData } from "@/app/hooks/data-special-offers";
import { cn } from "@/lib/utils";
import divider from "@/app/components/common/divider/divider";
import BlockTitle from "@/app/components/common/block-title/block-title";

const SpecialOffersBlock = ({
  items = specialOffersData.items,
  emptyMessage = specialOffersData.emptyMessage,
  carouselAriaLabel = specialOffersData.carouselAriaLabel,
  prevButtonAriaLabel = specialOffersData.prevButtonAriaLabel,
  nextButtonAriaLabel = specialOffersData.nextButtonAriaLabel,
  paginationBulletAriaLabel = specialOffersData.paginationBulletAriaLabel,
  className,
}: SpecialOffersBlockProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Improved data validation check
  if (!items || items.length === 0) {
    return (
      <div className="special-offers special-offers--empty">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <BlockTitle
        subtitle={"Crafted with passion"}
        title={"Chef’s Recommendations"}
        phrase={"Handpicked dishes crafted by our chef"}
        align={"align" as Alignment}
        className=" py-8  w-full"
        divider={true}
      />
      <section
        id="special-offers"
        className={cn(`special-offers bg-background`, className)}
      >
        {/* Slider Special Offers */}
        <Swiper
          className="special-offers__slider"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination, A11y]}
          loop={true}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          a11y={{
            enabled: true,
            prevSlideMessage: prevButtonAriaLabel,
            nextSlideMessage: nextButtonAriaLabel,
            paginationBulletMessage: paginationBulletAriaLabel.replace(
              "{index}",
              "{{index}}",
            ),
            containerMessage: carouselAriaLabel,
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="special-offers__slider__wrapper">
                {/* Slider item -- image */}
                <div className="special-offers__slider__image">
                  <div className="special-offers__slider__image-overlayer"></div>
                  <Image
                    src={item.image}
                    alt={item.altText}
                    width={1920}
                    height={1080}
                    priority={index === 0}
                  />
                </div>
                {/* Slider item -- info */}
                <motion.div
                  className={`special-offers__slider__info  bg-[#303d3b]`}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={
                    activeSlide === index ? { opacity: 1, scale: 1 } : {}
                  }
                  transition={{ duration: 1 }}
                >
                  <span className="tag">{item.tag}</span>
                  <h3 className="special-offers__slider__title text-white">
                    {item.title} <span>{item.price}</span>
                  </h3>
                  <p className="special-offers__slider__primary text-white">
                    {item.description_primary}
                  </p>
                  <p className="special-offers__slider__secondary text-white">
                    {item.description_secondary}
                  </p>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Slider Special Offers */}
      </section>
    </div>
  );
};

export default SpecialOffersBlock;
