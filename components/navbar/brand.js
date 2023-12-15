import localFont from "next/font/local";
const siteName = process.env.SITE_NAME;
const IconFont = localFont({ src: "../../public/font/Quicksand-Bold.ttf", display: "swap" });

export default function Brand({ cls = "", ...p }) {
  return (
    <strong className={`leading-[1] tracking-[2px] text-2xl capitalize ${IconFont.className} ${cls}`} {...p}>
      {siteName}
    </strong>
  );
}
