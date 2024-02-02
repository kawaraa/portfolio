"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Cookies } from "../services/utilities";

export default function CursorAndPageAnimation({ lang }) {
  // const router = useRouter();
  // router.push(e.target.href)
  const path = usePathname();
  const [{ x, y }, setCoordinates] = useState({ x: 300, y: -100 });
  const [cls, setCls] = useState("");
  const prevScrollRef = useRef(20);
  const loadFleshRef = useRef(0);
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

  const animateRoute = (e) => {
    if (e.target.tagName === "A" && e.target.target !== "_blank") {
      e.preventDefault();
      if (e.target.href == window.location.href) return;
      document.body.classList.add("page-shut");
      setTimeout(() => (window.location.href = e.target.href), 400);
    }
  };

  const viewportHandler = ({ target: { offsetHeight, scrollTop } }) => {
    if (prevScrollRef.current > scrollTop + 20) prevScrollRef.current = scrollTop + 20;
    if (prevScrollRef.current > scrollTop) return;
    prevScrollRef.current = scrollTop + 20;

    elementsRef.current = filterElements(elementsRef.current, offsetHeight + scrollTop);
  };

  const filterElements = (elements, scrolled) => {
    return elements.filter((el) => {
      if (el.offsetTop > scrolled) return true;
      el.classList.remove("off-view");
      return false;
    });
  };

  useEffect(() => {
    const root = document.getElementById("main-container") || document.body;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", animateRoute);
    root.addEventListener("scroll", viewportHandler);

    elementsRef.current = Array.from(document.querySelectorAll(".off-view"));

    const fun = () => {
      elementsRef.current = filterElements(elementsRef.current, root.offsetHeight + root.scrollTop);
    };

    if (loadFleshRef.current) loadFleshRef.current = clearTimeout(loadFleshRef.current);
    loadFleshRef.current = setTimeout(fun, 10);

    document.body.classList.remove("page-shut");

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", animateRoute);
      root.removeEventListener("scroll", viewportHandler);
    };
  }, [path]);

  useEffect(() => {
    Cookies.set("lang", lang);
  }, []);

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
