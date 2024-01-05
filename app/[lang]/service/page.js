import { btnCls, cardBgCls, h1Cls, lazyCls, pageCls } from "../../../components/tailwindcss-class";
import { getCssDelay } from "../../../components/tailwindcss-class";
import { learn } from "../../../components/shared-content";
import ImageWithSkeleton from "../../../components/image-with-skeleton";
import { content as metaData } from "../../metadata";

export default function Services({ params: { lang } }) {
  return (
    <main className={pageCls}>
      <h1 className={h1Cls + " lazy-b"} style={getCssDelay()}>
        {content.title[lang]}
      </h1>

      <p className="lazy-b" style={getCssDelay()}>
        {content.p[lang]}
      </p>

      <p className="sr-only">{metaData[lang]}</p>

      <ol className="mt-28">
        {content.services.map((service, i) => (
          <li
            className={`${cardBgCls} ${i != 0 && lazyCls} ${
              i % 2 != 0 && "flex-row-reverse"
            } max-w-lg md:max-w-full mx-auto mb-16 md:p-5 flex md:gap-10 rounded-md lazy-b duration-200`}
            style={i != 0 ? null : getCssDelay()}
            key={i}
          >
            <div className="flex flex-col md:w-1/2">
              <h2 className="text-2xl mb-5 mt-3 mx-3 md:t-0 md:mx-0">{service.t[lang]}</h2>
              <div className="md:hidden flex-auto overflow-hidden">
                <ImageWithSkeleton
                  src={service.imageUrl}
                  width="500"
                  height="500"
                  alt={service.t[lang]}
                  className="w-full"
                />
              </div>

              <p className="flex-auto text-sm my-8 px-3 md:mt-0 md:px-0">{service.p[lang]}</p>

              <a
                href={service.link}
                className={`${btnCls} ${
                  i % 2 != 0 ? "md:place-self-end" : "md:place-self-start"
                } mx-3 mb-3 md:m-0`}
              >
                {learn[lang]}
              </a>
            </div>

            <div className="hidden overflow-hidden md:flex w-1/2 items-center rounded-md">
              <ImageWithSkeleton
                src={service.imageUrl}
                width="500"
                height="500"
                alt={service.t[lang]}
                className="h-full"
              />
            </div>
          </li>
        ))}
      </ol>
    </main>
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
      t: { en: "E-Commerce", ar: "التجارة الإلكترونية" },
      p: {
        en: [
          "We don't simply build your Web Shop, we set up your entire digital architecture.",
          "E-Commerce has become such a routine practice, it draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange, inventory management systems, and automated data collection systems",
        ],
        ar: [
          "نحن لا نبني فقط متجرك إلكتروني، بل نقوم بإعداد لك البنية الرقمية بالكامل.",
          "أصبحت التجارة الإلكترونية ممارسة روتينية، فهي تعتمد على تقنيات مثل التجارة المتنقلة، وتحويل الأموال الإلكتروني، وإدارة سلسلة التوريد، والتسويق عبر الإنترنت، ومعالجة المعاملات عبر الإنترنت، وتبادل البيانات الإلكترونية، وأنظمة إدارة المخزون، وأنظمة جمع البيانات الآلية.",
        ],
      },
      imageUrl: "/ecommerce.webp",
      link: "service/ecommerce",
    },
    {
      t: { en: "Custom Development", ar: "التطوير المخصص" },
      p: {
        en: [
          "Custom solutions designed to fit your unique requirements, from web and mobile applications to enterprise-level software",
        ],
        ar: [
          "حلول مخصصة مصممة لتناسب متطلباتك الفريدة، بدءًا من تطبيقات الويب والهاتف المحمول وحتى البرامج على مستوى المؤسسة",
        ],
      },
      imageUrl: "/custom-development.jpg",
      link: "service/custom-development",
    },
    {
      t: { en: "Consulting Services", ar: "خدمات استشارية" },
      p: {
        en: [
          "Strategic guidance to help you navigate the complexities of technology, making informed decisions for your business.",
        ],
        ar: ["التوجيه الاستراتيجي لمساعدتك على التنقل بين تعقيدات التكنولوجيا، واتخاذ قرارات مستنيرة لعملك."],
      },
      imageUrl: "/consulting-services.jpg",
      link: "service/custom-development",
    },
  ],
};
