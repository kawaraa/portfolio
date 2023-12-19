import { h1Cls, pageCls } from "../../../components/tailwindcss-class";
import ContactForm from "./contact-form";
const apiUrl = process.env.GOOGLE_APP_SCRIPT_URL;

export default function Contact({ params: { lang } }) {
  return (
    <main
      className={
        pageCls +
        " !mx-0 bg-[url('/map-image-background-l.png')] dark:bg-[url('/map-image-dark-background.png')]"
      }
    >
      <h1 className={h1Cls}>
        {content.title[lang][0]}
        <span className="sr-only">
          {content.title[lang][1]}
          {content.title[lang][2]}
        </span>
      </h1>

      <p>{content.p[lang][0]}</p>
      <p>{content.p[lang][1]}</p>
      <ContactForm lang={lang} apiUrl={apiUrl} />
    </main>
  );
}

const content = {
  title: {
    en: [
      "Join us on your digital journey",
      " Contact us, Contact Kawara",
      " Let's build something together!",
      " Are you ready to take your business to the next level?",
    ],
    ar: [
      "انضم إلينا في رحلتك الرقمية",
      "تواصل معنا، اتصل بنا، اتصل بكوارا ",
      "لنبني شيئا معا! ",
      "هل أنت مستعد للارتقاء بعملك إلى المرحلة التالية؟",
    ],
  },
  p: {
    en: [
      "Whether you're looking for innovative software solutions, strategic consulting or a reliable partner to guide your digital transformation, we are here to exceed your expectations",
      "At Kawara, we don't just build software, we build success stories. Let's create yours together.",
      "Ready to build something real together with your favorite creatives and tech leads? Get into contact or fill out an inquiry form",
      "Contact us today, and let's embark on a journey of innovation and success.",
      "Whether you're a startup looking to disrupt the market or an established business seeking digital transformation, we have the expertise to make it happen.",
      "Don't miss out on the opportunity to stay ahead in the digital landscape.",
      "Join our growing list of satisfied clients and experience the difference with Kawara.",
      "Your success is our priority.",
    ],
    ar: [
      "سواء كنت تبحث عن حلول برمجية مبتكرة أو استشارات استراتيجية أو شريك موثوق لتوجيه تحولك الرقمي، فنحن هنا لتجاوز توقعاتك",
      "في كاوارا، نحن لا نبني البرمجيات فحسب، بل نبني قصص النجاح. دعونا ننشئ لك معا.",
      "هل أنت على استعداد لبناء شيء حقيقي مع المبدعين المفضلين لديك وقادة التكنولوجيا؟ تواصل معنا أو املأ نموذج الاستفسار",
      "اتصل بنا اليوم، ودعنا نبدأ رحلة الابتكار والنجاح.",
      "سواء كنت شركة ناشئة تتطلع إلى إحداث تغيير جذري في السوق أو شركة راسخة تسعى إلى التحول الرقمي، فلدينا الخبرة اللازمة لتحقيق ذلك.",
      "انضم إلى قائمتنا المتزايدة من العملاء الراضين واختبر الفرق مع كاوارا.",
      "نجاحك هو أولويتنا.",
    ],
  },
};
