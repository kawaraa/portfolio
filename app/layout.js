import getMetadata from "./metadata";
import "./globals.css";

export default function RootLayout({ children }) {
  // Todo: find a way to get the "lang" params and add "lang={lang}" to html tag
  return (
    <html dir="auto" translate="no">
      <body className="h-screen selection:bg-teal-300 dark:selection:bg-pink-500 dark:selection:text-white">
        {children}
      </body>
    </html>
  );
}

export function generateMetadata() {
  return getMetadata({ lang: "en" });
}

export const viewport = {
  themeColor: "#fafafa",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "#000000",
};
