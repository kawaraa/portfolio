import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { content } from "./metadata";
import HomePageByLang from "./[lang]/page";
import "./[lang]/page.css";

export default function Page(props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            applicationCategory: content.keywords["en"],
            name: "Kawara",
            image: `${process.env.NEXT_PUBLIC_HOST}/android-chrome-512x512.png`,
            description: content.description["en"],
            genre: "Software Development",
            author: "Kawara",
            brand: "Kawara",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 4,
              reviewCount: 143,
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />

      <Navbar lang="en" />
      {/* <header></header> */}

      <div id="main-container" className="overflow-scroll">
        <HomePageByLang {...props} params={{ lang: "en" }} />

        <Footer lang="en" />
      </div>
    </>
  );
}

export const metadata = { alternates: { canonical: "/en" } };
