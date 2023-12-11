import { notFound } from "next/navigation";
import localFont from "next/font/local";
import getMetadata from "../metadata";
import HomePage from "./page";
import Navbar from "../../component/navbar";

const kufiFont = localFont({
  src: "../../public/font/NotoKufiArabic-VariableFont_wght.ttf",
  display: "swap",
});

export default function RootLayout({ children, params: { lang } }) {
  if (lang != "en" && lang != "ar") notFound();

  return (
    <html dir="auto" translate="no" lang={lang} className={lang == "ar" ? kufiFont.className : ""}>
      <body className="h-screen selection:bg-teal-300 dark:selection:bg-pink-500 dark:selection:text-white">
        <Navbar lang={lang} />
        {children || <HomePage params={{ lang: "ar" }} />}
      </body>
    </html>
  );
}

export function generateMetadata({ params }) {
  return getMetadata({ lang: params.lang });
}
