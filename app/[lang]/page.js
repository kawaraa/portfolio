import TypingAnimation from "../../components/typing-animation";
import { cardBgCls, h1Cls, linkCls } from "../../components/tailwindcss-class";
import ToastMessages from "../../components/toast-messages";
import "./page.css";
import Image from "next/image";

// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(() => import("../components/header"), { ssr: false });
// you can use the ssr option to disable server-rendering. This is useful if an external dependency or component relies on browser APIs like window.
// Or use React.lazy for only client side: https://react.dev/reference/react/lazy

export default function HomePageByLang({ params: { lang } }) {
  return (
    <div className="flex flex-col">
      <article className="flex-auto">
        <h1 id="intro-heading">
          <div className="flex justify-center items-end mt-[10vh]">
            <span id="hi" className="capitalize text-5xl">
              {content.hi[lang]}
            </span>
            <img src="hi-emoji.png" alt="Hi Emoji" name="BUTTON" id="hi-emoji" className="w-12 mx-3" />
          </div>

          <span className="sr-only">{content.hiddenP[lang][0]}</span>
        </h1>

        <p className="sr-only">{content.hiddenP[lang][1]}</p>

        <div id="introduction" className="text-lg text-center mt-10 min-h-[70vh]">
          <p className="opacity-0">{content.p[lang][0]}</p>
          <p className="opacity-0">{content.p[lang][1]}</p>
          <p className="opacity-0">{content.p[lang][2]}</p>
          <p className="opacity-0">{content.p[lang][3]}</p>
          <span className="opacity-0">{content.p[lang][4]}</span>
          <a className={`opacity-0 ${linkCls} hvr`} href="/work">
            {content.p[lang][5]}
          </a>
          <span className="opacity-0">{content.p[lang][6]}</span>
          <br />
          <span className="opacity-0">{content.p[lang][7]}</span>
        </div>
      </article>

      <article className="mb-20">
        <h2 className={h1Cls}>{content.features.title[lang]}</h2>

        <p className="opacity-90">
          {content.features.p[lang][0]}
          <br />
          {content.features.p[lang][1]}
        </p>

        <ul className="mt-12">
          {content.features.list.map((item, i) => (
            <li className="flex my-10 gap-10" key={i}>
              {i % 2 == 0 ? null : <ImageItem src={item.image} alt="" />}
              <div className="">
                <h4 className="text-2xl mb-5 mt-3 mx-3 md:t-0 md:mx-0">{item.t[lang]}</h4>
                <p className="flex-auto my-8 px-3 md:mt-0 md:px-0">{item.p[lang]}</p>
              </div>
              {i % 2 != 0 ? null : <ImageItem src={item.image} alt="" />}
            </li>
          ))}
        </ul>
      </article>

      <article className="mb-20">
        <h2 className={h1Cls}>{content.priorities.title[lang]}</h2>

        <ol className="mt-12 flex flex-wrap">
          {content.priorities.list.map((item, i) => (
            <li className="sm:w-1/2 lg:w-1/3 my-10 p-5 text-center" key={i}>
              <div className={`p-5 pt-8 h-full text-center ${cardBgCls} `}>
                <ImageItem src={item.image} cls="w-20 mx-auto" alt="" />
                <div className="">
                  <h4 className="text-2xl mb-5 mt-3 mx-3 md:t-0 md:mx-0">{item.t[lang]}</h4>
                  <p className="flex-auto text-sm my-8 px-3 md:mt-0 md:px-0">{item.p[lang]}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </article>

      <TypingAnimation containerId="introduction" startMillisecond={1000} />

      <ToastMessages messages={content.messages[lang]} start={30} />
    </div>
  );
}

function ImageItem({ src, cls = "", alt = "" }) {
  return (
    <div className={cls || "min-w-[300px] max-w-[400px]"}>
      <Image src={src} width="500" height="500" alt={alt} />
    </div>
  );
}

export function generateMetadata({ params: { lang } }) {
  return { alternates: { canonical: lang == "en" ? "/" : "/ar" } };
}

const content = {
  hi: { en: "hi!", ar: "مرحبا!" },
  p: {
    en: [
      "Welcome to Kawara, where innovation meets execution.",
      "We are a software consulting company dedicated to crafting digital solutions that drive success for businesses of all sizes. With a team of talented developers and designers specialize in creating cutting-edge software tailored to your unique needs.",
      "We offer a wide range of software development services to help you stay ahead in the digital age.",
      "We build bespoke software solutions that align perfectly with your business goals.",
      "Feel free to take a look at some of our work on ",
      "Work ",
      " page.",
      "Ready to transform your ideas into reality? then Contact us at ",
    ],
    ar: [
      "مرحبًا بكم في كوارا (Kawara)، حيث يلتقي الابتكار بالتنفيذ.",
      "نحن شركة رائدة أخصائية في تطوير البرمجيات الشاملة وصياغة الحلول الرقمية التي تدفع النجاح للشركات من جميع الأحجام. مع فريق من المطورين والمصممين الموهوبين متخصص في، نحن متخصصون في إنشاء برامج متطورة لتلبية احتياجاتك الفريدة.",
      "نحن نقدم مجموعة واسعة من خدمات تطوير البرمجيات لمساعدتك على البقاء في المقدمة في العصر الرقمي.",
      "نحن نبني حلولاً برمجية مخصصة تتوافق تمامًا مع أهداف عملك.",
      " لا تتردد في إلقاء نظرة على بعض من أعمالنا على صفحة ",
      "أعمال",
      "",
      "هل أنت مستعد لتحويل أفكارك إلى واقع؟ ثم اتصل بنا على ",
    ],
  },
  hiddenP: {
    en: [
      "Kawara Software Developers, full-stack developers, Website, Web Shop, Web Application Development, Frontend and Backend development",
      "All kind of software development services. we do Full Stack development, Frontend as well as Backend like building Systems, Website, Web apps, Android and IOS applications, Performance maintenance, Fixing Websites, Updating and Editing websites and a lot of other things.",
    ],
    ar: [
      "كوارا أخصائي برمجيات, كوارا لتطوير البرمجيات والمواقع الإلكترونية ومتاجر الويب وتطوير تطبيقات الويب وتطوير الواجهة الأمامية والخلفية",
      "جميع أنواع خدمات تطوير البرمجيات",
      "نحن نقوم بتطوير برمجي شامل متكامل والواجهة الأمامية وكذلك الخلفية مثل بناء الأنظمة، ومواقع الويب، وتطبيقات الويب، وتطبيقات أندرويد وايفون وصيانة الأداء، وإصلاح مواقع الويب، وتحديث مواقع الويب وتحريرها، والكثير من الأشياء الأخرى.",
    ],
  },
  features: {
    title: { en: "What sets us apart", ar: "ما يميزنا" },
    p: {
      en: [
        "Whether you're a startup with a vision or an established enterprise seeking digital transformation, we are here to turn your aspirations into reality.",
        "We believe in the power of innovation to drive growth, streamline processes, and enhance user experiences",
      ],
      ar: "",
    },
    list: [
      {
        image: "/expertise.png",
        t: { en: "Expertise", ar: "" },
        p: {
          en: "Backed by a team of highly skilled developers, architects, and consultants, we bring years of experience in crafting robust and scalable software solutions.",
          ar: "",
        },
      },
      {
        image: "/innovation.png",
        t: { en: "Innovation", ar: "" },
        p: {
          en: "We thrive on staying ahead of the curve. Our experts are not just problem solvers; they are innovators who embrace the latest technologies to keep your business at the forefront of the digital revolution.",
          ar: "",
        },
      },
      {
        image: "/client-centric-approach.png",
        t: { en: "Client-Centric Approach", ar: "" },
        p: {
          en: "Your success is our success. We take the time to understand your unique challenges, goals, and aspirations, tailoring our solutions to meet your specific needs.",
          ar: "",
        },
      },
      {
        image: "/solution.png",
        t: { en: "End-to-End Solutions", ar: "" },
        p: {
          en: "From ideation to implementation and ongoing support, we offer comprehensive services that cover the entire software development lifecycle. We are your one-stop destination for all things software.",
          ar: "",
        },
      },
      // { image: "", t: { en: "", ar: "" }, p: { en: "", ar: "" } },
    ],
  },
  priorities: {
    title: { en: "Work priorities", ar: "أولويات العمل" },
    list: [
      {
        image: "/security.png",
        t: { en: "Security", ar: "" },
        p: {
          en: "Security is the first highest priority. When talking about security means talking about business risk and growth, cost, data, customers and the list goes on",
          ar: "",
        },
      },
      {
        image: "/performance.png",
        t: { en: "Performance", ar: "" },
        p: {
          en: "Speed Performance includes Fast load times and lag free interaction is one of my highest priorities. We know that the application becomes slow as much as the it gets complex, here where speed performance comes to play.",
          ar: "",
        },
      },
      {
        image: "/responsive.png",
        t: { en: "Responsive", ar: "" },
        p: {
          en: "Layouts work on any device, big or small. Making your application working and looking good on all devices is something essential nowadays.",
          ar: "",
        },
      },
      {
        image: "/dynamic.png",
        t: { en: "Dynamic", ar: "" },
        p: {
          en: "Websites don't have to be static. We love making applications come to life and making them more dynamic, functional feature rich and always in sync",
          ar: "",
        },
      },
      {
        image: "/accessibility.png",
        t: {
          en: "Accessibility",
          ar: "",
        },
        p: {
          en: "Full advanced user interface control. Making website accessible for all people even for people with disabilities, is something that makes your application smart and easy to interact with through all devices like Keyboard, Mouse and more.",
          ar: "",
        },
      },
      // { image: "", t: { en: "", ar: "" }, p: { en: "", ar: "" } },
    ],
  },
  messages: {
    en: [
      "Hi there!",
      "Thanks for visiting!",
      "We will walk you through our site",
      "Let's start first with what we can do",
      "We are a Software Consultant",
      "We work externally for companies and helps them with software development processes",
      "This may include their software planning, design and construction stages",
      "Sometimes these consultants work alone on these projects, and sometimes they collaborate with internal software developers",
      "Want to know more about what we can do for you, please visit Services Page.",
    ],
    ar: ["أهلاً بك!", "شكرا لزيارتكم!"],
  },
};
