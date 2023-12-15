import TypingAnimation from "../../components/typing-animation";
import { linkCls } from "../../components/tailwindcss-class";
import ToastMessages from "../../components/toast-messages";
import "./page.css";

// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(() => import("../components/header"), { ssr: false });
// you can use the ssr option to disable server-rendering. This is useful if an external dependency or component relies on browser APIs like window.
// Or use React.lazy for only client side: https://react.dev/reference/react/lazy

export default function HomePageByLang({ params: { lang } }) {
  return (
    <div className="flex flex-col">
      <section className="flex-auto">
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

        <div id="introduction" className="text-lg text-center mt-5">
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
          <a
            className={`opacity-0 ${linkCls} hvr`}
            target="_blank"
            href="mailto:contact@kawaraa.com?Subject=Hello%20again"
          >
            contact@kawaraa.com
          </a>
        </div>
      </section>

      <TypingAnimation containerId="introduction" startMillisecond={1000} />

      <ToastMessages messages={content.messages[lang]} start={5} />
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
      "مرحبًا بكم في كاوارا (Kawara)، حيث يلتقي الابتكار بالتنفيذ.",
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
      "Kawara Software Developers, full stack developers, Website, Web Shop, Web Application Development, Frontend and Backend development",
      "We are group of Software Developers who does all kind of software development. we do Full Stack development, Frontend as well as Backend like building Systems, Website, Web apps, Android and IOS applications, Performance maintenance, Fixing Websites, Updating and Editing websites and a lot of other things.",
    ],
    ar: [],
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
