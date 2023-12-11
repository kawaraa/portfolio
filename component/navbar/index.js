export default function Navbar({ lang }) {
  return (
    <nav className="sticky top-0 left-0 right-0 z-1 p-3 bg-bg flex items-center sm:justify-between">
      <a className="flex items-start " href="/en">
        <span className="w-7">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g className="layer" fill="none" stroke="currentColor" strokeWidth="30">
              <rect height="310" width="466" x="23" y="45.5" strokeLinejoin="round"></rect>
              <line x1="190" x2="190" y1="353.5" y2="460.5"></line>
              <line x1="311" x2="311" y1="353" y2="465"></line>
              <line strokeLinecap="round" x1="150" x2="351" y1="465.5" y2="465.5"></line>
              <path d="m182,249.5l-100,-48.5l101,-51" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="m320,150.5l100,50.5l-100,50" strokeLinecap="round" strokeLinejoin="round"></path>
              <line
                x1="280"
                x2="221"
                y1="120.5"
                y2="281.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></line>
            </g>
          </svg>
        </span>
        <span className="mx-3 tracking-[2px] text-2xl __className_489706">Kawara</span>
      </a>
      <div className="flex-auto"></div>
      <div className="hidden sm:flex gap-2">
        <a href="/en" className="hvr px-2 py-1">
          Home
        </a>
        <a href="/en/service" className="hvr px-2 py-1">
          Services
        </a>
        <a href="/en/work" className="hvr px-2 py-1">
          Work
        </a>
        <a href="/en/about" className="hvr px-2 py-1">
          About
        </a>
        <a href="/en/blog" className="hvr px-2 py-1">
          Blog
        </a>
      </div>
      <a href="/en/contact" className="bg-pc text-white mx-3 px-2 py-1 rounded-full ">
        Contact Us
      </a>
      <ul className="transition-all duration-200 ease-in-out sm:hidden fixed z-[1] bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black p-4 transition-all ease-in-out duration-300 translate-x-0">
        <li>
          <a href="/en" className="list-links px-2 py-1">
            Home
          </a>
        </li>
        <li>
          <a href="/en/service" className="list-links px-2 py-1">
            Services
          </a>
        </li>
        <li>
          <a href="/en/work" className="list-links px-2 py-1">
            Work
          </a>
        </li>
        <li>
          <a href="/en/about" className="list-links px-2 py-1">
            About
          </a>
        </li>
        <li>
          <a href="/en/blog" className="list-links px-2 py-1">
            Blog
          </a>
        </li>
      </ul>
      <div className="sm:hidden relative z-2 ml-3">
        <div className="relative bg-t w-[32px] h-[4px] my-[5px] rounded-full transition-all duration-300 -rotate-45 translate-x-[0px] translate-y-[10px]"></div>
        <div className="relative bg-t w-[32px] h-[4px] my-[5px] rounded-full transition-all duration-300 opacity-0"></div>
        <div className="relative bg-t w-[32px] h-[4px] my-[5px] rounded-full transition-all duration-300 rotate-45 translate-x-0 translate-y-[-8px]"></div>
      </div>
    </nav>
  );
}
