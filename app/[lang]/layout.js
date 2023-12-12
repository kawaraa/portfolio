import { notFound } from "next/navigation";
import localFont from "next/font/local";
import getMetadata, { content } from "../metadata";
import Navbar from "../../components/navbar";
import CursorAndPageAnimation from "../../components/cursor-and-page-animation";

const kufiFont = localFont({
  src: "../../public/font/NotoKufiArabic-VariableFont_wght.ttf",
  display: "swap",
});

export default function Layout({ children, params: { lang } }) {
  if (lang != "en" && lang != "ar") notFound();

  return (
    <html dir="auto" translate="no" lang={lang} className={lang == "ar" ? kufiFont.className : ""}>
      <body className="h-screen no-select h-screen selection:bg-teal-300 dark:selection:bg-pink-500 dark:selection:text-white cursor-[url(/cursor.svg),_auto] shadow-[0_0_50px_50px_rgba(0,0,0,0.7)] fade-out">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              applicationCategory: content.keywords[lang],
              name: "Kawara",
              image: "http://localhost:3000//android-chrome-512x512.png",
              description: content.description[lang],
              genre: "Software Development",
              author: "Kawara",
              brand: "Kawara",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: 4,
                reviewCount: 143,
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        {/* <header></header> */}
        {/* <div className="min-h-screen flex flex-col bg-bg text-t selection:bg-teal-300 shadow-[0_0_50px_50px_rgba(0,0,0,0.7)]">
        </div> */}
        <Navbar lang={lang} />
        {children}
        <CursorAndPageAnimation />
      </body>
    </html>
  );
}

export function generateMetadata({ params: { lang } }) {
  return getMetadata({ lang });
}