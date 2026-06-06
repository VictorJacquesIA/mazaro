// carousel.js — carrossel infinito GSAP + pointer drag
import { gsap } from "gsap";

export function initCarousels() {
  if (window.matchMedia("(min-width: 769px)").matches) return;
  initValueCarousel();
}

function initValueCarousel() {
  const carousel = document.querySelector(".value-carousel");
  const track    = carousel && carousel.querySelector(".value__grid");
  if (!carousel || !track) return;

  // ── Clonar cards: [clone | original | clone] ──────────────────────────────
  const originals = Array.from(track.children);
  const n = originals.length;

  originals.forEach(c => {
    const cl = c.cloneNode(true);
    cl.setAttribute("aria-hidden", "true");
    track.insertBefore(cl, track.firstChild);
  });
  originals.forEach(c => {
    const cl = c.cloneNode(true);
    cl.setAttribute("aria-hidden", "true");
    track.appendChild(cl);
  });

  // ── Dots ──────────────────────────────────────────────────────────────────
  const dots = Array.from(carousel.parentElement.querySelectorAll(".value-carousel__dot"));

  function updateDot() {
    if (!dots.length) return;
    const cw  = cardW();
    const cur = Math.abs(gsap.getProperty(track, "x"));
    const sw  = setW();
    // posição relativa dentro do set central
    const rel = ((cur - sw) % sw + sw) % sw;
    const idx = Math.round(rel / cw) % n;
    dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
  }

  // ── Medidas ────────────────────────────────────────────────────────────────
  const gap      = () => parseFloat(getComputedStyle(track).gap) || 24;
  const cardW    = () => track.children[0].offsetWidth + gap();
  const setW     = () => cardW() * n;

  // Começa no set central
  let x = -setW();
  gsap.set(track, { x });

  // ── Infinite loop ──────────────────────────────────────────────────────────
  function clamp() {
    const sw = setW();
    const cur = gsap.getProperty(track, "x");
    if (cur <= -sw * 2) { x += sw; gsap.set(track, { x }); }
    else if (cur >= 0)  { x -= sw; gsap.set(track, { x }); }
    updateDot();
  }

  // ── Snap ao card mais próximo ──────────────────────────────────────────────
  function snapTo() {
    const cw = cardW();
    const snapped = Math.round(x / cw) * cw;
    gsap.to(track, {
      x: snapped,
      duration: 0.5,
      ease: "power3.out",
      onUpdate: clamp,
      onComplete: () => { x = gsap.getProperty(track, "x"); clamp(); }
    });
    x = snapped;
  }

  // ── Drag state ─────────────────────────────────────────────────────────────
  let dragging  = false;
  let startPtr  = 0;
  let startX    = 0;
  let velX      = 0;
  let lastPtr   = 0;
  let lastTime  = 0;

  function onStart(px) {
    dragging = true;
    startPtr = px;
    startX   = x;
    velX     = 0;
    lastPtr  = px;
    lastTime = Date.now();
    gsap.killTweensOf(track);
    carousel.classList.add("is-dragging");
  }

  function onMove(px) {
    if (!dragging) return;
    const now = Date.now();
    const dt  = Math.max(now - lastTime, 1);
    velX      = ((px - lastPtr) / dt) * 14;
    lastPtr   = px;
    lastTime  = now;
    x = startX + (px - startPtr);
    gsap.set(track, { x });
    clamp();
    updateDot();
  }

  function onEnd() {
    if (!dragging) return;
    dragging = false;
    carousel.classList.remove("is-dragging");

    // Momentum suave antes do snap
    const momentum = velX * 6;
    x += momentum;
    gsap.to(track, {
      x,
      duration: 0.35,
      ease: "power2.out",
      onUpdate: clamp,
      onComplete: snapTo
    });
  }

  // ── Mouse ──────────────────────────────────────────────────────────────────
  carousel.addEventListener("mousedown",  e => { e.preventDefault(); onStart(e.clientX); });
  window .addEventListener("mousemove",  e => onMove(e.clientX));
  window .addEventListener("mouseup",    onEnd);

  // ── Touch — detecta direção antes de bloquear scroll vertical ─────────────
  let touchStartX = 0;
  let touchStartY = 0;
  let isHorizontal = null;

  carousel.addEventListener("touchstart", e => {
    touchStartX  = e.touches[0].clientX;
    touchStartY  = e.touches[0].clientY;
    isHorizontal = null;
    onStart(touchStartX);
  }, { passive: true });

  carousel.addEventListener("touchmove", e => {
    const dx = Math.abs(e.touches[0].clientX - touchStartX);
    const dy = Math.abs(e.touches[0].clientY - touchStartY);

    if (isHorizontal === null) {
      isHorizontal = dx > dy;
    }

    if (isHorizontal) {
      e.preventDefault(); // bloqueia scroll da página apenas no arrasto horizontal
      onMove(e.touches[0].clientX);
    }
  }, { passive: false });

  carousel.addEventListener("touchend", () => {
    if (isHorizontal) onEnd();
    isHorizontal = null;
  }, { passive: true });
}
