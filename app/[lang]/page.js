// import Image from "next/image";

// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(() => import("../components/header"), { ssr: false });
// you can use the ssr option to disable server-rendering. This is useful if an external dependency or component relies on browser APIs like window.
// Or use React.lazy for only client side: https://react.dev/reference/react/lazy

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
