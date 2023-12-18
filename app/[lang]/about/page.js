import { pageCls, cardBgCls, h1Cls } from "../../../components/tailwindcss-class";

export default function About({ params: { lang } }) {
  return (
    <main className={pageCls}>
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

      <div className="my-32 flex gap-10">
        {content.sections.map((section, i) => (
          <section className={`flex-1 p-5 ${cardBgCls} `} key={i}>
            <h2 className="text-center text-2xl mb-5 font-semibold">{section.t[lang]}</h2>
            <p>{section.p[lang]}</p>
          </section>
        ))}
      </div>

      <section className="mb-32">
        <h2 className="text-center text-2xl mb-5 font-semibold">{content.whyUs.title[lang]} &#128170;</h2>

        <ol className="px-5 flex flex-wrap list-disc">
          {content.whyUs.list.map((item, i) => (
            <li className="my-2 " key={i}>
              <h3 className="text-lg font-semibold">{item.t[lang]}</h3>
              {item.p[lang]}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export function generateMetadata({ params: { lang } }) {
  return { title: content.title[lang].join(" ") };
}

const content = {
  title: { en: ["About us", "Solutions Beyond Code"], ar: ["لمحة عنا", "حلول ما وراء البرمجية"] },
  h1: {
    en: "About Kawara? Who is Kawara? What is Kawara?",
    ar: "من يكون كوارا؟ من هو كوارا؟ ما هو كوارا؟",
  },
  p: {
    en: [
      "Welcome to Kawara, where innovation meets expertise in the heart of software consulting.",
      "We are a team of passionate and seasoned software professionals dedicated to delivering unparalleled solutions.",
      "Established with a vision to transform businesses through cutting-edge technology and strategic consulting.",
      "We understand that in today's dynamic business landscape, harnessing the power of technology is not just an option but a necessity.",
      "Our foundation rests on a commitment to excellence, innovation, and client satisfaction.",
      "We take pride in being your strategic partner on the journey to digital success.",
    ],
    ar: [
      "مرحبًا بكم في كوارا أخصائي البرمجيات، حيث يلتقي الابتكار بالخبرة في قلب أخصائية البرمجية.",
      "نحن فريق من محترفي البرمجيات المتحمسين والمتمرسين المخصصين لتقديم حلول لا مثيل لها.",
      "تأسست برؤية لتحويل الأعمال من خلال التكنولوجيا المتطورة والاستشارات الاستراتيجية.",
      "نحن ندرك أنه في مشهد الأعمال الديناميكي اليوم، فإن تسخير قوة التكنولوجيا ليس مجرد خيار بل ضرورة.",
      "تعتمد مؤسستنا على الالتزام بالتميز والابتكار ورضا العملاء.",
      "نحن نفخر بكوننا شريكك الاستراتيجي في رحلتك نحو النجاح الرقمي.",
    ],
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
        en: "To be the go-to partner for businesses seeking transformable software solutions, recognized for our commitment to excellence, innovation, and unwavering client satisfaction.",
        ar: "",
      },
    },
    // { t: { en: "", ar: "" }, p: { en: "", ar: "" } },
  ],
  whyUs: {
    title: { en: "Why Choose Kawara", ar: "" },
    list: [
      {
        t: { en: "Expertise Across Industries", ar: "" },
        p: {
          en: "With a diverse team of experts, we bring industry-specific knowledge to the table. From healthcare to finance, retail to manufacturing, we have a proven track record of delivering results across various sectors. A portfolio of successful projects across diverse industries.",
          ar: "",
        },
      },
      {
        t: { en: "Transparent Communication", ar: "" },
        p: { en: "We believe in open and honest communication at every stage of the engagement.", ar: "" },
      },
      {
        t: { en: "Customized Solutions", ar: "" },
        p: { en: "Tailored software solutions to meet the unique needs of your business.", ar: "" },
      },
      {
        t: { en: "Continuous Improvement", ar: "" },
        p: {
          en: "Embracing a culture of learning and adaptation to stay ahead in the ever-evolving tech landscape.",
          ar: "",
        },
      },
      {
        t: { en: "Collaborative Approach", ar: "" },
        p: {
          en: "We view every project as a partnership. Our collaborative approach ensures that we understand your unique challenges and goals, working hand-in-hand to craft tailored solutions.",
          ar: "",
        },
      },
      {
        t: { en: "Innovation at the Core", ar: "" },
        p: {
          en: "Innovation is in our DNA. We stay at the forefront of technological advancements to provide you with solutions that not only meet your current needs but also position you for future success.",
          ar: "",
        },
      },
    ],
  },
};
