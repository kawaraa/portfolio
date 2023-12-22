const baseUrl = new URL(process.env.NEXT_PUBLIC_HOST);
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
    metadataBase: baseUrl,
    ...(data || {}),
    openGraph: {
      title: title || content.title[lang],
      description: description || content.description[lang],
      url: baseUrl,
      siteName: "Kawara",
      images: [{ url: `${baseUrl}/android-chrome-512x512.png`, width: 400, height: 500 }],
      type: "website",
      // publishedTime: page.createdAt,
      // modifiedTime: page.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: title || content.title[lang],
      description: description || content.description[lang],
      siteId: "14647548228070274373",
      creator: "@kawara",
      creatorId: "14647548228070274373",
      images: [`${baseUrl}/android-chrome-512x512.png`],
      site: twitterSite,
    },
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
    en: "Kawara portfolio, Kawara Software Consultant, Kawara software development, full-stack developer, Frontend developer, Backend developer, Webmaster, Systems development, Mobile application development, Android application development, Iphone IOS application development, Telephone application development, Smart device application development, Web development, Apps development, Build Web Shop, Build Online Store, Update Online Store Maintaining websites and applications, Updating websites and applications, Editing websites and applications, Enhancing websites performance, Enhancing applications performance, Fixing websites and applications, Improving SEO, Improving Search Engine Optimization, SEO friendly Website, User friendly Web App, Create accessible websites, User friendly UI UX, Create responsive websites, Create databases, Building RESTFUL API servers, Building web service",
    ar: "محفظة كوارا, كوارا أخصائي برمجيات, كوارا لتطوير البرمجيات, مطور ويب شامل متكامل, مطور الواجهة الأمامية, مطور الواجهة الخلفية, مطور خوادم, مشرف الموقع, تطوير الأنظمة, تطوير تطبيقات الهاتف المحمول, تطوير تطبيقات الاندرويد, تطوير تطبيقات الايفون IOS, تطوير تطبيقات الهاتف, تطوير تطبيقات الأجهزة الذكية, إنشاء متجر إلكتروني, تحديث متجر إلكتروني, تطوير الشبكة, صيانة المواقع والتطبيقات, تحديث المواقع والتطبيقات, تحرير المواقع والتطبيقات, تعزيز أداء المواقع, تحسين أداء التطبيقات, اصلاح المواقع والتطبيقات, تحسين محركات البحث, موقع متوافق مع تحسين محركات البحث, تطبيق ويب سهل الاستخدام, إنشاء مواقع ويب يمكن الوصول إليها, واجهة مستخدم سهلة الاستخدام, إنشاء مواقع ويب سريعة الاستجابة, إنشاء مواقع ويب متجاوب, إنشاء قواعد البيانات, بناء خوادم, بناء خدمة الويب, بناء سيرفرات, واجهة برمجة",
  },
  author: { name: "Kawara", url: baseUrl },
};
