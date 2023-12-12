"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function CursorAndPageAnimation() {
  const router = useRouter();
  const params = useParams();
  const [{ x, y }, setCoordinates] = useState({ x: 300, y: -100 });

  const handleMouseMove = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
  };

  const fetchContent = (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      document.body.classList.add("fade-in");
      setTimeout(() => router.push(e.target.href), 300);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", fetchContent);
    document.body.classList.remove("fade-in");
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", fetchContent);
    };
  }, [params]);

  return (
    <div
      className="fixed z-[999999] w-[25px] h-[25px] top-0 left-0 rounded-full bg-white mix-blend-difference pointer-events-none will-change-transform"
      style={{
        transition: "0.4s ease-out",
        transform: `translate(${x - 10}px, ${y - 10}px)`,
      }}
    ></div>
  );
}
