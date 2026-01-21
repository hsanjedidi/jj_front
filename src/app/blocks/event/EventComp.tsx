"use client";

import { useComponentMounted } from "@/app/hooks2/useComponentMounted";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BaseEvent = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    id: string;
    url: string;
  };
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

type EventResponse = BaseEvent & (WeeklyEvent | SpecialEvent);

const EventComp = () => {
  const mounted = useComponentMounted();
  const event: EventResponse = {
    id: "1",
    title: "Sample Event",
    description: "This is a sample event description.",
    thumbnail: {
      id: "thumb1",
      url: "/path/to/thumbnail.jpg",
    },
    video: null,
    type: "SPECIAL",
    startDate: "2024-07-01",
    endDate: "2024-07-01",
    startTime: "18:00",
    endTime: "21:00",
  };
  return (
    <div
      className={cn(
        "opacity-0 transition-opacity duration-500 ease-in-out forwards",
        mounted && "opacity-100",
      )}
    >
      <Image
        src={event.thumbnail.url}
        alt={event.title}
        width={800}
        height={450}
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default EventComp;
