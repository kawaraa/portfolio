const baseUrl = process.env.NEXT_PUBLIC_HOST;
const twitterSite = process.env.TWITTER_SITE || "";

export default function getMetadata({ lang, title, description, keywords, author, data }) {
  return {
    title: title || { default: content.title[lang], template: `%s - Kawara` },
    description: description || content.description[lang],
    keywords: keywords || content.keywords[lang],
    category: "Software Development",
    applicationName: "Kawara",
    authors: [author || content.author],
    icons: {
      shortcut: { type: "image/ico", sizes: "48x48", url: "/favicon.ico" },
      icon: { type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      apple: { type: "image/png", sizes: "180x180", url: "/apple-touch-icon.png" },
      other: [
        { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", url: "/android-chrome-512x512.png" },
      ],
    },
    manifest: "/manifest.json",
    other: { google: "notranslate" },
    metadataBase: new URL(`${baseUrl}/${lang}`).href,
    ...(data || {}),
    openGraph: {
      title: `${title || content.title[lang]} - Kawara`,
      description: description || content.description[lang],
      url: new URL(`${baseUrl}/${lang}`).href,
      siteName: "Kawara",
      images: [{ url: new URL(`${baseUrl}/opengraph-kawara-logo.png`).href, width: 300, height: 400 }],
      type: "website",
      // publishedTime: page.createdAt,
      // modifiedTime: page.updatedAt,
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title: `${title || content.title[lang]} - Kawara`,
    //   description: description || content.description[lang],
    //   siteId: "14647548228070274373",
    //   creator: "@kawara",
    //   creatorId: "14647548228070274373",
    //   images: [new URL(`${baseUrl}/opengraph-kawara-logo.png`).href],
    //   site: twitterSite,
    // },
    appleWebApp: { title: "Kawara", statusBarStyle: "black-translucent" },
    robots: {
      follow: true,
      index: true,
    },
  };
}

export const content = {
  title: {
    en: "Kawara Software Consultant - Software And Web Development",
    ar: "كوارا أخصائي برمجيات - تطوير البرمجي والويب",
  },
  description: {
    en: "Kawara is a Software Consulting who does Web, Application, System and Custom Development, Fixing and improving Websites Performance and other services",
    ar: "كوارا هي شركة لتطوير البرمجيات وأخصائي برمجيات تقوم بتطوير الويب والتطبيقات والأنظمة والتطوير المخصص وإصلاح وصيانة وتحسين أداء مواقع الويب وغيرها من الخدمات",
  },
  keywords: {
    en: "Kawara portfolio, Kawara Software Consultant, Kawara software development, full-stack developer, Frontend developer, Backend developer, Webmaster, Systems development, Mobile application development, Android application development, Iphone IOS application development, Telephone application development, Smart device application development, Web development, Apps development, Build Web Shop, Build Online Store, Update Online Store Maintaining websites and applications, Updating websites and applications, Editing websites and applications, Enhancing websites performance, Enhancing applications performance, Fixing websites and applications, Improving SEO, Improving Search Engine Optimization, SEO friendly Website, User friendly Web App, Create accessible websites, User friendly UI UX, Create responsive websites, Create databases, Building RESTFUL API servers, Building web service, Shopify Integration, E-commerce Solutions, Custom Shopify Development, Shopify API Development, Third-party Integration, Shopify App Development, Tailored E-commerce Solutions, API Integration Services, Shopify Customization Experts, E-commerce Software Consultants, Shopify Theme Customization, API Endpoint Development, Shopify Store Optimization, Inventory Management Integration, Payment Gateway Integration, Responsive Shopify Design, Scalable E-commerce Solutions, Data Migration Services, Shopify Plus Consulting, API Documentation and Support",
    ar: "محفظة كوارا, كوارا أخصائي برمجيات, كوارا لتطوير البرمجيات, مطور ويب شامل متكامل, مطور الواجهة الأمامية, مطور الواجهة الخلفية, مطور خوادم, مشرف الموقع, تطوير الأنظمة, تطوير تطبيقات الهاتف المحمول, تطوير تطبيقات الاندرويد, تطوير تطبيقات الايفون, تطوير تطبيقات الهاتف, تطوير تطبيقات الأجهزة الذكية, إنشاء متجر إلكتروني, تحديث متجر إلكتروني, تطوير الشبكة, صيانة المواقع والتطبيقات, تحديث المواقع والتطبيقات, تحرير المواقع والتطبيقات, تعزيز أداء المواقع, تحسين أداء التطبيقات, اصلاح المواقع والتطبيقات, تحسين محركات البحث, موقع متوافق مع تحسين محركات البحث, تطبيق ويب سهل الاستخدام, إنشاء مواقع ويب يمكن الوصول إليها, واجهة مستخدم سهلة الاستخدام, إنشاء مواقع ويب سريعة الاستجابة, إنشاء مواقع ويب متجاوب, إنشاء قواعد البيانات, بناء خوادم, بناء خدمة الويب, بناء سيرفرات, واجهة برمجة, دمج الأطراف الأخرى مع شوبيفاي, تطوير شوبيفاي المخصص, الدمج والتكامل مع شوبيفاي, تطوير تطبيقات شوبيفاي, حلول التجارة الإلكترونية المخصصة, خدمات دمج واجهة برمجة, خبراء التعديل في شوبيفاي, مستشارو برامج التجارة الإلكترونية, تخصيص قالب شوبيفاي, واجهة, تحسين متجر شوبيفاي, دمج إدارة المخزون, دمج بوابة الدفع, تصميم شوبيفاي سريع الاستجابة, حلول التجارة الإلكترونية القابلة للتطوير, خدمات ترحيل البيانات, استشارات شوبيفاي بلس, توثيق ودعم واجهة برمجة التطبيقات",
  },
  author: { name: "Kawara", url: baseUrl },
};
