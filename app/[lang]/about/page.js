import { bCls, cardBgCls } from "../../../components/tailwindcss-class";

export default function About({ params: { lang } }) {
  return (
    <>
      <div>من نحن؟</div>
      <h1>
        Who are we?<span className="sr-only">, About Kawara?, Who is Kawara?, What is Kawara?</span>
      </h1>

      <div className={`${cardBgCls} ${bCls} w-1/3 mx-auto mt-10 p-3`}>
        fwnfpwe f[oiefhjpoiwehjf[oeifjhowepifhj[f onfjhewfpoihwe fwnfpwewefjw]e[pfj wef wf[powiefjwe f]-]]]]
      </div>
    </>
  );
}
