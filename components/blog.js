import { contact } from "../data/shared-content";
import ImageWithSkeleton from "./image-with-skeleton";
import { btnCls, getLazyCls, h1Cls, h2Cls, lazyCls } from "./tailwindcss-class";
import Link from "next/navigation";
const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

export default function Blog({ children, lang, content, hiddenText }) {
  return (
    <article>
      <h1 className={`${h1Cls} ${getLazyCls()}`}>{content.h[lang]}</h1>

      <div className="text-sm mb-10">
        {content.p[lang].map((p, i) => (
          <p className={getLazyCls()} key={i}>
            {p}
          </p>
        ))}

        {!hiddenText ? "" : <p className="sr-only">{hiddenText}</p>}
      </div>

      <ImageWithSkeleton
        src={content.imageUrl}
        width="500"
        height="500"
        alt={content.h[lang]}
        className="w-full"
        wrapperCls={`${getLazyCls()} min-w-[300px] max-w-[700px] mx-auto`}
        wrapper
      />

      <div className="h-20"></div>

      {content.sections.map((section, i) => (
        <Section lang={lang} section={section} key={i}>
          {section.sections?.map((section, i) => (
            <Section lang={lang} section={section} key={i} level="3" />
          ))}
        </Section>
      ))}

      <List lang={lang} list={content.list} />

      {!content.endP ? "" : <p className={lazyCls + " mt-20"}>{content.endP[lang]}</p>}

      {children}
    </article>
  );
}

export function Section({ children, lang, section, level = "2" }) {
  const HTag = headings[+level - 1];

  return (
    <section className="mb-10">
      <HTag className={`${h2Cls} ${lazyCls}`}>{section.h[lang]}</HTag>

      <ImageWithSkeleton
        src={section.imageUrl}
        width="500"
        height="500"
        alt={section.h[lang]}
        className="w-full"
        wrapperCls={`${lazyCls} min-w-[300px] max-w-[700px] mx-auto`}
        wrapper
      />

      <p className={lazyCls}>{section.p[lang]}</p>

      <List lang={lang} list={section.list} />

      {children}
    </section>
  );
}

export function List({ lang, list }) {
  const c = ["list-[disc]", "list-[circle]", "list-[square]", "list-[decimal]", "list-[lower-alpha]"];

  const LinkItem = ({ href, children }) => {
    return !href ? (
      children
    ) : (
      <Link href={href} className="underline underline-offset-4 hover:text-link">
        {children}
      </Link>
    );
  };

  if (!list || !list.items[0]) return null;
  return (
    <>
      {!list.title ? "" : <p className="text-lg font-semibold">{list.title[lang]}</p>}

      <ol className={`mt-10 px-6 ${c.find((c) => c.includes(list.style)) || ""}`}>
        {list.items.map((item, i) => {
          const [h, p] = item[lang].split(":");

          return (
            <li className={`${lazyCls} mb-8`} key={i}>
              {!p ? (
                <LinkItem href={item.link}>{h}</LinkItem>
              ) : (
                <>
                  <LinkItem href={item.link}>
                    <h4 className="text-lg font-semibold">{h}:</h4>
                  </LinkItem>
                  <p>{p}</p>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
}

export const ContactBtn = ({ lang }) => {
  return (
    <a
      href={`/${lang}/contact`}
      name="BUTTON"
      className={`${btnCls} mt-5 mx-auto py-3 px-5 !bg-dbg hover:!bg-sc rounded-full ${lazyCls}`}
    >
      {contact[lang]}
    </a>
  );
};
