"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Transition from "../transition";
import { content } from "./index";

export default function MobileMenu({ lang }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const barCls = `relative bg-t w-[32px] h-[4px] my-[5px] rounded-full transition-all duration-300`;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <Transition
        Tag="ul"
        open={isMenuOpen}
        base="md:hidden fixed z-[1] bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black p-4 transition-all ease-in-out duration-300"
        enter="translate-x-0"
        exit="translate-x-[-100%]"
        time="200"
      >
        {content.list.map((link, i) => (
          <li key={i}>
            <a href={link.path.replace("lang", lang)} className="list-links px-2 py-1">
              {link[lang]}
            </a>
          </li>
        ))}
      </Transition>

      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden relative z-2 ml-3">
        <div className={barCls + (isMenuOpen && " -rotate-45 translate-x-[0px] translate-y-[10px]")}></div>
        <div className={barCls + (isMenuOpen && " opacity-0")}></div>
        <div className={barCls + (isMenuOpen && " rotate-45 translate-x-0 translate-y-[-8px]")}></div>
      </div>
    </>
  );
}
