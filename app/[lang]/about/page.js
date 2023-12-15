import { bCls, cardBgCls, h1Cls } from "../../../components/tailwindcss-class";

export default function About({ params: { lang } }) {
  return (
    <>
      <h1 className={h1Cls + " mt-20"}>
        {content.title[lang][0]} <br />
        <span className="opacity-75">{content.title[lang][1]}</span>
      </h1>

      <h1>
        Who are we?<span className="sr-only">, About Kawara?, Who is Kawara?, What is Kawara?</span>
      </h1>

      <div className={`${cardBgCls} ${bCls} w-1/3 mx-auto mt-10 p-3`}>
        fwnfpwe f[oiefhjpoiwehjf[oeifjhowepifhj[f onfjhewfpoihwe fwnfpwewefjw]e[pfj wef wf[powiefjwe f]-]]]]
      </div>
    </>
  );
}

export function generateMetadata({ params: { lang } }) {
  return { title: content.title[lang] };
}

const content = {
  title: { en: ["About us", "Solutions Beyond Code"], ar: ["لمحة عنا", "حلول ما وراء البرمجية"] },
};
