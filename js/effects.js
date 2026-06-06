// effects.js — Mazaro LP
import { gsap } from "gsap";

export function initEffects() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initMagnetic();

  if (!isMobile && !prefersReduced) {
    initCursorGlow();
  }
}

// ─── MAGNETIC BUTTON ─────────────────────────────────────────────────────────

function initMagnetic() {
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * 0.35,
        y: y * 0.35,
        rotationX: -y * 0.1,
        rotationY: x * 0.1,
        scale: 1.05,
        ease: "power2.out",
        duration: 0.4,
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        x: 0, y: 0,
        rotationX: 0, rotationY: 0,
        scale: 1,
        ease: "elastic.out(1, 0.3)",
        duration: 1.2,
      });
    });
  });
}

// ─── CURSOR GLOW ─────────────────────────────────────────────────────────────

function initCursorGlow() {
  const glow = document.querySelector("[data-cursor-glow]");
  if (!glow) return;

  window.addEventListener("mousemove", (e) => {
    gsap.to(glow, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.8,
      ease: "power2.out",
    });
  });
}
