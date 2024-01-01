import { visit } from "../../../components/shared-content";
import { btnCls, cardBgCls, h1Cls, lazyCls, pageCls } from "../../../components/tailwindcss-class";
import { getCssDelay } from "../../../components/tailwindcss-class";
import ImageWithSkeleton from "../../../components/image-with-skeleton";

export default function Work({ params: { lang } }) {
  return (
    <main className={pageCls}>
      <h1 className={h1Cls + " lazy-b"} style={getCssDelay()}>
        {content.title[lang]}
      </h1>

      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="lg:w-1/2 p-0 lg:pr-8">
          <p className="lg:mb-14 opacity-90 lazy-b" style={getCssDelay()}>
            {content.p[lang]}
          </p>

          <ol className=" mx-auto">
            <li className="h-32"></li>

            {content.projects
              .filter((_, i) => i % 2 == 0)
              .map((project, i) => (
                <ListItem
                  lang={lang}
                  imageUrl={project.imageUrl}
                  name={project.name}
                  description={project.description[lang]}
                  link={project.link}
                  cls={i == 0 ? "lazy-b" : lazyCls}
                  style={getCssDelay()}
                  key={i}
                />
              ))}
          </ol>
        </div>

        <ol className="lg:w-1/2 p-0 lg:pl-8">
          <li className="h-0 lg:h-28"></li>
          {content.projects
            .filter((_, i) => i % 2 == 1)
            .map((project, i) => (
              <ListItem
                lang={lang}
                imageUrl={project.imageUrl}
                name={project.name}
                description={project.description[lang]}
                link={project.link}
                cls={lazyCls}
                key={i}
              />
            ))}
        </ol>
      </div>
    </main>
  );
}

function ListItem({ lang, imageUrl, name, description, link, cls = "", ...p }) {
  const btn = (
    <a href={link} className={`${btnCls} `} name="BUTTON" target="_blank">
      {visit[lang]}
    </a>
  );

  return (
    <li className={`${cardBgCls} mb-20 p-5 p-3 ${cls}`} {...p}>
      <div className="overflow-hidden relative w-full rounded-md">
        <ImageWithSkeleton src={imageUrl} width="500" height="500" alt={name} className="w-full" />
        <div className="bg-black/10 absolute inset-0 w-ful h-full flex items-center justify-center">
          {btn}
        </div>
      </div>

      <h2 className="text-left text-2xl mb-5 mt-3 mx-3 md:t-0 md:mx-0">{name}</h2>

      <p className="flex-auto text-sm my-8 px-3 md:mt-0 md:px-0">{description}</p>
    </li>
  );
}

export function generateMetadata({ params: { lang } }) {
  return { title: content.title[lang] };
}

const content = {
  title: { en: "Our Work", ar: "أعمالنا" },
  p: {
    en: "We code and improve everything from E-commerce, Custom platforms, Progressive Web Apps, Mobile Applications, Websites, Information Security and SAAS to AI / Deep learning applications",
    ar: "نقوم ببرمجة وتحسين كل شيء بدءًا من التجارة الإلكترونية والمنصات المخصصة وتطبيقات الويب التقدمية وتطبيقات الهاتف المحمول ومواقع الويب وأمن المعلومات والبرمجيات كخدمة إلى تطبيقات الذكاء الاصطناعي / التعلم العميق",
  },
  projects: [
    {
      imageUrl: "/arablocalmarket.png",
      link: "https://arablocalmarket.com",
      name: "Arab Local Market",
      description: {
        en: "A complete Online Marketplace that helps break-and-mortar local physical stores improve their sales.",
        ar: "سوق متكامل عبر الإنترنت يساعد المتاجر المحلية على تحسين مبيعاتها.",
      },
    },
    {
      imageUrl: "/kawara-shop.png",
      link: "https://shop.kawaraa.com",
      name: "Kawara shop",
      description: {
        en: "Kawara Shop is the online store where we practice E-commerce.",
        ar: "متجر كاوارة هو المتجر الإلكتروني حيث نمارس فيه التجارة الإلكترونية.",
      },
    },
    {
      imageUrl: "/kawara-software-consultant.png",
      link: "https://kawaraa.com",
      name: "Kawara Software Consultant",
      description: {
        en: "The latest version of our Website, after we became Software Consultant.",
        ar: "أحدث إصدار من موقعنا الإلكتروني, بعد أن أصبحنا أخصائين ومستشارين للبرمجيات.",
      },
    },
    {
      imageUrl: "/kawara-portfolio.png",
      link: "https://portfolio.kawaraa.com",
      name: "Kawara Portfolio",
      description: {
        en: "The first version of our CTO Portfolio",
        ar: "النسخة الأولى من موقع مدير التكنولوجيا للشركة",
      },
    },
  ],
  clients: {
    t: { en: "Our clients", ar: "عملائنا" },
    p: {
      en: "We are proud to have collaborated with some awesome companies",
      ar: "نحن فخورون بالتعاون مع بعض الشركات الرائعة",
    },
  },
};
