import localFont from "next/font/local";
const IconFont = localFont({ src: "../../public/font/Quicksand-Bold.ttf", display: "swap" });

export default function Brand({ cls = "", ...p }) {
  return (
    <strong className={`leading-[1] tracking-[2px] text-2xl capitalize ${IconFont.className} ${cls}`} {...p}>
      Kawara
    </strong>
  );
}
