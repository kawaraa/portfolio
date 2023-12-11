import getMetadata from "./metadata";
import Layout from "../app/[lang]/layout";
import "./globals.css";

export default function RootLayout({ children, params, ...p }) {
  return <Layout params={{ lang: "en" }} />;
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
