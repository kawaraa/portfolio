import { notFound } from "next/navigation";
import localFont from "next/font/local";
import getMetadata from "../metadata";

const kufiFont = localFont({
  src: "../../public/font/NotoKufiArabic-VariableFont_wght.ttf",
  display: "swap",
});

export default function Layout({ children, params: { lang } }) {
  if (lang != "en" && lang != "ar") notFound();
  return <div className={lang == "ar" ? kufiFont.className : ""}>{children}</div>;
}

export function generateMetadata({ params }) {
  return getMetadata({ lang: params.lang });
}
