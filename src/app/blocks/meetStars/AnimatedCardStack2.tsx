import dynamic from "next/dynamic";

const AnimatedCardStack2 = dynamic(() => import("./Skipper44"), { ssr: false });
export default AnimatedCardStack2;
