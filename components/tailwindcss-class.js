const delays = ["delay-75", "delay-100", "delay-150", "delay-200"];

export const pageCls = "min-h-screen mx-3 md:mx-5 pt-16 pb-28 max-w-screen-2xl";
export const h1Cls = "text-4xl mb-3";
export const h2Cls = "text-2xl mb-5 mt-3";
export const cardBgCls = "bg-cbg dark:bg-dcbg rounded-md shadow-lg";
export const bCls = "border border-neutral-200 dark:border-neutral-700";
export const bHrFsCls = "hover:border-blue-500 focus:border-blue-500 active:border-blue-500";
export const btnCls = `relative inline-flex items-center justify-center rounded-full bg-pc hover:bg-sc p-3 tracking-wide text-white disabled:opacity-60 disabled:hover:bg-pc disabled:cursor-not-allowed duration-300`;
export const linkCls = "text-sc hover:text-pc visited:text-pc";
export const disabledLinkCls = "cursor-not-allowed disabled:opacity-60 hover:opacity-60";
export const skeletonCls = "animate-pulse rounded bg-neutral-200 dark:bg-neutral-700";
export const lazyCls = "off-view linear !duration-1000";
export const getLazyCls = () => `${lazyCls} ${delays[Math.floor(Math.random() * 4)]}`;

export function getCssDelay(time = 1) {
  return { animationDelay: ((Math.random() + time) * 600).toFixed() + "ms" };
}
