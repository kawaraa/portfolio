import { cookies } from "next/headers";
import localFont from "next/font/local";
import getMetadata, { content } from "./metadata";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CursorAndPageAnimation from "../components/cursor-and-page-animation";
import "./globals.css";

const kufiFont = localFont({ src: "../public/font/NotoKufiArabic-VariableFont_wght.ttf", display: "swap" });

// revalidate all the underneath routes and layouts
// export const revalidate = 1800; // 30 mins in seconds
export default function RootLayout({ params, children }) {
  // Note: Using "cookies()" triggers the dynamic layout rendering, then access "childProp?.segment"
  const themeMode = cookies().get("themeMode")?.value || "auto";
  const lang = (children?.props?.childProp?.segment || []).includes("ar") ? "ar" : "en";

  return (
    <html
      dir="auto"
      translate="no"
      lang={lang}
      className={lang != "ar" ? themeMode : `${kufiFont.className} ${themeMode} leading-loose`}
      // className={lang != "ar" ? "" : `${kufiFont.className} leading-loose`}
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

export const metadata = getMetadata({ lang: "en" });

export const viewport = {
  themeColor: "#fafafa",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};
