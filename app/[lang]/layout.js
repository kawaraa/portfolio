// import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getSupportedLanguage } from "../layout";
import getMetadata from "../metadata";
import { content } from "../metadata";

export default function Layout({ children, params: { lang } }) {
  if (!getSupportedLanguage(lang)) return notFound();
  // const token = cookies().get("token")?.value; ; // This only to trigger dynamic layout rendering
  return children;
}

export function generateMetadata({ params: { lang } }) {
  return !getSupportedLanguage(lang) ? null : getMetadata({ lang, title: content.title[lang] });
}
