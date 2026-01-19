import dynamic from "next/dynamic";

const AnimatedCardStack2 = dynamic(() => import("./Swiper22"), { ssr: false });
export default AnimatedCardStack2;
