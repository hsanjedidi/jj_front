import dynamic from "next/dynamic";

const AnimatedCardStack = dynamic(
  () => import("@/app/components/ui/SwpierCards"),
  { ssr: false }
);

export default AnimatedCardStack;