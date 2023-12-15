"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function CursorAndPageAnimation() {
  const router = useRouter();
  const params = useParams();
  const [{ x, y }, setCoordinates] = useState({ x: 300, y: -100 });
  const [cls, setCls] = useState("");

  const handleMouseMove = (e) => {
    const name = e.target.dataset.name || e.toElement.name || e.toElement.tagName;
    let x = 10;
    let y = 10;
    if (name != "BUTTON") setCls("");
    else {
      x = 40;
      y = 40;
      setCls("!bg-transparent !w-20 !h-20 border-2 border-pc");
    }
    setCoordinates({ x: e.clientX - x, y: e.clientY - y });
  };

  const fetchContent = (e) => {
    if (e.target.tagName === "A" && e.target.target !== "_blank") {
      e.preventDefault();
      document.body.classList.add("page-shut");
      setTimeout(() => router.push(e.target.href), 400);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", fetchContent);
    document.body.classList.remove("page-shut");
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", fetchContent);
    };
  }, [params]);

  return (
    <div
      className={`fixed z-[999999] w-[25px] h-[25px] top-0 left-0 rounded-full bg-white mix-blend-difference pointer-events-none will-change-transform ${cls}`}
      style={{
        transition: "0.4s ease-out",
        transform: `translate(${x}px, ${y}px)`,
      }}
    ></div>
  );
}
