// scroll.js — Mazaro LP
// gsap.registerPlugin está no main.js
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenis;

export function initScroll() {
  lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

export function getLenis() {
  return lenis;
}

export function scrollTo(target, offset = 0) {
  lenis.scrollTo(target, { offset });
}
