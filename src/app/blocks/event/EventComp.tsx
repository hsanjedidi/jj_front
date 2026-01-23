"use client";

import { event2 } from "@/app/hooks2/events";
import { useComponentMounted } from "@/app/hooks2/useComponentMounted";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

type DisplayedMedia = {
  id: string;
  url: string;
  type?: "video";
}[];

const dayOfWeekMap: { [key: number]: string } = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const EventComp = () => {
  const mounted = useComponentMounted();
  const displayedMedia: DisplayedMedia = [
    ...(event2.video ? [{ ...event2.video, type: "video" as const }] : []),
    event2.thumbnail,
    ...(event2.media ?? []),
  ];
  console.log("Displayed Media: ", displayedMedia);
  return (
    <div
      className={cn(
        "opacity-0 bg-neutral-900 transition-opacity duration-500 ease-in-out forwards pt-44 pb-8 px-4 shadow-lg min-h-screen",
        mounted && "opacity-100",
      )}
    >
      <div className="grid  items-stretch grid-rows-2 min-h-[32rem] md:grid-rows-1 md:grid-cols-[32rem_24rem] h-full w-fit max-w-7xl mx-auto overflow-hidden bg-[#f5f4f3] rounded-md ">
        <div className=" h-full md:w-[32rem] ">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            swipeable
            emulateTouch
            infiniteLoop
            className=" md:h-fit"
          >
            {displayedMedia.map((media) => (
              <div
                key={media.id}
                className="  h-full flex items-center justify-center select-none pointer-events-none"
              >
                {media.type === "video" ? (
                  <video
                    controls
                    src={media.url}
                    autoPlay
                    muted
                    loop
                    className="h-full w-full object-cover  select-none pointer-events-auto "
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={media.url}
                    alt={event2.title}
                    className="h-full w-full object-cover select-none"
                  />
                )}
              </div>
            ))}
          </Carousel>
        </div>

        <div className="md:w-96 h-full flex flex-1 flex-col  md:pt-24 px-4 ">
          <div className="">
            <span className="text-primary font-semibold italic flex translate-y-1">
              {event2.type === "WEEKLY" ? "Weekly Event" : "Special Event "}
            </span>
            <h2 className="text-4xl font-bold text-black">{event2.title}</h2>
          </div>
          <Separator className="my-4 bg-primary dark:bg-primary h-0.5" />
          <div className=" text-background font-semibold space-x-1 text-sm">
            {event2.type === "WEEKLY" && (
              <span>{`Every ${dayOfWeekMap[event2.dayOfWeek]}`},</span>
            )}
            <span>
              {event2.startTime} - {event2.endTime}
            </span>
            <span className=" text-xs text-text-muted ">*Bahrain Time</span>
          </div>
          <p className="text-gray-700 py-3 ">{event2.description}</p>
          <div className="flex items-end justify-end h-full text-black p-4">
            <button className=" text-primary underline md:no-underline hover:md:underline  text-lg px-3 py-1.5 rounded-md font-semibold transition">
              Count me in!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComp;
