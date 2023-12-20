"use client";
import { Cookies } from "../services/utilities";

export default function Error({ reset, error }) {
  // console.log("Compiling and Server Error >>> ", error?.message);
  const lang = Cookies.get("lang") || "en";
  return (
    <div
      dir="auto"
      className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12"
    >
      {content.h2[lang]}
      <h2 className="text-xl font-bold"></h2>
      <p className="my-2">{content.p[lang]}</p>
      <button
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
        onClick={() => reset()}
      >
        {content.btn[lang]}
      </button>
    </div>
  );
}

const content = {
  h2: { en: "Oh sorry!", ar: "أه المعذرة!" },
  p: {
    en: "There was an issue with our storefront. This could be a temporary issue, please try your action again.",
    ar: "يبدو أن هناك مشكلة في واجهة متجرنا. قد تكون هذه مشكلة مؤقتة، يرجى محاولة الإجراء مرة أخرى.",
  },
  btn: { en: "Try Again", ar: "حاول ثانية" },
};
