import ImageWithSkeleton from "../../../../components/image-with-skeleton";
import { getCssDelay, h1Cls, pageCls } from "../../../../components/tailwindcss-class";
import { content as metaData } from "../../../metadata";

export default function Page({ params: { lang } }) {
  return (
    <main className={pageCls}>
      <h1 className={h1Cls}>{content.title[lang]}</h1>

      <div className="lazy-b text-sm mb-10" style={getCssDelay()}>
        {content.p[lang].map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <p className="sr-only">{metaData[lang]}</p>
      </div>

      <ImageItem
        src={content.imageUrl}
        width="500"
        height="500"
        alt={content.title[lang]}
        className="w-full"
      />
      <div className="h-20"></div>
      {content.sections.map((s, i) => (
        <section className="mb-10" key={i}>
          <h2 className="text-2xl mb-5 mt-3 md:t-0 md:mx-0">{s.t[lang]}</h2>
          <p>{s.p[lang]}</p>
        </section>
      ))}
      <div className="h-20"></div>
    </main>
  );
}

function ImageItem({ src, cls = "", alt = "" }) {
  return (
    <div className={cls || "min-w-[300px] max-w-[700px] mx-auto"}>
      <ImageWithSkeleton src={src} width="500" height="500" alt={alt} className="w-full" />
    </div>
  );
}

const content = {
  title: { en: "E-Commerce", ar: "التجارة الإلكترونية" },
  p: {
    en: [
      "Discover the E-commerce solutions and the power of digital transformation with our custom software solutions.",
      "Here's how our software development expertise can revolutionize your business",
    ],
    ar: [
      "اكتشف حلول التجارة الإلكترونية وقوة التحول الرقمي من خلال حلولنا البرمجية المخصصة",
      "إليك كيف يمكن لخبرتنا في تطوير البرمجيات أن تُحدث ثورة في عملك",
    ],
  },
  imageUrl: "/ecommerce.jpg",
  sections: [
    {
      t: { en: "Point-of-Sale (POS) Systems", ar: "" },
      p: {
        en: "Upgrade your in-store transactions and checkout process with a seamless POS system. Speed up transactions, manage inventory efficiently, and enhance the overall customer experience.",
        ar: "",
      },
    },

    {
      t: { en: "E-Commerce Integration", ar: "" },
      p: {
        en: "Extend your local business online! Reach customers beyond your storefront with integrated e-commerce solutions that make shopping convenient and accessible by transform your local store into an online shopping destination",
        ar: "",
      },
    },

    {
      t: { en: "Custom Mobile Apps", ar: "" },
      p: {
        en: "Stay connected with your customers on the go through a personalized mobile app. Offer exclusive deals, loyalty programs, and a convenient way for them to engage with your business anytime, anywhere.",
        ar: "",
      },
    },

    {
      t: { en: "Inventory Management", ar: "" },
      p: {
        en: "Streamline your inventory management with a custom software solution. Keep track of stock levels, automate reordering, and minimize the risk of overstocking or running out of popular items.",
        ar: "",
      },
    },

    {
      t: { en: "Customer Relationship Management (CRM)", ar: "" },
      p: {
        en: "Build lasting relationships with your customers. Implement a CRM system to manage customer interactions, personalize marketing efforts, and enhance customer satisfaction.",
        ar: "",
      },
    },

    {
      t: { en: "Appointment Scheduling", ar: "" },
      p: {
        en: "Simplify appointments! Allow customers to schedule appointments online, Service-based businesses can offer hassle-free appointments booking system, reminders, and an improved customer booking experience.",
        ar: "",
      },
    },

    {
      t: { en: "Analytics and Reporting", ar: "" },
      p: {
        en: "Gain valuable insights into your business performance. Utilize analytics and reporting tools to track sales, customer behavior, and make informed decisions for growth.",
        ar: "",
      },
    },
  ],
};
