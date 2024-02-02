"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Transition from "../transition";
import { contact, navLinks } from "../../data/shared-content";
import { bCls, btnCls, linkCls } from "../tailwindcss-class";

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
        base="md:hidden fixed z-[1] bottom-0 left-0 right-0 top-0 pt-20 flex h-full w-full flex-col bg-white pb-6 dark:bg-black p-4 transition-all ease-in-out duration-300"
        enter="translate-x-0"
        exit="translate-x-[100%]"
        time="200"
        dir="auto"
      >
        {navLinks.map((link, i) => (
          <li
            className={`my-1 border-b-[1xp] ${bCls} ${linkCls} border-t-0 border-l-0 border-r-0 !border-b-[1px]`}
            key={i}
          >
            <a href={link.path.replace("lang", lang)} className="block px-5 py-2 text-lg">
              {link[lang]}
            </a>
          </li>
        ))}

        <li className="mt-10 ">
          <a
            href={`/${lang}/contact`}
            name="BUTTON"
            className={`${btnCls} !flex mx-3 py-2 px-4 rounded-full`}
          >
            {contact[lang]}
          </a>
        </li>
      </Transition>

      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden relative z-2 ml-3">
        <div className={barCls + (isMenuOpen && " -rotate-45 translate-x-[0px] translate-y-[10px]")}></div>
        <div className={barCls + (isMenuOpen && " opacity-0")}></div>
        <div className={barCls + (isMenuOpen && " rotate-45 translate-x-0 translate-y-[-8px]")}></div>
      </div>
    </>
  );
}
