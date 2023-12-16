import { Suspense } from "react";
import { navLinks } from "./shared-content";
import Brand from "./navbar/brand";
import { linkCls, skeleton } from "./tailwindcss-class";
import TimeByTimezone from "./time-by-timezone";
const lineSkeleton = skeleton + " w-full h-6";

export default async function Footer({ lang }) {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2022 + (currentYear > 2022 ? `-${currentYear}` : "");

  return (
    <footer dir="ltr" className="text-sm mt-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-stone-300 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div className="md:w-1/3 flex items-center justify-between md:flex-col">
          <Brand />

          <div id="social-media-wrapper" className="flex gap-3">
            {content.socialMedia.map((item, i) => (
              <a
                href={item.link.replace("lang", lang)}
                target="_blank"
                title={item.title[lang]}
                className="overflow-hidden w-8 rounded-lg duration-300"
                key={i}
              >
                <img src={item.imageUrl} alt="social media profile logo" className="w-full" />
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

            <div className="flex-auto flex flex-col items-start justify-end">
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
                className={`${linkCls} hvr mt-3 text-lg`}
                target="_blank"
                href="mailto:contact@kawaraa.com?Subject=Hello%20again"
              >
                contact@kawaraa.com
              </a>
            </div>
          </div>
        </Suspense>
      </div>

      <div className="py-6 text-sm">
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
      title: { en: "Kawara LinkedIn profile", ar: "الملف الشخصي على لينكدإن" },
      link: "https://www.linkedin.com/in/kawaraa",
      imageUrl: "/linkedin.png",
    },
    {
      title: { en: "Kawara Facebook page", ar: "صفحة كوارا على الفيسبوك" },
      link: "https://www.facebook.com/kawaraa1",
      imageUrl: "/facebook.png",
    },
    {
      title: { en: "Kawara GitHub profile", ar: "الملف الشخصي لكوارا على كيت هاب" },
      link: "https://github.com/kawaraa",
      imageUrl: "/github.png",
    },
  ],
};
