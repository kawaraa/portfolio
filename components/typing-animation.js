"use client";
import { useEffect } from "react";

export default function TypingAnimation({ containerId }) {
  useEffect(() => {
    console.log(document.getElementById(containerId).children);

    function typeText(el, str, time) {
      Array.from(str).forEach((char) => setTimeout(() => (el.innerHTML += char), (time += 50)));
      return time;
    }
    function typeIntroduction() {
      const container = document.getElementById(containerId).children;
      let time = 1500;
      for (const el of container) {
        const text = el.innerHTML.trim();
        el.innerHTML = "";
        el.classList.replace("opacity-0", "opacity-1");
        time = typeText(el, text, time);
      }
    }
    typeIntroduction();
  }, []);

  return null;
}
