import Link from "next/link";
import localFont from "next/font/local";
import MobileMenu from "./mobile-menu";
import { btnCls } from "../tailwindcss-class";
import { navLinks } from "../shared-content";
const siteName = process.env.SITE_NAME;

const IconFont = localFont({ src: "../../public/font/Quicksand-Bold.ttf", display: "swap" });

export default async function Navbar({ lang }) {
  return (
    <nav
      dir="ltr"
      className="sticky top-0 left-0 right-0 z-1 p-3 bg-[inherit] flex items-center md:justify-between"
    >
      <Link href={`/${lang}`} className="flex items-start">
        <span id="site-logo" data-name="BUTTON" className="w-8 text-sc hover:scale-150 duration-300">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none">
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="-50%" x2="100%" y2="190%">
                <stop offset="0" stopColor="currentColor" />
                <stop offset="0.5" stopColor="#01FF89">
                  <animate attributeName="offset" values="0;1;0" dur="5s" repeatCount="indefinite" />
                </stop>
                <stop offset="1" stopColor="currentColor" />
              </linearGradient>
            </defs>
            <g className="layer" fill="none" stroke="url('#logo-gradient')" strokeWidth="30">
              <line x1="190" x2="190" y1="353.5" y2="460.5" stroke="currentColor" />
              <line x1="311" x2="311" y1="353" y2="465" stroke="currentColor" />
              <line strokeLinecap="round" x1="150" x2="351" y1="465.5" y2="465.5" stroke="currentColor" />
              <rect height="310" width="466" x="23" y="45.5" strokeLinejoin="round" />
              <path d="m182,249.5l-100,-48.5l101,-51" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m320,150.5l100,50.5l-100,50" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="280" x2="221" y1="120.5" y2="281.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </span>
        <span
          id="site-name"
          className={`mx-3 leading-[1] tracking-[2px] text-2xl capitalize ${IconFont.className}`}
        >
          {siteName}
        </span>
      </Link>

      <div className="flex-auto"></div>

      <div className="hidden md:flex gap-2">
        {navLinks.map((link, i) => (
          <a href={link.path.replace("lang", lang)} className="hvr px-2 py-1" key={i}>
            {link[lang]}
          </a>
        ))}
      </div>

      <a
        href={content.contact.path.replace("lang", lang)}
        name="BUTTON"
        className={`${btnCls} mx-3 py-2 px-4 rounded-full`}
      >
        {content.contact[lang]}
      </a>
      <MobileMenu lang={lang} />
    </nav>
  );
}

export const content = {
  contact: { en: "Contact Us", ar: "تواصل معنا", path: "/lang/contact" },
};
