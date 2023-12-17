import { cardBgCls, h1Cls } from "../../../components/tailwindcss-class";

export default function Contact({ params: { lang } }) {
  return (
    <>
      <h1 className={h1Cls}>
        {content.title[lang][0]}
        <span className="sr-only">
          {content.title[lang][1]}
          {content.title[lang][2]}
        </span>
      </h1>
      <p>{content.p[lang][1]}</p>
      <form className={`${cardBgCls} max-w-lg mx-auto mt-20 p-5`}>
        <h2 className="text-3xl mt-10 mb-3 text-center">{content.title[lang][1]}</h2>
        {/*  */}
      </form>
    </>
  );
}

const content = {
  title: {
    en: [
      "Join us on your digital journey",
      "Let's talk",
      " Contact us, Contact Kawara",
      "Are you ready to take your business to the next level?",
    ],
    ar: "",
  },
  p: {
    en: [
      "Embark on your digital journey with Kawara. Whether you're looking for innovative software solutions, strategic consulting, or a reliable partner to guide your digital transformation, we are here to exceed your expectations",
      "At Kawara, we don't just build software; we build success stories. Let's create yours together.",
      "Ready to build something real together with your favorite creatives and tech leads? Get into contact or fill out an inquiry form",
    ],
    ar: "",
  },
};
