import Image from "next/image";
import { btnCls, cardBgCls, h1Cls } from "../../../components/tailwindcss-class";
import { getCssDelay } from "../../../services/utilities";
import { learn } from "../../../components/shared-content";

export default function Services({ params: { lang } }) {
  return (
    <>
      <h1 className={h1Cls}>{content.title[lang]}</h1>

      <p className="mb-14">{content.p[lang]}</p>

      <ol className="">
        {content.services.map((service, i) => (
          <li
            className={`${cardBgCls} rounded-md max-w-lg md:max-w-full mx-auto my-5 md:p-5 flex md:gap-10 `}
            key={i}
          >
            <div className="flex flex-col md:w-1/2 lazy-b duration-200" style={getCssDelay(0.5)}>
              <h2 className="text-2xl mb-5 mt-3 mx-3 md:t-0 md:mx-0">{service.t[lang]}</h2>
              <div className="md:hidden flex-auto overflow-hidden lazy-b duration-200">
                <Image
                  src={service.imageUrl}
                  width="500"
                  height="500"
                  atl={service.t[lang]}
                  className="w-full"
                />
              </div>
              <p className="flex-auto text-sm my-8 px-3 md:my-0 md:px-0">{service.p[lang]}</p>

              <a
                href={service.link.replace("lang", lang)}
                className={`${btnCls} md:place-self-start mx-3 mb-3 md:m-0`}
              >
                {learn[lang]}
              </a>
            </div>
            <div
              className="hidden md:block w-1/2 overflow-hidden rounded-md lazy-b duration-200"
              style={getCssDelay(0.5)}
            >
              <Image
                src={service.imageUrl}
                width="500"
                height="500"
                atl={service.t[lang]}
                className="w-full"
              />
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export function generateMetadata({ params: { lang } }) {
  return { title: content.title[lang] };
}

const content = {
  title: { en: "Our Services", ar: "خدماتنا" },
  p: {
    en: "We code and improve everything from E-commerce, Custom platforms, Progressive Web Apps, Mobile Applications, Websites, Information Security and SAAS to AI / Deep learning applications",
    ar: "نقوم ببرمجة وتحسين كل شيء بدءًا من التجارة الإلكترونية والمنصات المخصصة وتطبيقات الويب التقدمية وتطبيقات الهاتف المحمول ومواقع الويب وأمن المعلومات والبرمجيات كخدمة إلى تطبيقات الذكاء الاصطناعي / التعلم العميق",
  },
  services: [
    {
      t: { en: "eCommerce", ar: "التجارة الإلكترونية" },
      p: {
        en: "E-Commerce has become such a routine practice, it draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange, inventory management systems, and automated data collection systems",
        ar: "أصبحت التجارة الإلكترونية ممارسة روتينية، فهي تعتمد على تقنيات مثل التجارة المتنقلة، وتحويل الأموال الإلكتروني، وإدارة سلسلة التوريد، والتسويق عبر الإنترنت، ومعالجة المعاملات عبر الإنترنت، وتبادل البيانات الإلكترونية، وأنظمة إدارة المخزون، وأنظمة جمع البيانات الآلية.",
      },
      imageUrl: "/ecommerce.webp",
      link: "lang/services/ecommerce",
    },
  ],
};
// custom-development
