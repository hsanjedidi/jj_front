import { Timeline } from "@/app/components/ui/timeline";
import Image from "next/image";
import React from "react";

export function TimelineDemo() {
  const data = [
    {
      title: "Looking Back at Our Journey",
      content: (
        <div className=" space-y-4">
          <h2>A Timeline of JJ&apos;s Milestones</h2>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Recognizing key achievements, industry acknowledgments, and
            partnerships that define our professional journey.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/ourImages/awards/award.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className=" space-y-4">
          <h2>JJ&apos;s best pub in Bahrain</h2>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            🎉 Guess who’s Bahrain’s Favourite Pub? We are! 🏆🍻 Big love and a
            huge shoutout to everyone who voted for JJ’s at the Fact Dining
            Awards Bahrain 2024 – you made this win happen! ❤️💃
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/ourImages/awards/award2025.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className=" space-y-4">
          <h2>JJ&apos;s KARAOKE IS 20 YEARS STRONG</h2>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            🎉 Celebrating 20 incredible years of JJ’s! 🥳 From our humble
            beginnings in 2005 to becoming Bahrain’s favourite pub, it’s been an
            amazing journey filled with unforgettable moments. Here’s to many
            more years of great food, drinks, and memories! 🍻🎂 #JJs20Years
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/ourImages/awards/karaoke_20_annual.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/ourImages/awards/karaoke_winner.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className=" space-y-4">
          <h2>Supporting Tomorrow’s Athletes</h2>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Proud sponsor of 24N Sports Academy, contributing to the development
            of young athletes by supporting structured training, discipline, and
            community-driven sports initiatives.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <Image
              src="/ourImages/awards/amateur_football_league_0.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/ourImages/awards/amateur_football_league_1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/ourImages/awards/amateur_football_league_2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className=" space-y-4">
          <h2>Bahrain’s Favourite Pub</h2>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            🎉 Guess who’s Bahrain’s Favourite Pub? We are! 🏆🍻 Big love and a
            huge shoutout to everyone who voted for JJ’s at the Fact Dining
            Awards Bahrain 2024 – you made this win happen! ❤️💃{" "}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/ourImages/awards/award2024.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2022",
      content: (
        <div className=" space-y-4">
          <h2>Bahrain’s Favourite Pub</h2>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            🎉 Guess who’s Bahrain’s Favourite Pub? We are! 🏆🍻 Big love and a
            huge shoutout to everyone who voted for JJ’s at the Fact Dining
            Awards Bahrain 2024 – you made this win happen! ❤️💃{" "}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/ourImages/awards/awards2022_1.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/ourImages/awards/awards2022_2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/ourImages/awards/awards2022_3.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2018",
      content: (
        <div className=" space-y-4">
          <h2>Fact Magazine Award</h2>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            JJ’s Won Fact Magazine Awards 2018 - Favourite Pub in Bahrain !
            Congrats to All JJ’s Team! We Are Simply The Best! 👏👏 Often Copied
            Never Bettered!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/ourImages/awards/awards2018_1.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/ourImages/awards/awards2018_2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip pt-44">
      <Timeline data={data} />
    </div>
  );
}
