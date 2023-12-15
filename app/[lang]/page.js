// import Image from "next/image";
import TypingAnimation from "../../components/typing-animation";
import { getCssDelay } from "../../services/utilities";
import { linkCls } from "../../components/tailwindcss-class";
import "./page.css";
import ToastMessages from "../../components/toast-messages";

// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(() => import("../components/header"), { ssr: false });
// you can use the ssr option to disable server-rendering. This is useful if an external dependency or component relies on browser APIs like window.
// Or use React.lazy for only client side: https://react.dev/reference/react/lazy

export default function HomePageByLang({ params: { lang } }) {
  return (
    <main className="flex flex-col h-full">
      <section className="flex-auto">
        <h1 id="intro-heading">
          <div className="flex justify-center items-end mt-[10vh]">
            <span id="hi" className="text-5xl">
              Hi
            </span>
            <img src="hi-emoji.png" alt="Hi Emoji" name="BUTTON" id="hi-emoji" className="w-12 mx-3" />
          </div>

          <span className="sr-only">
            Kawara Software Developers, full stack developers, Website, Web Shop, Web Application Development,
            Frontend and Backend development
          </span>
        </h1>

        <p className="sr-only">
          We are group of Software Developers who does all kind of software development. we do Full Stack
          development, Frontend as well as Backend like building Systems, Website, Web apps, Android and IOS
          applications, Performance maintenance, Fixing Websites, Updating and Editing websites and a lot of
          other things.
        </p>

        <div id="introduction" className="text-lg text-center mt-5">
          <p className="opacity-0">
            Welcome to Kawara, where innovation meets execution. We are a leading software development company
            dedicated to crafting digital solutions that drive success for businesses of all sizes. With a
            team of talented developers, designers, and strategists, we specialize in creating cutting-edge
            software tailored to your unique needs.
          </p>
          <p className="opacity-0">
            We offer a wide range of software development services to help you stay ahead in the digital age.
          </p>
          <p className="opacity-0">
            We build bespoke software solutions that align perfectly with your business goals.
          </p>
          <span className="opacity-0">Feel free to take a look at some of our work on </span>
          <a className={`opacity-0 ${linkCls} hvr`} href="/work">
            Projects
          </a>
          <span className="opacity-0"> page.</span>
          <br />
          <span className="opacity-0">Ready to transform your ideas into reality? then Contact us at </span>
          <a
            className={`opacity-0 ${linkCls} hvr`}
            target="_blank"
            href="mailto:info@kawaraa.com?Subject=Hello%20again"
          >
            info@kawaraa.com
          </a>
        </div>
      </section>

      <SocialMedia lang={lang} />

      <TypingAnimation containerId="introduction" startMillisecond={1000} />
      <ToastMessages messages={content.messages[lang]} />
    </main>
  );
}

export function SocialMedia({ lang }) {
  return (
    <div id="social-media-wrapper" className="p-6 flex gap-3">
      {content.socialMedia.map((item, i) => (
        <a
          href={item.link}
          target="_blank"
          title={item.title[lang]}
          className="overflow-hidden w-12 rounded-lg duration-300 lazy-b "
          style={getCssDelay(1)}
          key={i}
        >
          <img src={item.imageUrl} alt="social media profile logo" className="w-full" />
        </a>
      ))}
    </div>
  );
}

export function generateMetadata({ params: { lang } }) {
  return { alternates: { canonical: lang == "en" ? "/" : "/ar" } };
}

const content = {
  p: {
    en: [
      "Welcome to Kawara, where innovation meets execution. We are a leading software development company dedicated to crafting digital solutions that drive success for businesses of all sizes. With a team of talented developers, designers, and strategists, we specialize in creating cutting-edge software tailored to your unique needs.",
      "We offer a wide range of software development services to help you stay ahead in the digital age.",
      "We build bespoke software solutions that align perfectly with your business goals.",
      "Feel free to take a look at some of our work on",
      "Projects",
      "page",
      "Ready to transform your ideas into reality? then Contact us at",
      "info@kawaraa.com",
    ],
    ar: [],
  },
  socialMedia: [
    {
      title: { en: "Kawara LinkedIn profile", ar: "الملف الشخصي على لينكدإن" },
      link: "https://www.linkedin.com/in/kawaraa",
      imageUrl: "linkedin.png",
    },
    {
      title: { en: "Kawara Facebook page", ar: "صفحة كاوارا على الفيسبوك" },
      link: "https://www.facebook.com/kawaraa1",
      imageUrl: "facebook.png",
    },
    {
      title: { en: "Kawara GitHub profile", ar: "الملف الشخصي لكوارا على كيت هاب" },
      link: "https://github.com/kawaraa",
      imageUrl: "github.png",
    },
  ],
  messages: {
    en: [
      "Hi there!",
      "Thanks for visiting!",
      "We will walk you through hour site",
      "Let's start first with what we can do",
      "We are a Software Consultant",
      "Wee works externally for companies and helps them with software development processes",
      "This may include their software planning, design and construction stages",
      "Sometimes these consultants work alone on these projects, and sometimes they collaborate with internal software developers",
      "Want to know more about what we can do for you, please visit Services Page.",
    ],
    ar: [],
  },
};
