import Image from "next/image";
import { visit } from "../../../components/shared-content";
import { btnCls, cardBgCls, h1Cls, pageCls } from "../../../components/tailwindcss-class";
import { getCssDelay } from "../../../services/utilities";

export default function Work({ params: { lang } }) {
  return (
    <main className={pageCls}>
      <h1 className={h1Cls}>{content.title[lang]}</h1>

      {/* <p className="mb-14 opacity-90">{content.p[lang]}</p> */}

      <div className="flex flex-col lg:flex-row mt-">
        <div className="lg:w-1/2 pr-8">
          <p className="mb-14 opacity-90">{content.p[lang]}</p>

          <ol className="">
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
                  key={i}
                />
              ))}
          </ol>
        </div>

        <ol className="lg:w-1/2 pl-8">
          <li className="h-28"></li>
          {content.projects
            .filter((_, i) => i % 2 == 1)
            .map((project, i) => (
              <ListItem
                lang={lang}
                imageUrl={project.imageUrl}
                name={project.name}
                description={project.description[lang]}
                link={project.link}
                key={i}
              />
            ))}
        </ol>
      </div>
    </main>
  );
}

function ListItem({ imageUrl, name, description, link, lang }) {
  return (
    <>
      <li className={`${cardBgCls} mb-20 p-5 p-3 lazy-b duration-200`} style={getCssDelay(0.5)}>
        <div className="overflow-hidden w-full rounded-md">
          <Image src={imageUrl} width="500" height="500" atl={name} className="w-full" />
        </div>

        <h2 className="text-2xl mb-5 mt-3 mx-3 md:t-0 md:mx-0">{name}</h2>

        <p className="flex-auto text-sm my-8 px-3 md:mt-0 md:px-0">{description}</p>

        <div className="text-center">
          <a href={link} className={`${btnCls} md:place-self-start mx-3 mb-3 md:m-0`}>
            {visit[lang]}
          </a>
        </div>
      </li>
    </>
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
        en: "eCommerce, eCommerce, eCommerce",
        ar: "التجارة الإلكترونية, التجارة الإلكترونية, التجارة الإلكترونية",
      },
    },
    {
      imageUrl: "/kawara-shop.png",
      link: "https://shop.kawaraa.com",
      name: "Kawara shop",
      description: {
        en: "eCommerce, eCommerce, eCommerce",
        ar: "التجارة الإلكترونية, التجارة الإلكترونية, التجارة الإلكترونية",
      },
    },
    {
      imageUrl: "/kawara-software-consultant.png",
      link: "https://kawaraa.com",
      name: "Kawara Software Consultant",
      description: {
        en: "eCommerce, eCommerce, eCommerce",
        ar: "التجارة الإلكترونية, التجارة الإلكترونية, التجارة الإلكترونية",
      },
    },
    {
      imageUrl: "/kawara-portfolio.png",
      link: "https://portfolio.kawaraa.com",
      name: "Kawara Portfolio",
      description: {
        en: "eCommerce, eCommerce, eCommerce",
        ar: "التجارة الإلكترونية, التجارة الإلكترونية, التجارة الإلكترونية",
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
