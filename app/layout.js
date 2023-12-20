// import { cookies } from "next/headers";
import getMetadata from "./metadata";
import CursorAndPageAnimation from "../components/cursor-and-page-animation";
import "./globals.css";

// revalidate all the underneath routes and layouts
// export const revalidate = 1800; // 30 mins in seconds
export default function RootLayout({ children }) {
  // const themeMode = cookies().get("themeMode")?.value || "auto";

  return (
    <html dir="auto">
      <body className="overflow-hidden h-screen no-select h-screen w-screen flex flex-col selection:bg-teal-300 dark:selection:bg-pink-500 dark:selection:text-white cursor-[url(/cursor.svg),_auto] shadow-[0_0_50px_50px_rgba(0,0,0,0.7)] page-open">
        {children}

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
