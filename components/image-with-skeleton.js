import Image from "next/image";
import { Suspense } from "react";
import { skeleton } from "./tailwindcss-class";

export default function ImageWithSkeleton(props) {
  return (
    <Suspense fallback={<div className={`w-full h-[${props.height || 35}px] ${skeleton}`}></div>}>
      <Image {...props} />
    </Suspense>
  );
}
