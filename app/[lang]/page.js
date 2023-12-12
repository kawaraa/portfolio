// import Image from "next/image";

// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(() => import("../components/header"), { ssr: false });
// you can use the ssr option to disable server-rendering. This is useful if an external dependency or component relies on browser APIs like window.
// Or use React.lazy for only client side: https://react.dev/reference/react/lazy

export default function HomePageByLang({ params: { lang } }) {
  return (
    <main className="">
      <section>
        <h1 id="intro-heading">
          <div className="flex justify-center items-end text-3xl mt-[10vh]">
            Hi!
            <img src="hi-emoji.png" alt="Hi Emoji" className="w-12 mx-1" />
          </div>

          <span className="sr-only">
            Kawara Software Developers, full stack developers, Website, Web Shop, Web Application Development,
            Frontend and Backend development
          </span>
        </h1>

        <p className="sr-only">
          We are group of Software Developers who does all kind of software development. we do Full Stack
          development, Frontend as well as Backend like building Systems, Website, Web apps, Android and IOS
          applications, Performance maintenance, Fixing Websites, Updating and Editing websites and a lot of
          other things.
        </p>

        <div className="text-center mt-5 ">
          <p className="">
            Welcome to Kawara, where innovation meets execution. We are a leading software development company
            dedicated to crafting digital solutions that drive success for businesses of all sizes. With a
            team of talented developers, designers, and strategists, we specialize in creating cutting-edge
            software tailored to your unique needs.
          </p>
          <p>
            We offer a wide range of software development services to help you stay ahead in the digital age.
          </p>
          <p>We build bespoke software solutions that align perfectly with your business goals.</p>
          <span className="">Feel free to take a look at some of our work on</span>
          <a className=" link" href="#projects">
            Projects
          </a>
          <span className="">page.</span>
          <br />
          <span className="">Ready to transform your ideas into reality? then Contact us at </span>
          <a className=" link" href="mailto:info@kawaraa.com?Subject=Hello%20again">
            info@kawaraa.com
          </a>
        </div>
      </section>

      <div id="social-media-wrapper">
        <a href="https://www.linkedin.com/in/kawaraa" target="_blank" className="l">
          <img src="media/linkedin.png" loading="lazy" alt="Linkedin logo" className="social-media" />
        </a>
        <a href="https://www.facebook.com/kawaraa1" target="_blank" className="f">
          <img src="media/facebook.png" alt="Facebook logo" className="social-media" />
        </a>
        <a href="https://github.com/kawaraa" target="_blank" className="g">
          <img src="media/github-logo.png" loading="lazy" alt="GitHub" className="social-media" />
        </a>
      </div>
    </main>
  );
}

export function generateMetadata({ params: { lang } }) {
  return { alternates: { canonical: lang == "en" ? "/" : "/ar" } };
}
