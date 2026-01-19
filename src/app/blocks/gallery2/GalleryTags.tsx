"use client";

import { Tag } from "lucide-react";
import type { FC } from "react";
import { cn } from "@/lib/utils";
import { IGalleryTag } from "./gallery2";

const GalleryTags: FC<{
  tag: IGalleryTag;
  onSelect: (tag: IGalleryTag) => void;
  selectedTag: IGalleryTag;
}> = ({ tag, onSelect, selectedTag }) => {
  return (
    <div
      className={cn(
        "  flex w-fit h-fit rounded-4xl hover:bg-white/25 cursor-pointer text-nowrap ",
        selectedTag == tag ? " bg-black/90" : " bg-gray-900/50"
      )}
      onClick={() => onSelect(tag)}
      // variant={tag === selectedTag ? "default" : "ghost"}
    >
      <span className="text-xs">{tag}</span>
      <Tag />
    </div>
  );
};

export default GalleryTags;
