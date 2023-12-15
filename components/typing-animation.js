"use client";
import { useEffect, useRef } from "react";

export default function TypingAnimation({ containerId, text, startMillisecond = 100 }) {
  const contentRef = useRef("");
  const time = useRef(startMillisecond);

  useEffect(() => {
    function typeText(str, time, cb) {
      Array.from(str).forEach((char) => setTimeout(() => cb(char), (time += 50)));
      return time;
    }

    function typeIntroduction() {
      const container = document.getElementById(containerId).children;
      for (const el of container) {
        const text = el.innerHTML + "";
        el.innerHTML = "";
        el.classList.replace("opacity-0", "opacity-1");
        time.current = typeText(text, time.current, (char) => (el.innerHTML += char));
      }
    }

    if (containerId) typeIntroduction();
    else typeText(text, time.current, (char) => (contentRef.current += char));
  }, []);

  return contentRef.current;
}
