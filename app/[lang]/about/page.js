import { pageCls, cardBgCls, h1Cls, lazyCls } from "../../../components/tailwindcss-class";
import { getCssDelay } from "../../../components/tailwindcss-class";

export default function About({ params: { lang } }) {
  return (
    <main className={pageCls}>
      <h1 className={h1Cls + " mt-20 mb-5 lazy-b"} style={getCssDelay(0.5)}>
        {content.title[lang][0]} <br />
        <span className="opacity-75">{content.title[lang][1]}</span>
        <span className="sr-only">{content.h1[lang]}</span>
      </h1>

      <div className="lazy-b" style={getCssDelay(1)}>
        {content.p[lang].map((p, i) => (
          <p className="my-2" key={i}>
            {p}
          </p>
        ))}
      </div>

      <div className="my-32 flex flex-col sm:flex-row gap-10">
        {content.sections.map((section, i) => (
          <section className={`flex-1 p-5 ${cardBgCls} ${lazyCls}`} key={i}>
            <h2 className="text-center text-2xl mb-5 font-semibold">{section.t[lang]}</h2>
            <p className="">{section.p[lang]}</p>
          </section>
        ))}
      </div>

      <section className="mb-10">
        <h2 className={`text-center text-2xl mb-5 font-semibold ${lazyCls}`}>
          {content.whyUs.title[lang]} &#128170;
        </h2>

        <ol className="px-5  list-disc">
          {content.whyUs.list.map((item, i) => (
            <li className={`mt-10 ${lazyCls}`} key={i}>
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
      t: { en: "Our Mission", ar: "مهمتنا" },
      p: {
        en: "Empowering businesses through technology by providing strategic, scalable, and sustainable solutions that drive growth, enhance efficiency, and foster innovation.",
        ar: "تمكين الشركات من خلال التكنولوجيا من خلال توفير حلول استراتيجية وقابلة للتطوير ومستدامة تدفع النمو وتعزز الكفاءة وتشجع الابتكار.",
      },
    },
    {
      t: { en: "Our Vision", ar: "هدفنا" },
      p: {
        en: "To be the go-to partner for businesses seeking transformable software solutions, recognized for our commitment to excellence, innovation, and unwavering client satisfaction.",
        ar: "أن نكون الشريك المفضل للشركات التي تبحث عن حلول برمجية قابلة للتحويل، ومعترف بها لالتزامنا بالتميز والابتكار ورضا العملاء الذي لا يتزعزع.",
      },
    },
    // { t: { en: "", ar: "" }, p: { en: "", ar: "" } },
  ],
  whyUs: {
    title: { en: "Why Choose Kawara?", ar: "لماذا تختار كاوارا؟" },
    list: [
      {
        t: { en: "Expertise Across Industries", ar: "الخبرة في جميع المجالات" },
        p: {
          en: "With a diverse team of experts, we bring industry-specific knowledge to the table. From healthcare to finance, retail to manufacturing, we have a proven track record of delivering results across various sectors. A portfolio of successful projects across diverse industries.",
          ar: "مع فريق متنوع من الخبراء، نقدم معرفة متخصصة في المجال. من الرعاية الصحية إلى الخدمات المالية، ومن التجزئة إلى التصنيع، لدينا سجل حافل بتحقيق النتائج في مختلف القطاعات. محفظة من المشاريع الناجحة في صناعات متنوعة.",
        },
      },
      {
        t: { en: "Transparent Communication", ar: "شفافية بالتعامل" },
        p: {
          en: "We believe in open and honest communication at every stage of the engagement.",
          ar: "نحن نؤمن بالتواصل المفتوح والصادق في كل مرحلة من مراحل التعاون.",
        },
      },
      {
        t: { en: "Customized Solutions", ar: "حلول مخصصة" },
        p: {
          en: "Tailored software solutions to meet the unique needs of your business.",
          ar: "حلول برمجية مصممة لتلبية الاحتياجات الفريدة لعملك.",
        },
      },
      {
        t: { en: "Continuous Improvement", ar: "تحسن مستمر" },
        p: {
          en: "Embracing a culture of learning and adaptation to stay ahead in the ever-evolving tech landscape.",
          ar: "احتضان ثقافة التعلم والتكيف للبقاء في المقدمة في المشهد التكنولوجي المتطور باستمرار.",
        },
      },
      {
        t: { en: "Collaborative Approach", ar: "النهج التعاوني" },
        p: {
          en: "We view every project as a partnership. Our collaborative approach ensures that we understand your unique challenges and goals, working hand-in-hand to craft tailored solutions.",
          ar: "نحن ننظر إلى كل مشروع على أنه شراكة. ويضمن نهجنا التعاوني أننا نفهم تحدياتك وأهدافك الفريدة، ونعمل جنبًا إلى جنب لصياغة حلول مخصصة.",
        },
      },
      {
        t: { en: "Innovation at the Core", ar: "الابتكار في الصميم" },
        p: {
          en: "Innovation is our nature. We stay at the forefront of technological advancements to provide you with solutions that not only meet your current needs but also position you for future success.",
          ar: "الابتكار هو طبيعتنا. نحن نبقى في طليعة التطورات التكنولوجية لتزويدك بالحلول التي لا تلبي احتياجاتك الحالية فحسب، بل تضعك أيضًا في طريق النجاح في المستقبل.",
        },
      },
    ],
  },
};
