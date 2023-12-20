import Image from "next/image";
import { Suspense } from "react";
import { skeletonCls } from "./tailwindcss-class";

export default function ImageWithSkeleton(props) {
  return (
    <Suspense fallback={<div className={`w-full aspect-video ${skeletonCls}`}></div>}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} />
    </Suspense>
  );
}
