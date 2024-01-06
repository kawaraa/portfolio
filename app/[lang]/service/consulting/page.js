import Blog, { ContactBtn } from "../../../../components/blog";
import { contactUsParagraph } from "../../../../components/data/shared-content";
import { pageCls } from "../../../../components/tailwindcss-class";
import { content as metadata } from "../../../metadata";

export default function Page({ params: { lang } }) {
  return (
    <main className={pageCls}>
      <Blog lang={lang} content={content} hiddenText={metadata.keywords[lang]}>
        <ContactBtn lang={lang} />
      </Blog>
      <div className="h-20"></div>
    </main>
  );
}

const content = {
  h1: { en: "Software Consulting Services", ar: "خدمات استشارات البرمجيات" },
  p: {
    en: [
      "",
      "We offer tailored solutions that align precisely with the goals and requirements of your business.",
    ],
    ar: ["", "نحن نقدم حلولاً مخصصة تتوافق بدقة مع أهداف ومتطلبات عملك."],
  },
  imageUrl: "/software-consulting.png",
  sections: [
    {
      t: { en: "", ar: "" },
      p: {
        en: "",
        ar: "",
      },
    },
    {
      t: { en: "", ar: "" },
      p: {
        en: "",
        ar: "",
      },
    },
    {
      t: { en: "", ar: "" },
      p: {
        en: "",
        ar: "",
      },
    },
    {
      t: { en: "", ar: "" },
      p: {
        en: "",
        ar: "",
      },
    },
    {
      t: { en: "", ar: "" },
      p: {
        en: "",
        ar: "",
      },
    },
    {
      t: { en: "", ar: "" },
      p: {
        en: "",
        ar: "",
      },
    },
  ],
  endP: contactUsParagraph,
};
