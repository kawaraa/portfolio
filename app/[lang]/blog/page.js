import { h1Cls, h2Cls, pageCls } from "../../../components/tailwindcss-class";
import { getBlogFileNames } from "../../../services/blogs";
import Link from "next/link";

export default async function Blog({ params: { lang } }) {
  const fileNames = await getBlogFileNames();

  return (
    <main className={pageCls}>
      <h1 className={h1Cls}>{content.title[lang]}</h1>
      <p className="mb-10">{content.p[lang]}</p>

      <h2 className={h2Cls}>Recent posts</h2>
      <ul className="flex flex-col sm:flex-row gap-x-2">
        {fileNames.map((fileName, i) => {
          const slug = fileName.replace(".json", "");
          return (
            <li key={i}>
              <Link href={`/${lang}/blog/${slug}`} className="hvr text-pc capitalize">
                {slug.replaceAll("-", " ")}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

const content = {
  title: { en: "Explore Our Articles", ar: "استكشف مقالاتنا" },
  p: {
    en: "Welcome to our vibrant collection of articles where knowledge meets discovery.",
    // Add this later: Dive into a world of insightful content crafted to inform, inspire, and engage. Our diverse range of articles covers a spectrum of topics, from industry trends to expert advice, ensuring there's something for every curious mind.
    ar: "مرحبًا بك في مجموعتنا النابضة بالحياة من المقالات حيث تلتقي المعرفة بالاكتشاف.",
  },
};

// Recent posts
// Our top picks in Branding
// Our top picks in Case studies
// Our top picks in Design
// Our top picks in Development
// Our top picks in Digitalization
// Our top picks in E-commerce
// Our top picks in Insights
// Our top picks in Metaverse
// Our top picks in Marketing
// Our top picks in Press release
