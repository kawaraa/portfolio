import { bCls, cardBgCls, h1Cls } from "../../../components/tailwindcss-class";

export default function About({ params: { lang } }) {
  return (
    <>
      <h1 className={h1Cls + " mt-20 mb-5"}>
        {content.title[lang][0]} <br />
        <span className="opacity-75">{content.title[lang][1]}</span>
        <span className="sr-only">{content.h1[lang]}</span>
      </h1>

      <div className={``}>
        {content.p[lang].map((p, i) => (
          <p className="my-2" key={i}>
            {p}
          </p>
        ))}
      </div>

      <div className="mt-32 flex gap-10">
        {content.sections.map((section, i) => (
          <section className={`flex-1 p-5 ${cardBgCls} `} key={i}>
            <h2 className="text-center text-2xl mb-5 font-semibold">{section.t[lang]}</h2>
            <p>{section.p[lang]}</p>
          </section>
        ))}
      </div>

      {/**/}
      <section className={`mt-20 mb-32 `}>
        <h2 className="text-center text-2xl mb-5 font-semibold">{content.whyUs.t[lang]} &#128170;</h2>

        <ol className="px-5 flex flex-wrap">
          {content.whyUs.list.map((item, i) => (
            <li className={`my-5 p-3 ${cardBgCls}  `} key={i}>
              {item[lang]}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export function generateMetadata({ params: { lang } }) {
  return { title: content.title[lang].join(" ") };
}

const content = {
  title: { en: ["About us", "Solutions Beyond Code"], ar: ["لمحة عنا", "حلول ما وراء البرمجية"] },
  h1: {
    en: "About Kawara? Who is Kawara? What is Kawara?",
    ar: "من يكون كاوارا؟ من هو كاوارا؟ ما هو كاوارا؟",
  },
  p: {
    en: [
      "Welcome to Kawara, where innovation meets expertise in the hear of software consulting.",
      "Established with a vision to transform businesses through cutting-edge technology.",
      "We take pride in being your strategic partner on the journey to digital success.",
      "We are a team of passionate and seasoned software professionals dedicated to delivering unparalleled solutions.",
      "Our foundation rests on a commitment to excellence, innovation, and client satisfaction.",
      "We understand that in today's dynamic business landscape, harnessing the power of technology is not just an option but a necessity.",
    ],
    ar: [""],
  },
  sections: [
    {
      t: { en: "Our Mission", ar: "" },
      p: {
        en: "Empowering businesses through technology by providing strategic, scalable, and sustainable solutions that drive growth, enhance efficiency, and foster innovation.",
        ar: "",
      },
    },
    {
      t: { en: "Our Vision", ar: "" },
      p: {
        en: "To be the go-to partner for businesses seeking transformative software solutions, recognized for our commitment to excellence, innovation, and unwavering client satisfaction.",
        ar: "",
      },
    },

    // { t: { en: "", ar: "" }, p: { en: "", ar: "" } },
  ],
  whyUs: {
    t: { en: "Why Choose Kawara", ar: "" },
    list: [
      { en: "a", ar: "" },
      { en: "a", ar: "" },
      { en: "a", ar: "" },
      { en: "a", ar: "" },
      { en: "a", ar: "" },
    ],
  },
};
