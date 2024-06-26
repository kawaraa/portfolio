"use client";
import { useEffect, useRef, useState } from "react";
import Transition from "./transition";
import { cardBgCls } from "./tailwindcss-class";

export default function ToastMessages({ messages = [], start = 1 }) {
  const mountedRef = useRef(false);
  const startRef = useRef(start);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    const el = messages[index];
    if (!mountedRef.current) mountedRef.current = true;
    else {
      setShow(false);
      setTimeout(() => {
        if (!el) return setContent(null);
        setContent(el);
        setShow(true);
        setTimeout(() => setIndex(index + 1), (el.length / 6) * 1000);
      }, startRef.current * 1000 + 600);

      startRef.current = 0;
    }
  }, [index]);

  return (
    <Transition
      Tag="div"
      base={`z-10 fixed bottom-10 right-10 max-w-[80%] md:max-w-[50%] select-none mt-3 py-2 px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg duration-300 ${cardBgCls}`}
      enter="-translate-y-12 opacity-1"
      exit="translate-y-12 opacity-0"
      time="300"
      open={show}
    >
      {content}
    </Transition>
  );
}
