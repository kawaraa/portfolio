export function getCssDelay(time) {
  return { animationDelay: ((Math.random() + time) * 600).toFixed() + "ms" };
}
