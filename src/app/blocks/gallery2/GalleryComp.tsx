"use client";

import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";

const DynamicGallery = dynamic(() => import("./PhotoGallery"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    </div>
  ),
});


const GalleryComp = () => {
  return (
    <div className="w-full   aspect-[3/4]">
      <Suspense fallback={<div className="bg-white">Loading...</div>}>
        dhgfhdhsdf
        <DynamicGallery />
      </Suspense>
    </div>
  );
};

export default GalleryComp;
