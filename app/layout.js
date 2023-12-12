import getMetadata from "./metadata";
import "./globals.css";

// revalidate all the underneath routes and layouts
// export const revalidate = 1800; // 30 mins in seconds
export default function RootLayout({ children }) {
  return children;
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
  colorScheme: "#fafafa",
};
