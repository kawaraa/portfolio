// import Image from "next/image";

export default function HomePageByLang({ params: { lang } }) {
  return (
    <main className="">
      <h1>Home page </h1>
    </main>
  );
}

export function generateMetadata({ params: { lang } }) {
  return { alternates: { canonical: lang == "en" ? "/" : "/ar" } };
}
