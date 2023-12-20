import { notFound } from "next/navigation";
import localFont from "next/font/local";
import getMetadata, { content } from "../metadata";
import Navbar from "../../components/navbar";
import CursorAndPageAnimation from "../../components/cursor-and-page-animation";
import Footer from "../../components/footer";

const kufiFont = localFont({
  src: "../../public/font/NotoKufiArabic-VariableFont_wght.ttf",
  display: "swap",
});

export default function Layout({ children, params: { lang } }) {
  if (lang != "en" && lang != "ar") notFound();

  return (
    <html
      dir="auto"
      translate="no"
      lang={lang}
      className={lang == "ar" ? `${kufiFont.className} leading-loose` : ""}
    >
      <body className="overflow-hidden h-screen no-select h-screen w-screen flex flex-col selection:bg-teal-300 dark:selection:bg-pink-500 dark:selection:text-white cursor-[url(/cursor.svg),_auto] shadow-[0_0_50px_50px_rgba(0,0,0,0.7)] page-open">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              applicationCategory: content.keywords[lang],
              name: "Kawara",
              image: `${process.env.NEXT_PUBLIC_HOST}/android-chrome-512x512.png`,
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

        <Navbar lang={lang} />
        {/* <header></header> */}

        <div id="main-container" className="overflow-scroll">
          {children}

          <Footer lang={lang} />
        </div>

        <CursorAndPageAnimation />
      </body>
    </html>
  );
}

export function generateMetadata({ params: { lang } }) {
  return getMetadata({ lang });
}
