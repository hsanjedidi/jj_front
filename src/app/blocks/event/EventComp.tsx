"use client";

import { event2 } from "@/app/hooks2/events";
import { useComponentMounted } from "@/app/hooks2/useComponentMounted";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const EventComp = () => {
  const mounted = useComponentMounted();

  const event2 = {
    title: "Sample Event 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, velit eius voluptate, accusamus vitae fuga laboriosam aut error dolorum nemo officia praesentium aspernatur itaque soluta natus nam.",
    thumbnail: { url: "/ourImages/events/one/event2_2.jpg" },
    video: { url: "/ourImages/events/one/event2_1.mp4" },
    media: [
      { id: "1", url: "/ourImages/events/one/event2_3.jpg" },
      { id: "2", url: "/ourImages/events/one/event2_4.jpg" },
      { id: "3", url: "/ourImages/events/one/event2_5.jpg" },
    ],
  };

  const displayedMedia = [
    { id: "video", url: event2.video.url, type: "video" as const },
    { id: "thumb", url: event2.thumbnail.url },
    ...event2.media,
  ];

  return (
    <section
      className={cn(
        "min-h-screen bg-neutral-950 pt-36 pb-16 px-4 transition-opacity duration-700",
        mounted ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
          {/* MEDIA */}
          <div className="relative h-[26rem] lg:h-[40rem] bg-black">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              swipeable
              emulateTouch
              className="h-full"
            >
              {displayedMedia.map((media) => (
                <div
                  key={media.id}
                  className="flex h-full items-center justify-center bg-black"
                >
                  {media.type === "video" ? (
                    <video
                      src={media.url}
                      autoPlay
                      muted
                      loop
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={media.url}
                      alt={event2.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              ))}
            </Carousel>

            {/* Overlay gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center p-8 lg:p-12 text-white">
            <span className="mb-3 w-fit rounded-full bg-amber-500/10 px-4 py-1 text-sm font-medium tracking-wide text-amber-400">
              ÉVÉNEMENT
            </span>

            <h2 className="mb-4 text-3xl lg:text-4xl font-semibold tracking-tight">
              {event2.title}
            </h2>

            <p className="text-neutral-300 leading-relaxed max-w-xl">
              {event2.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-400">
                Réserver
              </button>

              <button className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-200 transition hover:bg-neutral-800">
                Voir détails
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventComp;
