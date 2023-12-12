import { notFound } from "next/navigation";
import localFont from "next/font/local";
import getMetadata from "../metadata";
import Navbar from "../../component/navbar";

const kufiFont = localFont({
  src: "../../public/font/NotoKufiArabic-VariableFont_wght.ttf",
  display: "swap",
});

export default function Layout({ children, params: { lang } }) {
  if (lang != "en" && lang != "ar") notFound();

  return (
    <html dir="auto" translate="no" lang={lang} className={lang == "ar" ? kufiFont.className : ""}>
      <body className="h-screen selection:bg-teal-300 dark:selection:bg-pink-500 dark:selection:text-white">
        {/* <header></header> */}
        <Navbar lang={lang} />
        {children}
      </body>
    </html>
  );
}

export function generateMetadata({ params: { lang } }) {
  return getMetadata({ lang });
}
