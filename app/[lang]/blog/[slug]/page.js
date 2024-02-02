import { notFound } from "next/navigation";
import { getBlogFileContent } from "../../../../services/blogs";
import { lazyCls, pageCls } from "../../../../components/tailwindcss-class";
import Blog, { ContactBtn } from "../../../../components/blog";
import { contactUsParagraph } from "../../../../data/shared-content";

export default function BlogPage({ params: { lang, slug } }) {
  const blog = getBlogFileContent(slug);

  if (!blog) return notFound();
  return (
    <main className={pageCls}>
      <Blog lang={lang} content={blog}>
        <p className={lazyCls}>{contactUsParagraph[lang]}</p>
        <ContactBtn lang={lang} />
      </Blog>

      <div className="h-20"></div>
    </main>
  );
}
