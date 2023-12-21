import ImageWithSkeleton from "../../components/image-with-skeleton";
import TypingAnimation from "../../components/typing-animation";
import ToastMessages from "../../components/toast-messages";
import { cardBgCls, h1Cls, lazyCls, linkCls, pageCls } from "../../components/tailwindcss-class";
import "./page.css";

// Lazy Load
// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(() => import("../components/header"), { ssr: false });
// you can use the ssr option to disable server-rendering. This is useful if an external dependency or component relies on browser APIs like window.
// Or use React.lazy for only client side: https://react.dev/reference/react/lazy

export default function HomePageByLang({ params: { lang } }) {
  if (lang != "en" && lang != "ar") return null;

  return (
    <main className={`${pageCls} !pt-[5vh]`}>
      <article className="min-h-[90vh] pb-20">
        <h1 id="intro-heading" className="">
          <div className="flex justify-center items-end ">
            <span id="hi" className="capitalize text-5xl">
              {content.hi[lang]}
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="hi-emoji.png"
              alt={content.hi[lang] + ", " + content.hidden[lang][1]}
              name="BUTTON"
              id="hi-emoji"
              className="w-12 mx-3"
            />
          </div>

          <span className="sr-only">{content.hidden[lang][0]}</span>
        </h1>

        <p className="sr-only">{content.hidden[lang][0]}</p>
        <p className="sr-only">{content.hidden[lang][1]}</p>

        <div id="introduction" className="text-lg text-center mt-5 md:mt-10">
          <p className="opacity-0 sm:leading-10">{content.p[lang][0]}</p>
          <p className="opacity-0 sm:leading-10">{content.p[lang][1]}</p>
          <p className="opacity-0 sm:leading-10">{content.p[lang][2]}</p>
          <p className="opacity-0 sm:leading-10">{content.p[lang][3]}</p>
          {/* <span className="opacity-0">{content.p[lang][4]}</span>
          <a className={`opacity-0 ${linkCls} hvr`} href="/work">
            {content.p[lang][5]}
          </a> */}
          {/* <span className="opacity-0">{content.p[lang][6]}</span> */}
          {/* <br /> */}
          <span className="opacity-0 sm:leading-10">{content.p[lang][7]}</span>
          <a className={`opacity-0 sm:leading-10 ${linkCls} hvr`} href={`${lang}/contact`}>
            {content.p[lang][8]}
          </a>
        </div>
      </article>

      <article className="">
        <h2 className={h1Cls}>{content.features.title[lang]}</h2>

        <p className={`opacity-90 ${lazyCls}`}>
          {content.features.p[lang][0]}
          <br />
          {content.features.p[lang][1]}
        </p>

        <ul className="mt-20">
          {content.features.list.map((item, i) => (
            <li
              className={`flex mb-20 flex-col md:gap-10 ${
                i % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row "
              } ${lazyCls}`}
              key={i}
            >
              <h4 className="block md:hidden text-2xl mb-5 mt-3 mx-3 md:t-0 md:mx-0">{item.t[lang]}</h4>
              <ImageItem src={item.image} alt={item.t[lang]} />

              <div className="">
                <h4 className="hidden md:block text-2xl mb-5 mt-3 mx-3 md:t-0 md:mx-0">{item.t[lang]}</h4>
                <p className="flex-auto my-8 px-3 md:mt-0 md:px-0">{item.p[lang]}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>

      <article className="">
        <h2 className={h1Cls}>{content.priorities.title[lang]}</h2>
        <p className="">{content.priorities.p[lang]}</p>

        <ol className="mb-12 flex flex-wrap">
          {content.priorities.list.map((item, i) => (
            <li className={`w-full sm:w-1/2 lg:w-1/3 my-10 p-5 text-center ${lazyCls}`} key={i}>
              <div className={`p-5 pt-8 h-full text-center ${cardBgCls} `}>
                <ImageItem src={item.image} cls="w-20 mx-auto" alt={item.t[lang]} />
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
    </main>
  );
}

function ImageItem({ src, cls = "", alt = "" }) {
  return (
    <div className={cls || "min-w-[300px] max-w-[400px] mx-auto"}>
      <ImageWithSkeleton src={src} width="500" height="500" alt={alt} className="w-full" />
    </div>
  );
}

export function generateMetadata({ params: { lang } }) {
  return lang != "en" ? null : { alternates: { canonical: "/" } };
}

const content = {
  hi: { en: "hi!", ar: "مرحبا!" },
  p: {
    en: [
      "Welcome to Kawara, where innovation meets execution.",
      "We are a Software Consultant dedicated to crafting digital solutions that drive success for businesses of all sizes. With a team of talented developers and designers specialize in creating cutting-edge software tailored to your unique needs.",
      "We offer a wide range of software development services to help you stay ahead in the digital age.",
      "We build bespoke software solutions that align perfectly with your business goals.",
      "Feel free to take a look at some of our work on ",
      "Work ",
      " page.",
      "Ready to transform your ideas into reality? ",
      "Contact us",
    ],
    ar: [
      "مرحبًا بكم في كوارا (Kawara)، حيث يلتقي الابتكار بالتنفيذ.",
      "نحن شركة رائدة أخصائية في تطوير البرمجيات الشاملة وصياغة الحلول الرقمية التي تدفع النجاح للشركات من جميع الأحجام. مع فريق من المطورين والمصممين الموهوبين متخصص في، نحن متخصصون في إنشاء برامج متطورة لتلبية احتياجاتك الفريدة.",
      "نقدم مجموعة واسعة من خدمات تطوير البرمجيات لمساعدتك على البقاء في المقدمة في العصر الرقمي.",
      "نبني حلولاً برمجية مخصصة تتوافق تمامًا مع أهداف عملك.",
      " لا تتردد في إلقاء نظرة على بعض من أعمالنا على صفحة ",
      "أعمال",
      "",
      "هل أنت مستعد لتحويل أفكارك إلى واقع؟ ",
      "تواصل معنا",
    ],
  },
  hidden: {
    en: [
      "Software Development, Website, Online Store, Web Application Development",
      "We do All kind of software development services, Full-Stack development, Frontend as well as Backend like building Systems, Web Development Website, Web apps, Android and IOS applications, Performance maintenance, Fixing Websites, Updating and Editing websites and a lot of other things.",
    ],
    ar: [
      "كوارا أخصائي برمجيات ولتطوير البرمجيات والمواقع الإلكترونية ومتاجر الويب وتطوير تطبيقات الويب وتطوير الواجهة الأمامية والخلفية",
      "نحن نقوم بجميع أنواع خدمات تطوير البرمجيات ونقوم بتطوير برمجي شامل متكامل والواجهة الأمامية وكذلك الخلفية مثل بناء الأنظمة، ومواقع الويب، وتطبيقات الويب، وتطبيقات أندرويد وايفون وصيانة الأداء، وإصلاح مواقع الويب، وتحديث مواقع الويب وتحريرها، والكثير من الأشياء الأخرى.",
    ],
  },
  features: {
    title: { en: "What sets us apart", ar: "ما يميزنا" },
    p: {
      en: [
        "Whether you're a startup with a vision or an established enterprise seeking digital transformation, we are here to turn your aspirations into reality.",
        "We believe in the power of innovation to drive growth, streamline processes, and enhance user experiences",
      ],
      ar: [
        "سواء كنت شركة ناشئة ذات بصيرة أو مؤسسة راسخة تسعى للتحول الرقمي، نحن هنا لتحويل تطلعاتك إلى واقع ملموس.",
        "نحن نؤمن بقوة الابتكار لدفع النمو وتبسيط العمليات وتحسين تجارب المستخدم",
      ],
    },
    list: [
      {
        image: "/expertise.png",
        t: { en: "Expertise", ar: "الخبرة" },
        p: {
          en: "Backed by a team of highly skilled developers, architects, and consultants, we bring years of experience in crafting robust and scalable software solutions.",
          ar: "بدعم من فريق من المطورين والمهندسين والاستشاريين ذوي المهارات العالية، نتمتع بسنوات من الخبرة في صياغة حلول برمجية قوية وقابلة للتطوير.",
        },
      },
      {
        image: "/innovation.png",
        t: { en: "Innovation", ar: "الابتكار" },
        p: {
          en: "We enjoy being ahead of trends and changes. Our experts are not just problem solvers; they are innovators who embrace the latest technologies to keep your business at the forefront of the digital revolution.",
          ar: "نحن نستمتع بكوننا متقدمين على الاتجاهات والتغيرات. نحن لسنا مجرد حل للمشاكل؛ نحن مبتكرون نتبنى أحدث التقنيات لإبقاء عملك في طليعة الثورة الرقمية.",
        },
      },
      {
        image: "/client-centric-approach.png",
        t: { en: "Client-Centric Approach", ar: "حل يركز على العميل" },
        p: {
          en: "Your success is our success. We take the time to understand your unique challenges, goals, and aspirations, tailoring our solutions to meet your specific needs.",
          ar: "نجاحك هو نجاحنا. نحن نأخذ الوقت الكافي لفهم تحدياتك وأهدافك وتطلعاتك الفريدة، ونصمم حلولنا لتلبية احتياجاتك الخاصة.",
        },
      },
      {
        image: "/solution.png",
        t: { en: "End-to-End Solution", ar: "حل كامل وشامل" },
        p: {
          en: "From ideation to implementation and ongoing support, we offer comprehensive services that cover the entire software development lifecycle. We are your one-stop destination for all things software.",
          ar: "بدءًا من التفكير وحتى التنفيذ والدعم المستمر، نقدم خدمات شاملة تغطي خطوات التطوير البرمجيات بأكملها. نحن وجهتك الشاملة لكل ما يتعلق بالبرمجيات.",
        },
      },
      // { image: "", t: { en: "", ar: "" }, p: { en: "", ar: "" } },
    ],
  },
  priorities: {
    title: { en: "Work priorities", ar: "أولويات العمل" },
    p: {
      en: "Advantages of our product and What you get out of the box.",
      ar: "مزايا منتجنا وما الذي تحصل عليه تلقائيا.",
    },
    list: [
      {
        image: "/security.png",
        t: { en: "Security", ar: "الحماية" },
        p: {
          en: "Security is the first highest priority. When talking about security means talking about business risk and growth, cost, data, customers and the list goes on.",
          ar: "الأمن هو الأولوية القصوى الأولى. عندما نتحدث عن الأمن يعني الحديث عن مخاطر الأعمال والنمو والتكلفة والبيانات والعملاء والقائمة تطول",
        },
      },
      {
        image: "/performance.png",
        t: { en: "Performance", ar: "الاداء" },
        p: {
          en: "Speed Performance includes Fast load times and lag free interaction is one of my highest priorities. We know that the application becomes slow as much as the it gets complex, here where speed performance comes to play.",
          ar: "تتضمن سرعة الأداء أوقات تحميل سريعة، ويعد التفاعل الخالي من التأخير أحد أهم أولوياتي. نحن نعلم أن التطبيق يصبح بطيئًا بقدر ما يصبح معقدًا، وهنا يأتي دور سرعة الأداء.",
        },
      },
      {
        image: "/responsive.png",
        t: { en: "Responsive", ar: "متجاوب" },
        p: {
          en: "Layouts work on any device, big or small screen. Making your application working and looking good on all devices is something essential nowadays.",
          ar: "تعمل الهيكل العام للصفحات على أي جهاز، سواء كان شاشة كبيرًا أو صغيرًا. يعد جعل تطبيقك يعمل ويبدو جيدًا على جميع الأجهزة أمرًا ضروريًا في الوقت الحاضر.",
        },
      },
      {
        image: "/dynamic.png",
        t: { en: "Dynamic", ar: "ديناميكي" },
        p: {
          en: "Websites don't have to be static. We love making applications come to life and making them more dynamic, functional feature rich and always in sync",
          ar: "لا يجب أن تكون مواقع الويب ساكن. نحن نحب أن نجعل التطبيقات تنبض بالحياة ونجعلها أكثر ديناميكية وغنية بالميزات الوظيفية ومتزامنة دائمًا",
        },
      },
      {
        image: "/accessibility.png",
        t: {
          en: "Accessibility",
          ar: "إمكانية الوصول",
        },
        p: {
          en: "Full advanced user interface control. Making website accessible for all people even for people with disabilities, is something that makes your application smart and easy to interact with through all devices like Keyboard, Mouse and more.",
          ar: "التحكم الكامل في واجهة المستخدم المتقدمة. إن إتاحة الوصول إلى موقع الويب لجميع الأشخاص، حتى الأشخاص ذوي الإعاقة، هو أمر يجعل تطبيقك ذكيًا وسهل التفاعل معه من خلال جميع الأجهزة مثل لوحة المفاتيح والماوس والمزيد.",
        },
      },
      {
        image: "/seo.webp",
        t: {
          en: "SEO friendly",
          ar: "متوافق مع محركات البحث",
        },
        p: {
          en: "SEO friendly implementation and Easy for search engines to understand and find. SEO is crucial for online visibility and success. It enhances website ranking, drives traffic, and ensures businesses are easily found by their target audience.",
          ar: "أداة متوافق مع جميع محركات البحث ويسهل على محركات البحث فهم موقعك الإلكتروني والعثور عليه. يعد محركات البحث أمرًا بالغ الأهمية للظهور موقعك والنجاح عبر الإنترنت. إنه يعزز تصنيف موقع الويب، وكسب الزوار، ويضمن سهولة العثور على مشروعك التجاري من قبل الجمهور المستهدف.",
        },
      },
      {
        image: "/scalable.webp",
        t: {
          en: "Scalable",
          ar: "قابلية التوسع",
        },
        p: {
          en: "Ready to scale by natiure. Scalability ensures your business can grow smoothly. It adapts to increasing demands, making your operations efficient and future-proof.",
          ar: "جاهز لتوسع بطبيعته, يتضمن قابلية التوسع وأن ينمو عملك بسلاسة. فهو يتكيف مع المتطلبات المتزايدة، مما يجعل عملياتك فعالة وقابلة للمستقبل.",
        },
      },
      //
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

// Important:
// IT Consulting
// Web Development
// Mobile Application Development
// Custom Software Development
// Search Engine Optimization (SEO)
// Cybersecurity
// Information Security

// Application Development
// Android Development
// iOS Development

// We offer a wide range of software development services to help you stay ahead in the digital age.
// We build bespoke software solutions that align perfectly with your business goals and transform ideas into reality.
// We can lead the end-to-end development cycle of complex and scalable projects, from concept to
// deployment.
// We are specialized in both areas Backend and Frontend development.
// We also work with the latest technologies this has a lot of advantages like security, friendly UX and SEO
