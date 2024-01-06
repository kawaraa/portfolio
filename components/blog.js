import { contact } from "./data/shared-content";
import ImageWithSkeleton from "./image-with-skeleton";
import { btnCls, getCssDelay, h1Cls, h2Cls, lazyCls } from "./tailwindcss-class";

export default function Blog({ lang, content, hiddenText, children }) {
  return (
    <>
      <h1 className={h1Cls}>{content.h1[lang]}</h1>

      <div className="lazy-b text-sm mb-10" style={getCssDelay()}>
        {content.p[lang].map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {!hiddenText ? "" : <p className="sr-only">{hiddenText}</p>}
      </div>

      <ImageWithSkeleton
        src={content.imageUrl}
        width="500"
        height="500"
        alt={content.h1[lang]}
        className="w-full"
        wrapperCls={"min-w-[300px] max-w-[700px] mx-auto " + lazyCls}
        wrapper
      />

      <div className="h-20"></div>

      <Sections lang={lang} sections={content.sections} />

      <List lang={lang} list={content.list} />

      {!content.endP ? "" : <p className={lazyCls + " mt-20"}>{content.endP[lang]}</p>}

      {children}
    </>
  );
}

export function Sections({ lang, sections }) {
  return sections.map((s, i) => (
    <section className={lazyCls + " mb-10"} key={i}>
      <h2 className={h2Cls}>{s.t[lang]}</h2>
      <p>{s.p[lang]}</p>
    </section>
  ));
}

export function List({ lang, list }) {
  const c = ["list-[disc]", "list-[circle]", "list-[square]", "list-[decimal]", "list-[lower-alpha]"];

  if (!list || !list[0]) return null;
  return (
    <ol className={`mt-20 px-6 ${c.find((c) => c.includes(list.style)) || ""} ${lazyCls}`}>
      {list.items.map((item, i) => (
        <li key={i}>{item[lang]}</li>
      ))}
    </ol>
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
