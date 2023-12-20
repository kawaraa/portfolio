import { Suspense } from "react";
import { call, navLinks, send, workWith } from "./shared-content";
import { BrandLogo, BrandName } from "./navbar/brand";
import { btnCls, linkCls, skeletonCls } from "./tailwindcss-class";
import TimeByTimezone from "./time-by-timezone";
const lineSkeleton = skeletonCls + " w-full h-6";

export default async function Footer({ lang }) {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2022 + (currentYear > 2022 ? `-${currentYear}` : "");

  return (
    <footer
      dir="ltr"
      className="text-sm p-6 py-12 bg-pc text-dt border-t border-stone-300 dark:border-neutral-700"
    >
      <div
        dir="auto"
        className={`mb-8 flex flex-col sm:flex-row items-center gap-3 ${lang != "ar" && "justify-end"}`}
      >
        <h3 className="text-2xl text-bg font-semibold">{workWith[lang]}</h3>
        <div className="flex gap-3">
          <a
            href={`/${lang}/contact`}
            name="BUTTON"
            className={`${btnCls} py-3 px-5 !bg-dbg hover:!bg-sc rounded-full`}
          >
            {call[lang]}
          </a>
          <a
            href={`/${lang}/contact`}
            name="BUTTON"
            className={`${btnCls} py-3 px-5 !bg-dbg hover:!bg-sc rounded-full`}
          >
            {send[lang]}
          </a>
        </div>
        {/*  */}
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 text-sm md:flex-row md:gap-12 min-[1320px]:px-0">
        <div className="md:w-1/3 flex items-center justify-between md:flex-col">
          <div className="flex items-start">
            <BrandLogo />
            <BrandName cls="text-white mx-3" />
          </div>

          <div id="social-media-wrapper" className="flex items-center gap-3">
            {content.socialMedia.map((item, i) => (
              <a
                href={item.link.replace("lang", lang)}
                target="_blank"
                title={item.title[lang]}
                className={`overflow-hidden w-8 aspect-square bg-bg ${
                  i == 2 ? "p-[6px]" : "p-1"
                } rounded-lg duration-300`}
                key={i}
              >
                <img src={item.imageUrl} alt="social media profile logo" className="w-full h-full" />
              </a>
            ))}
          </div>
        </div>

        <Suspense
          fallback={
            <div className="flex justify-around">
              {new Array(2).fill(0).map((_, i) => (
                <div className="flex h-[188px] w-[200px] flex-col gap-5" key={i}>
                  <div className={lineSkeleton} />
                  <div className={lineSkeleton} />
                  <div className={lineSkeleton} />
                </div>
              ))}
            </div>
          }
        >
          <div dir="auto" className="md:flex-auto flex">
            <ul className="flex-auto">
              {navLinks.map((item, i) => (
                <li className="my-2" key={i}>
                  <a href={item.path.replace("lang", lang)} className="hvr block py-1 px-2">
                    {item[lang]}
                  </a>
                </li>
              ))}
            </ul>

            <div dir="ltr" className="flex-auto flex flex-col items-start justify-end">
              <address className="">
                <h3 className="text-lg">
                  Amsterdam: <TimeByTimezone cls="font-semibold" />
                </h3>
                <br />
                Govert Flinckstraat
                <br />
                971072 EE Amsterdam
                <br />
                Netherlands
              </address>
              <a
                className={`${linkCls} hvr text-bg hover:text-bg mt-3 text-lg`}
                target="_blank"
                href="mailto:contact@kawaraa.com?Subject=Hello%20again"
              >
                contact@kawaraa.com
              </a>
            </div>
          </div>
        </Suspense>
      </div>

      <div className="mt-16 text-sm">
        <div className="mx-auto w-full max-w-7xl flex flex-col items-center justify-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} Kawara.{content.rights[lang]}
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] md:inline-block" />
          <p>{content.certified[lang]}</p>
        </div>
      </div>
    </footer>
  );
}

const content = {
  rights: { en: "All rights reserved", ar: "كل الحقوق محفوظة" },
  certified: { en: "Crafted by Kawara", ar: "Kawara من صنع" },
  socialMedia: [
    {
      title: { en: "Kawara Instagram profile", ar: "الملف الشخصي على الانستغرام" },
      link: "https://www.instagram.com/in/kawaraa",
      imageUrl: "/instagram.png",
    },
    {
      title: { en: "Kawara Facebook page", ar: "صفحة كوارا على الفيسبوك" },
      link: "https://www.facebook.com/kawaraa1",
      imageUrl: "/facebook.png",
    },
    {
      title: { en: "Kawara LinkedIn profile", ar: "الملف الشخصي على لينكدإن" },
      link: "https://www.linkedin.com/in/kawaraa",
      imageUrl: "/linkedin.png",
    },
    // {
    //   title: { en: "Kawara GitHub profile", ar: "الملف الشخصي لكوارا على كيت هاب" },
    //   link: "https://github.com/kawaraa",
    //   imageUrl: "/github.png",
    // },
  ],
};
