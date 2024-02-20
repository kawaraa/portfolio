import Image from "next/image";
import { Suspense } from "react";
import { lazyCls, skeletonCls } from "./tailwindcss-class";

export default function ImageWithSkeleton({ wrapper, ...p }) {
  if (!p.src) return null;
  if (wrapper) return <ImageWrapper {...p} />;
  return <ImageWithSuspense {...p} />;
}

export function ImageWrapper({ wrapperCls = "", ...p }) {
  return (
    <div className={wrapperCls || "min-w-[300px] max-w-[400px] mx-auto"}>
      <ImageWithSuspense className="w-full" {...p} />
    </div>
  );
}

export function ImageWithSuspense(props) {
  return (
    <Suspense fallback={<div className={`${lazyCls} w-full aspect-video ${skeletonCls}`}></div>}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} />
    </Suspense>
  );
}
