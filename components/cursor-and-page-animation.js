"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function CursorAndPageAnimation() {
  const router = useRouter();
  const path = usePathname();
  const [{ x, y }, setCoordinates] = useState({ x: 300, y: -100 });
  const [cls, setCls] = useState("");
  const prevScrollRef = useRef(20);
  const elementsRef = useRef([]);

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
      if (e.target.href == window.location.href) return;
      document.body.classList.add("page-shut");
      setTimeout(() => router.push(e.target.href), 400);
    }
  };

  const viewportHandler = ({ target: { offsetHeight, scrollTop } }) => {
    if (prevScrollRef.current > scrollTop + 20) prevScrollRef.current = scrollTop + 20;
    if (prevScrollRef.current > scrollTop) return;
    prevScrollRef.current = scrollTop + 20;

    elementsRef.current = elementsRef.current.filter((el) => {
      if (el.offsetTop < offsetHeight + scrollTop) {
        el.classList.remove("lazy", "off-view");
        return false;
      }
      return true;
    });
  };

  useEffect(() => {
    const root = document.getElementById("main-container") || document.body;
    elementsRef.current = Array.from(document.querySelectorAll(".lazy"));
    elementsRef.current.forEach((el) => el.classList.add("off-view"));

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", fetchContent);
    root.addEventListener("scroll", viewportHandler);

    document.body.classList.remove("page-shut");
    document.querySelectorAll("a").forEach((el) => {
      el.classList.remove("active");
      if (el.href == window.location.href) el.classList.add("active");
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", fetchContent);
      root.removeEventListener("scroll", viewportHandler);
    };
  }, [path]);

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
