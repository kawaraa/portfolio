import { notFound } from "next/navigation";
import getMetadata from "../metadata";

export default function Layout({ children, params }) {
  if (params.lang != "en" && params.lang != "ar") notFound();
  return children;
}

export function generateMetadata({ params }) {
  return getMetadata({ lang: params.lang });
}
