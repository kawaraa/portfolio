import Link from "next/link";
import localFont from "next/font/local";
import MobileMenu from "./mobile-menu";
import { btnCls } from "../tailwindcss-class";

const IconFont = localFont({ src: "../../public/font/Quicksand-Bold.ttf", display: "swap" });

export default async function Navbar({ lang }) {
  return (
    <nav
      dir="ltr"
      className="sticky top-0 left-0 right-0 z-1 p-3 bg-[inherit] flex items-center md:justify-between"
    >
      <Link href={`/${lang}`} className="flex items-start ">
        <span className="w-7 text-sc">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g className="layer" fill="none" stroke="currentColor" strokeWidth="30">
              <rect height="310" width="466" x="23" y="45.5" strokeLinejoin="round" />
              <line x1="190" x2="190" y1="353.5" y2="460.5" />
              <line x1="311" x2="311" y1="353" y2="465" />
              <line strokeLinecap="round" x1="150" x2="351" y1="465.5" y2="465.5" />
              <path d="m182,249.5l-100,-48.5l101,-51" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m320,150.5l100,50.5l-100,50" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="280" x2="221" y1="120.5" y2="281.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </span>
        <span id="site-name" className={`mx-3 leading-[1] tracking-[2px] text-2xl ${IconFont.className}`}>
          Kawara
        </span>
      </Link>

      <div className="flex-auto"></div>

      <div className="hidden md:flex gap-2">
        {content.list.map((link, i) => (
          <a href={link.path.replace("lang", lang)} className="hvr px-2 py-1" key={i}>
            {link[lang]}
          </a>
        ))}
      </div>

      <a
        href={content.contact.path.replace("lang", lang)}
        name="BUTTON"
        className={btnCls + "  mx-3 py-2 px-4 rounded-full "}
      >
        {content.contact[lang]}
      </a>
      <MobileMenu lang={lang} />
    </nav>
  );
}

export const content = {
  contact: { en: "Contact Us", ar: "تواصل معنا", path: "/lang/contact" },
  list: [
    { en: "Home", ar: "الصفحة الرئيسية", path: "/lang" },
    { en: "Services", ar: "خدمات", path: "/lang/service" },
    { en: "Work", ar: "أعمالنا", path: "/lang/work" }, // Clients, Projects
    { en: "About", ar: "لمحة", path: "/lang/about" },
    { en: "Blog", ar: "المدونات", path: "/lang/blog" },
  ],
};
