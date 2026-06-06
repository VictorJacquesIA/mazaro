// main.js — Mazaro LP — ponto de entrada
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initScroll } from "./scroll.js";
import { initAnimations } from "./animations.js";
import { initEffects } from "./effects.js";
import { initForms } from "./forms.js";
import { initTracking } from "./tracking.js";
import { initCarousels } from "./carousel.js";

// Registrar plugins — apenas aqui, nunca nos outros arquivos
gsap.registerPlugin(ScrollTrigger);

// Expor gsap globalmente para o scroll.js (usa gsap.ticker sem importar)
window.gsap = gsap;

document.addEventListener("DOMContentLoaded", () => {
  // Ordem obrigatória: scroll primeiro
  initScroll();
  initAnimations();
  initCarousels();
  initEffects();
  initForms();
  initTracking();
});
