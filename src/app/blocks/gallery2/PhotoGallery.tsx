"use client";

import { useState } from "react";
import DomeGallery from "./DomeGallery";
import { IGalleryTag } from "./gallery2";

const PhotoGallery = () => {
  const [selectedTag, setTag] = useState<IGalleryTag>("ALL");

  const galleryImages = [
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
  ];

  return (
    <main className="min-h-screen w-full bg-gray-950 flex items-center justify-center p-8">
      <div className="w-full  flex flex-col bg-black/85 ">
        {/* <GalleryHeroSection /> */}
        ezfxfds
        <div className="h-full w-full flex flex-col">
          <div className=" w-full  min-h-96 h-screen">
            <DomeGallery
              images={galleryImages}
              grayscale={false}
              fit={1}
              segments={20}
              minRadius={1000}
              GalleryChips={{ selectedTag, setTag }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PhotoGallery;
