import { h1Cls } from "../../../components/tailwindcss-class";
import ContactForm from "./contact-form";

export default function Contact({ params: { lang } }) {
  return (
    <>
      <h1 className={h1Cls}>
        {content.title[lang][0]}
        <span className="sr-only">
          {content.title[lang][2]}
          {content.title[lang][3]}
        </span>
      </h1>

      <p>{content.p[lang][0]}</p>
      <p>{content.p[lang][1]}</p>
      <ContactForm lang={lang} />
    </>
  );
}

const content = {
  title: {
    en: [
      "Join us on your digital journey",
      "Let's talk",
      " Contact us, Contact Kawara",
      "Let's build something together!",
      "Are you ready to take your business to the next level?",
    ],
    ar: [""],
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
    ar: [""],
  },
};
