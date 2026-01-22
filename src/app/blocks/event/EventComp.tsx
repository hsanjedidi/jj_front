"use client";

import { useComponentMounted } from "@/app/hooks2/useComponentMounted";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

type BaseEvent = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    id: string;
    url: string;
  };
  media:
    | {
        id: string;
        url: string;
      }[]
    | null;
  video: {
    id: string;
    url: string;
  } | null;
};

type WeeklyEvent = {
  type: "WEEKLY";
  dayOfWeek: number;
  startTime: string;
  endTime: string | null;
};

type SpecialEvent = {
  type: "SPECIAL";
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string | null;
};

type DisplayedMedia = {
  id: string;
  url: string;
  type?: "video";
}[];

type EventResponse = BaseEvent & (WeeklyEvent | SpecialEvent);

const EventComp = () => {
  const mounted = useComponentMounted();
  const event: EventResponse = {
    id: "1",
    title: "Sample Event",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptatum, fuga tenetur fugiat commodi delectus mollitia et doloremque autem asperiores iure vero tempora atque laboriosam magnam deleniti recusandae voluptate illo..",
    thumbnail: {
      id: "thumb1",
      url: "/ourImages/events/one/event1_1.jpg",
    },
    video: null,
    media: [
      {
        id: "media1",
        url: "/ourImages/events/one/event1_2.jpg",
      },
    ],
    type: "SPECIAL",
    startDate: "2024-07-01",
    endDate: "2024-07-01",
    startTime: "18:00",
    endTime: "21:00",
  };

  const event2: EventResponse = {
    id: "2",
    title: "Sample Event 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, velit eius voluptate, accusamus vitae fuga laboriosam aut error dolorum nemo officia praesentium aspernatur itaque soluta natus nam. Inventore, debitis quos!.",
    thumbnail: {
      id: "thumb2",
      url: "/ourImages/events/one/event2_2.jpg",
    },
    video: {
      id: "video1",
      url: "/ourImages/events/one/event2_1.mp4",
    },
    media: [
      {
        id: "media2",
        url: "/ourImages/events/one/event2_3.jpg",
      },
      {
        id: "media3",
        url: "/ourImages/events/one/event2_4.jpg",
      },
      {
        id: "media4",
        url: "/ourImages/events/one/event2_5.jpg",
      },
    ],
    type: "WEEKLY",
    dayOfWeek: 5,
    startTime: "19:00",
    endTime: "22:00",
  };

  const displayedMedia: DisplayedMedia = [
    ...(event2.video ? [{ ...event2.video, type: "video" as const }] : []),
    event2.thumbnail,
    ...(event2.media ?? []),
  ];
  console.log("Displayed Media: ", displayedMedia);
  return (
    <div
      className={cn(
        "opacity-0 transition-opacity duration-500 ease-in-out forwards pt-44 pb-8 px-4 shadow-lg min-h-screen",
        mounted && "opacity-100",
      )}
    >
      {/* <Image
        src={event2.thumbnail.url}
        alt={event2.title}
        width={800}
        height={450}
        className="w-full h-auto rounded-lg"
      /> */}

      <div className="flex flex-col md:flex-row  w-fit max-w-7xl mx-auto items-start justify-center overflow-hidden bg-[#f5f4f3] rounded-md ">
        <div className="h-[40rem] w-fit ">
          <Carousel
            showThumbs={false}
            showStatus={false}
            swipeable
            emulateTouch
            infiniteLoop
            className=" h-96 md:h-full"
          >
            {displayedMedia.map((media) => (
              <div
                key={media.id}
                className="h-[40rem] flex items-center justify-center"
              >
                {media.type === "video" ? (
                  <video
                    src={media.url}
                    autoPlay
                    muted
                    loop
                    className="h-full w-auto object-contain"
                  />
                ) : (
                  <img
                    src={media.url}
                    alt={event2.title}
                    className="h-full w-auto object-contain select-none"
                  />
                )}
              </div>
            ))}
          </Carousel>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">{event2.title}</h2>
          <p className="text-gray-700 max-w-96">{event2.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventComp;
