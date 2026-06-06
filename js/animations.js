// animations.js — Mazaro LP
// registerPlugin está no main.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initAnimations() {
  initHero();
  // initValue();       // ← descomentar quando a seção estiver pronta
  // initVitrine();
  // initGuide();
  // initAbout();
  // initTrust();
  // initCtaFinal();
  // initFooter();

  initParallax();
  initTextReveal();
  initSections();
  initHeader();
}

// ─── HEADER ──────────────────────────────────────────────────────────────────

function initHeader() {
  // Header aparece ao fazer scroll para baixo, esconde ao subir
  let lastY = 0;

  ScrollTrigger.create({
    start: "top -80",
    onUpdate: (self) => {
      const header = document.querySelector(".header");
      if (!header) return;

      if (self.direction === 1 && window.scrollY > 80) {
        header.classList.add("header--scrolled");
      } else if (self.direction === -1) {
        header.classList.remove("header--scrolled");
      }
    },
  });
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function initHero() {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    delay: 0.2,
  });

  tl.fromTo(".hero__badge",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 }
  )
  .fromTo(".hero__title",
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    "-=0.3"
  )
  .fromTo(".hero__subtitle",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    "-=0.4"
  )
  .fromTo(".hero__actions",
    { y: 20, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.6 },
    "-=0.3"
  )
  .fromTo(".hero__image",
    { x: 40, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 },
    "-=0.8"
  );

  // Conteúdo do hero sai com parallax ao scrollar — apenas desktop
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (!isMobile) {
    gsap.to(".hero__content", {
      y: -100,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }
}

// ─── SEÇÕES — ENTRADA COMO CENA ──────────────────────────────────────────────

function initSections() {
  gsap.utils.toArray("[data-scene]").forEach((section) => {
    const elements = section.querySelectorAll("[data-scene-element]");

    gsap.fromTo(elements,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      }
    );
  });
}

// ─── PARALLAX ────────────────────────────────────────────────────────────────

function initParallax() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isMobile || prefersReduced) return;

  gsap.utils.toArray("[data-parallax-speed]").forEach((el) => {
    const speed = parseFloat(el.dataset.parallaxSpeed) || 0.5;

    gsap.to(el, {
      y: () => el.offsetHeight * speed * -1,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("section") || el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  gsap.utils.toArray("[data-parallax-text]").forEach((el) => {
    gsap.fromTo(el,
      { y: "15vh" },
      {
        y: "-15vh",
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("section") || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}

// ─── TEXT REVEAL — PALAVRA POR PALAVRA ───────────────────────────────────────

function initTextReveal() {
  // Fade simples em todos os casos — preserva text-align correto
  gsap.utils.toArray("[data-text-reveal]").forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    );
  });
}
