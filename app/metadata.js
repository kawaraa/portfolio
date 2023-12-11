const siteName = process.env.SITE_NAME;
const baseUrl = new URL(process.env.NEXT_PUBLIC_HOST);
const twitterSite = process.env.TWITTER_SITE;

export default function getMetadata({ lang, title, description, keywords, author, data }) {
  return {
    title: { default: title || content.title[lang], template: `%s | ${siteName}` },
    description: description || content.description[lang],
    keywords: keywords || content.keywords[lang],
    category: "Software Development",
    authors: [author || content.author],
    icons: {
      shortcut: { type: "image/ico", sizes: "48x48", url: "/favicon/favicon.ico" },
      icon: { type: "image/png", sizes: "16x16", url: "/favicon/favicon-16x16.png" },
      apple: { type: "image/png", sizes: "180x180", url: "/favicon/apple-touch-icon.png" },
      other: [
        { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", url: "/favicon/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", url: "/favicon/android-chrome-512x512.png" },
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
      siteName,
      images: [{ url: `${baseUrl}/android-chrome-512x512.png`, width: 600, height: 600 }],
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

const content = {
  title: {
    en: "Kawara Software Development - Web Application Development",
    ar: "كاوارا لتطوير البرمجيات - تطوير تطبيقات الويب - Kawara",
  },
  description: {
    en: "Kawara is a Software Development company that does Web, Application, System and Custom Development also Fixing, Updating, Maintenance and Performance improvement for Websites and a lot of other things",
    ar: "Kawara كاوارا هي شركة لتطوير البرمجيات تقوم بتطوير الويب والتطبيقات والأنظمة والتطوير المخصص بالإضافة إلى إصلاح وتحديث وصيانة وتحسين الأداء لمواقع الويب والكثير من الأشياء الأخرى ",
  },
  keywords: {
    en: "Kawara portfolio, Kawara software development, full-stack developer, Frontend developer, Backend developer, Webmaster, Systems development, Mobile application development, Android application development, Iphone IOS application development, Telephone application development, Smart device application development, Web development, Apps development, Maintaining websites and applications, Updating websites and applications, Editing websites and applications, Enhancing websites performance, Enhancing applications performance, Fixing websites and applications, Improving SEO, Improving Search Engine Optimization, SEO friendly Website, User friendly Web App, Create accessible websites, User friendly UI UX, Create responsive websites, Create databases, Building RESTFUL API servers, Building web service",
    ar: "محفظة كاوارا, كاوارا لتطوير البرمجيات, مطور ويب شامل متكامل, مطور الواجهة الأمامية, مطور الواجهة الخلفية, مطور خوادم, مشرف الموقع, تطوير الأنظمة, تطوير تطبيقات الهاتف المحمول, تطوير تطبيقات الاندرويد, تطوير تطبيقات الايفون IOS, تطوير تطبيقات الهاتف, تطوير تطبيقات الأجهزة الذكية, تطوير الشبكة, صيانة المواقع والتطبيقات, تحديث المواقع والتطبيقات, تحرير المواقع والتطبيقات, تعزيز أداء المواقع, تحسين أداء التطبيقات, اصلاح المواقع والتطبيقات, تحسين محركات البحث, موقع متوافق مع تحسين محركات البحث, تطبيق ويب سهل الاستخدام, إنشاء مواقع ويب يمكن الوصول إليها, واجهة مستخدم سهلة الاستخدام, إنشاء مواقع ويب سريعة الاستجابة, إنشاء مواقع ويب متجاوب, إنشاء قواعد البيانات, بناء خوادم RESTFUL API, بناء خدمة الويب",
  },
  author: { name: "Kawara", url: baseUrl },
};
