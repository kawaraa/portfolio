import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { btnCls } from "../tailwindcss-class";
import { contact, navLinks } from "../shared-content";
import { BrandLogo, BrandName } from "./brand";

export default async function Navbar({ lang }) {
  return (
    <nav
      dir="ltr"
      className="sticky top-0 left-0 right-0 z-1 p-3 bg-[inherit] flex items-center md:justify-between"
    >
      <Link href={`/${lang}`} className="flex items-start">
        <BrandLogo />
        <BrandName id="site-name" cls="mx-3" />
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
        href={`/${lang}/contact`}
        name="BUTTON"
        className={`${btnCls} hidden md:block mx-3 py-2 px-4 rounded-full`}
      >
        {contact[lang]}
      </a>
      <MobileMenu lang={lang} />
    </nav>
  );
}
