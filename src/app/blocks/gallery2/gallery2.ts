
const FOOD = "FOOD";
const ALL = "ALL";
const LADIES_NIGHT = "LADIES_NIGHT";
const SPECIAL_EVENTS = "SPECIAL_EVENTS";
const VIBES = "VIBES";

export const GALLERY_TAGS = {
  FOOD,
  ALL,
  LADIES_NIGHT,
  SPECIAL_EVENTS,
  VIBES,
} as const;

export type IGalleryTag = keyof typeof GALLERY_TAGS;

export const ordredTags: IGalleryTag[] = [ALL, SPECIAL_EVENTS, VIBES, FOOD, LADIES_NIGHT];


export type IGallery = {
  imageUrl: string;
  tags: IGalleryTag[];
};


const voltoImageGallery: IGallery[] = [
  {
    imageUrl: "/img/galleryImgsBanner/1.jpg",
    tags: ["ALL", "FOOD", "VIBES"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/2.jpg",
    tags: ["ALL", "LADIES_NIGHT", "SPECIAL_EVENTS"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/3.jpg",
    tags: ["ALL", "VIBES", "FOOD"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/4.jpg",
    tags: ["ALL", "SPECIAL_EVENTS", "LADIES_NIGHT"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/5.jpg",
    tags: ["ALL", "FOOD", "VIBES"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/6.jpg",
    tags: ["ALL", "LADIES_NIGHT", "SPECIAL_EVENTS"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/7.jpg",
    tags: ["ALL", "VIBES", "FOOD"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/8.jpg",
    tags: ["ALL", "SPECIAL_EVENTS", "LADIES_NIGHT"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/9.jpg",
    tags: ["ALL", "FOOD", "VIBES"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/10.jpg",
    tags: ["ALL", "LADIES_NIGHT", "SPECIAL_EVENTS"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/11.jpg",
    tags: ["ALL", "VIBES", "FOOD"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/12.jpg",
    tags: ["ALL", "SPECIAL_EVENTS", "LADIES_NIGHT"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/13.jpg",
    tags: ["ALL", "FOOD", "VIBES"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/14.jpg",
    tags: ["ALL", "LADIES_NIGHT", "SPECIAL_EVENTS"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/15.jpg",
    tags: ["ALL", "VIBES", "FOOD"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/16.jpg",
    tags: ["ALL", "SPECIAL_EVENTS", "LADIES_NIGHT"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/17.jpg",
    tags: ["ALL", "FOOD", "VIBES"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/18.jpg",
    tags: ["ALL", "LADIES_NIGHT", "SPECIAL_EVENTS"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/19.jpg",
    tags: ["ALL", "VIBES", "FOOD"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/20.jpg",
    tags: ["ALL", "SPECIAL_EVENTS", "LADIES_NIGHT"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/21.jpg",
    tags: ["ALL", "FOOD", "VIBES"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/22.jpg",
    tags: ["ALL", "LADIES_NIGHT", "SPECIAL_EVENTS"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/23.jpg",
    tags: ["ALL", "VIBES", "FOOD"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/24.jpg",
    tags: ["ALL", "SPECIAL_EVENTS", "LADIES_NIGHT"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/25.jpg",
    tags: ["ALL", "FOOD", "VIBES"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/26.jpg",
    tags: ["ALL", "LADIES_NIGHT", "SPECIAL_EVENTS"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/27.jpg",
    tags: ["ALL", "VIBES", "FOOD"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/28.jpg",
    tags: ["ALL", "SPECIAL_EVENTS", "LADIES_NIGHT"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/29.jpg",
    tags: ["ALL", "FOOD", "VIBES"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/30.jpg",
    tags: ["ALL", "LADIES_NIGHT", "SPECIAL_EVENTS"],
  },
  {
    imageUrl: "/img/galleryImgsBanner/31.jpg",
    tags: ["ALL", "VIBES", "FOOD"],
  },
];

export default voltoImageGallery;
