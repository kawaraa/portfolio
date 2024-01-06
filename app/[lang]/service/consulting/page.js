import Blog from "../../../../components/blog";
import { contact } from "../../../../components/data/shared-content";
import { btnCls, lazyCls, pageCls } from "../../../../components/tailwindcss-class";
import { content as metadata } from "../../../metadata";

export default function Page({ params: { lang } }) {
  return (
    <main className={pageCls}>
      <Blog lang={lang} content={content} hiddenText={metadata.keywords[lang]}>
        {/* contact */}

        <a
          href={`/${lang}/contact`}
          name="BUTTON"
          className={`${btnCls} mt-5 mx-auto py-3 px-5 !bg-dbg hover:!bg-sc rounded-full ${lazyCls}`}
        >
          {contact[lang]}
        </a>
      </Blog>
      <div className="h-20"></div>
    </main>
  );
}

const content = {
  h1: { en: "Software Consulting Services", ar: "خدمات استشارات البرمجيات" },
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
      t: { en: "Shopify Integration", ar: "الدمج والتكامل مع شوبيفي" },
      p: {
        en: "Shopify Integration is a pivotal aspect of e-commerce development, enabling businesses to seamlessly connect and synchronize their Shopify stores with various applications and services. This process involves merging Shopify's robust e-commerce platform with third-party tools, APIs, and custom solutions to enhance functionality and streamline business operations. Through Shopify Integration, businesses can automate tasks such as inventory management, order processing, and customer data synchronization, fostering efficiency and reducing manual efforts. This allows merchants to focus on core aspects of their business while ensuring a cohesive and connected online shopping experience for customers. Whether it's integrating payment gateways, third-party apps, or customizing the storefront, Shopify Integration empowers businesses to create a tailored and integrated online presence, ultimately contributing to a more successful and scalable e-commerce venture.",
        ar: "الدمج والتكامل مع شوبيفي هو جانب حيوي في تطوير التجارة الإلكترونية، حيث يمكن للشركات ربط متاجرها على شوبيفي بسلاسة مع تطبيقات وخدمات متنوعة. يشمل هذا العملية دمج منصة التجارة الإلكترونية القوية شوبيفي مع أدوات الأطراف الأخرى، وواجهات برمجة التطبيقات، وحلول مخصصة لتعزيز الوظائف وتسهيل عمليات الأعمال. من خلال الدمج والتكامل مع شوبيفي يمكن للشركات أتمتة المهام مثل إدارة المخزون، ومعالجة الطلبات، ومزامنة بيانات العملاء، مما يعزز الكفاءة ويقلل من الجهد اليدوي. وهذا يتيح للتجار التركيز على الجوانب الأساسية لأعمالهم مع ضمان تجربة تسوق عبر الإنترنت متكاملة ومتصلة للعملاء. سواء كان الأمر يتعلق بتكامل بوابات الدفع، أو تطبيقات الأطراف الأخرى، أو تخصيص واجهة المتجر، يمكن لتكامل Shopify أن يمكن الشركات من خلق تواجد عبر الإنترنت مخصص ومتكامل، مما يسهم في نجاح مشروع التجارة الإلكترونية بشكل أكبر وأكثر قابلية للتوسيع.",
      },
    },
    {
      t: { en: "Point-of-Sale (POS) Systems", ar: "أنظمة نقاط البيع (POS)" },
      p: {
        en: "Upgrade your in-store transactions and checkout process with a seamless POS system. Speed up transactions, manage inventory efficiently, and enhance the overall customer experience.",
        ar: "قم بترقية عمليات المعاملات وعملية الدفع في متجرك بشكل سلس من خلال نظام POS سلس. زود عمليات المعاملات، وأدر المخزون بكفاءة، وعزز تجربة العملاء بشكل عام",
      },
    },
    {
      t: { en: "E-Commerce Integration", ar: "دمج التجارة الإلكترونية" },
      p: {
        en: "Extend your local business online! Reach customers beyond your storefront with integrated e-commerce solutions that make shopping convenient and accessible by transform your local store into an online shopping destination",
        ar: "وسّع عملك المحلي عبر الإنترنت! أوصل إلى العملاء خارج نطاق متجرك مع حلول التجارة الإلكترونية المتكاملة التي تجعل عملية التسوق مريحة ومتاحة من خلال تحويل متجرك المحلي إلى وجهة للتسوق عبر الإنترنت.",
      },
    },
    {
      t: { en: "Custom Mobile Apps", ar: "تطبيقات الجوال المخصصة" },
      p: {
        en: "Stay connected with your customers on the go through a personalized mobile app. Offer exclusive deals, loyalty programs, and a convenient way for them to engage with your business anytime, anywhere.",
        ar: "ابق على اتصال مع عملائك أثناء التنقل من خلال تطبيق جوال شخصي. قدم صفقات حصرية، وبرامج تخفيضات، ووسيلة مريحة للتفاعل مع عملكم في أي وقت وفي أي مكان.",
      },
    },

    {
      t: { en: "Inventory Management", ar: "إدارة المخزون" },
      p: {
        en: "Streamline your inventory management with a custom software solution. Keep track of stock levels, automate reordering, and minimize the risk of overstocking or running out of popular items.",
        ar: "قم بتسهيل إدارة المخزون من خلال حلول برمجية مخصصة. تتبع مستويات المخزون، الطلبات، وقلل من مخاطر الزيادة في المخزون أو نفاذ العناصر الأكثر مبيعا.",
      },
    },
    {
      t: { en: "Customer Relationship Management (CRM)", ar: "إدارة العلاقات مع العملاء" },
      p: {
        en: "Build lasting relationships with your customers. Implement a CRM system to manage customer interactions, personalize marketing efforts, and enhance customer satisfaction.",
        ar: "بناء علاقات دائمة مع عملائكم. قم بتنفيذ نظام CRM لإدارة تفاعلات العملاء، وتخصيص جهود التسويق، وتعزيز رضا العملاء.",
      },
    },
    {
      t: { en: "Appointment Scheduling", ar: "جدولة المواعيد" },
      p: {
        en: "Simplify appointments! Allow customers to schedule appointments online, Service-based businesses can offer hassle-free appointments booking system, reminders, and an improved customer booking experience.",
        ar: "سهلوا عملية تحديد المواعيد! دعوا العملاء يحددون مواعيدهم عبر الإنترنت، يمكن للأعمال المعتمدة على الخدمات تقديم نظام حجز مواعيد خالٍ من المتاعب، وتذكيرات، وتحسين تجربة حجز العملاء.",
      },
    },
    {
      t: { en: "Analytics and Reporting", ar: "التحليلات والتقارير" },
      p: {
        en: "Gain valuable insights into your business performance. Utilize analytics and reporting tools to track sales, customer behavior, and make informed decisions for growth.",
        ar: "احصلوا على رؤى قيمة حول أداء عملكم. استخدموا أدوات التحليل والتقارير لتتبع المبيعات وسلوك العملاء، واتخاذ قرارات مستنيرة للنمو.",
      },
    },
  ],
  endP: {
    en: "Ready to elevate your local business through innovative software solutions? Let's collaborate to bring your vision to life! Contact us today for a personalized consultation.",
    ar: "هل أنت جاهز لرفع أعمالك المحلية من خلال حلول برمجية مبتكرة؟ لنتعاون لتحقيق رؤيتكم! اتصل بنا اليوم للحصول على استشارة شخصية.",
  },
};
