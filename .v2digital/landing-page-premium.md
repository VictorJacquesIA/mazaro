# Landing Page Premium — V2 Digital
## Versão Cinematográfica | Scroll Storytelling

> Este arquivo é um **extensão** do `landing-page-base.md`.
> Todas as regras base continuam valendo.
> Leia obrigatoriamente na ordem:
> 1. `landing-page-base.md`
> 2. `.v2digital/design-system.md`
> 3. `.v2digital/briefing.md`
> 4. Este arquivo

---

## 1. FILOSOFIA CINEMATOGRÁFICA

Nesta versão, a landing page não é uma página — é uma **sequência de cenas**.
O scroll é o controle do tempo. Cada seção é um ato. O usuário é o diretor.

**Princípios:**
- Cada seção entra como uma cena nova — nunca aparece de golpe
- Elementos têm profundidade — camadas que se movem em velocidades diferentes
- O texto conta a história — revela palavras, linhas e parágrafos em sequência
- Transições entre seções são suaves e intencionais
- O fundo reage ao scroll — não é estático

**Quando usar esta versão:**
- Clientes que querem impressionar e diferenciar
- Produtos ou serviços de alto ticket
- Marcas que têm identidade visual forte
- Projetos com prazo adequado (não usar para entregas rápidas)

---

## 2. STACK PREMIUM

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Build tool | Vite | ^5.x |
| CSS | Modular + BEM + CSS Variables | — |
| Animações | GSAP + ScrollTrigger | ^3.x |
| Smooth scroll | Lenis | ^1.1+ |
| Deploy | Vercel | — |

```bash
npm install gsap lenis
```

---

## 3. ESTRUTURA DE PASTAS

Herda do `landing-page-base.md` com estas adições:

```
/projeto-cliente
├── index.html
├── /styles
│   ├── variables.css
│   ├── reset.css
│   ├── utilities.css
│   ├── header.css
│   ├── hero.css
│   ├── sections.css
│   ├── forms.css
│   ├── animations.css       ← animações CSS de suporte
│   ├── cinematic.css        ← [NOVO] efeitos visuais cinematográficos
│   ├── responsive.css
│   └── footer.css
├── /js
│   ├── main.js
│   ├── scroll.js            ← [NOVO] configuração do Lenis
│   ├── animations.js        ← cenas GSAP + ScrollTrigger
│   ├── effects.js           ← [NOVO] efeitos visuais (aurora, partículas CSS)
│   ├── forms.js
│   └── tracking.js
├── /assets
│   ├── /images
│   ├── /icons
│   └── /fonts
├── CLAUDE.md
├── .v2digital/
│   ├── design-system.md
│   └── briefing.md
├── package.json
├── vercel.json
└── .env.example
```

---

## 4. LENIS — SMOOTH SCROLL

### scroll.js — configuração e integração com GSAP

> ⚠️ Remover `scroll-behavior: smooth` do `reset.css` — conflita com o Lenis.

```js
// scroll.js
// Não importar gsap/ScrollTrigger aqui — registerPlugin está no main.js
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenis;

export function initScroll() {
  lenis = new Lenis({
    duration: 1.4,           // suavidade do scroll (1.2–1.6 é o range premium)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease out
    orientation: "vertical",
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  // Integração Lenis + GSAP ScrollTrigger (obrigatório)
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

export function getLenis() {
  return lenis;
}

// Scroll suave para âncora — usar em links de navegação
export function scrollTo(target, offset = 0) {
  lenis.scrollTo(target, { offset });
}
```

### Regras do Lenis

- Sempre integrar com `ScrollTrigger` via `lenis.on("scroll", ScrollTrigger.update)`
- `duration` entre 1.2 e 1.6 — abaixo parece comum, acima parece lento demais
- Nunca usar `window.scrollTo()` após inicializar Lenis — usar `lenis.scrollTo()`
- Links âncora do header sempre via `scrollTo()` do Lenis

---

## 5. GSAP — ARQUITETURA DE CENAS

### Conceito de cena

Cada seção da landing page é uma cena com três momentos:

```
ANTES         → elemento fora de vista ou em estado inicial
DURANTE       → ScrollTrigger scrub — animação acontece enquanto scrolla
DEPOIS        → elemento no estado final, fixo
```

### animations.js — estrutura completa

```js
// animations.js
// Não registrar plugins aqui — feito no main.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initAnimations() {
  initHero();
  // initProblem();     ← descomentar quando a seção estiver pronta
  // initServices();
  // initHowItWorks();
  // initResults();
  // initTestimonials();
  // initFaq();
  // initCtaFinal();
  // initFooter();

  // Funções globais — inicializar sempre
  initParallax();
  initTextReveal();
}

// initPinned() é chamado separadamente via initEffects() apenas se necessário

// ─── HERO ────────────────────────────────────────────────────────────────────

function initHero() {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" }
  });

  // Entrada sequencial dos elementos do hero
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
  .fromTo(".hero__cta",
    { y: 20, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.6 },
    "-=0.3"
  );

  // Hero sai da cena ao scrollar — parallax de saída
  gsap.to(".hero__content", {
    y: -120,
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

// ─── SEÇÕES — ENTRADA COMO CENA ──────────────────────────────────────────────

function initSections() {
  // Cada seção com data-scene entra como uma cena
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
  // Parallax em imagens de fundo — data-parallax-speed="0.5"
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

  // Parallax em texto de fundo (gigante, decorativo)
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

// ─── TEXT REVEAL — LINHA POR LINHA ───────────────────────────────────────────

function initTextReveal() {
  // Aplica em elementos com data-text-reveal
  // O texto deve estar dividido em <span class="line"> pelo HTML ou pelo JS abaixo
  gsap.utils.toArray("[data-text-reveal]").forEach((el) => {
    // Divide o texto em linhas automaticamente
    const text = el.textContent;
    const words = text.split(" ");
    el.innerHTML = words
      .map(word => `<span class="word"><span class="word__inner">${word}</span></span>`)
      .join(" ");

    const wordInners = el.querySelectorAll(".word__inner");

    gsap.fromTo(wordInners,
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );
  });
}

// ─── PINNED — SEÇÃO FIXADA DURANTE O SCROLL ──────────────────────────────────

function initPinned() {
  // Seção que fica fixada enquanto o conteúdo interno anima
  // Usar em seções com data-pin
  gsap.utils.toArray("[data-pin]").forEach((section) => {
    const items = section.querySelectorAll("[data-pin-item]");

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${items.length * 100}vh`,
      pin: true,
      anticipatePin: 1,
    });

    items.forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: () => `top+=${i * 100}vh top`,
            end: () => `top+=${(i + 1) * 100}vh top`,
            scrub: 0.5,
          },
        }
      );
    });
  });
}
```

---

## 6. EFEITOS VISUAIS (CSS) — cinematic.css

```css
/* cinematic.css */

/* ── Aurora de fundo ── */
.aurora {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.aurora__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: aurora-breathe 8s ease-in-out infinite alternate;
}

.aurora__orb--1 {
  width: 60vw;
  height: 60vw;
  top: -20%;
  left: -10%;
  background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
  opacity: 0.15;
}

.aurora__orb--2 {
  width: 40vw;
  height: 40vw;
  bottom: -10%;
  right: -5%;
  background: radial-gradient(circle, var(--color-accent-2, var(--color-accent)) 0%, transparent 70%);
  opacity: 0.1;
  animation-delay: -4s;
}

@keyframes aurora-breathe {
  from { transform: scale(1) translate(0, 0); }
  to   { transform: scale(1.15) translate(2%, 3%); }
}

/* ── Grade de fundo ── */
.bg-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, color-mix(in srgb, var(--color-text-primary) 4%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in srgb, var(--color-text-primary) 4%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
}

/* ── Texto gigante de fundo ── */
.bg-text {
  font-size: clamp(8rem, 20vw, 22rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 0.85;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in srgb, var(--color-text-primary) 6%, transparent);
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
}

/* ── Word reveal — suporte ao text reveal ── */
.word {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
}

.word__inner {
  display: inline-block;
}

/* ── Glass card ── */
.glass-card {
  background: color-mix(in srgb, var(--color-bg-elevated) 60%, transparent);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid color-mix(in srgb, var(--color-text-primary) 8%, transparent);
  border-radius: var(--radius-xl);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-card:hover {
  border-color: color-mix(in srgb, var(--color-accent) 30%, transparent);
  box-shadow: 0 20px 40px -10px color-mix(in srgb, var(--color-accent) 15%, transparent);
  transform: translateY(-4px);
}

/* ── Marquee ── */
.marquee {
  overflow: hidden;
  width: 100%;
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 40s linear infinite;
}

.marquee__track:hover {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ── Magnetic button — suporte JS ── */
.magnetic {
  display: inline-flex;
  transform-style: preserve-3d;
  will-change: transform;
}
```

---

## 7. EFEITOS VISUAIS (JS) — effects.js

```js
// effects.js
import { gsap } from "gsap";

export function initEffects() {
  initMagnetic();
  initCursorGlow();
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

// ─── CURSOR GLOW (opcional — ativar se design-system permitir) ────────────────

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
```

---

## 8. MAIN.JS — INICIALIZAÇÃO PREMIUM

```js
// main.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initScroll } from "./scroll.js";
import { initAnimations } from "./animations.js";
import { initEffects } from "./effects.js";
import { initForms } from "./forms.js";
import { initTracking } from "./tracking.js";

// Registrar plugins uma única vez — aqui, nunca nos outros arquivos
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Ordem obrigatória: scroll primeiro, depois tudo que depende dele
  initScroll();
  initAnimations();
  initEffects();
  initForms();
  initTracking();
});
```

> ⚠️ `gsap.registerPlugin(ScrollTrigger)` deve estar **apenas no `main.js`**.
> Remover qualquer chamada a `registerPlugin` nos outros arquivos.

---

## 9. HTML — ATRIBUTOS DE DADOS

Referência rápida de todos os atributos usados nesta versão:

| Atributo | Onde usar | Efeito |
|----------|-----------|--------|
| `data-scene` | `<section>` | Marca a seção como uma cena |
| `data-scene-element` | Elementos dentro da cena | Entram em stagger ao revelar a cena |
| `data-parallax-speed="0.5"` | Imagens, fundos | Parallax com velocidade relativa (0.3–0.8) |
| `data-parallax-text` | Texto decorativo de fundo | Parallax vertical invertido |
| `data-text-reveal` | `<h1>`, `<h2>`, `<p>` | Reveal palavra por palavra |
| `data-pin` | `<section>` | Seção fica fixada durante scroll |
| `data-pin-item` | Itens dentro da seção pinada | Revelados em sequência |
| `data-magnetic` | Botões e CTAs | Efeito magnético ao hover |
| `data-cursor-glow` | Elemento de glow do cursor | Segue o cursor (1 por página) |
| `data-animate` | Qualquer elemento | Fade in simples (herança do base) |
| `data-animate-group` | Container | Stagger nos filhos (herança do base) |

---

## 10. PACKAGE.JSON

```json
{
  "name": "[nome-projeto]",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "gsap": "^3.x",
    "lenis": "^1.x"
  },
  "devDependencies": {
    "vite": "^5.x"
  }
}
```

---

## 11. FLUXO DE DESENVOLVIMENTO PREMIUM

### Regra principal: uma seção por vez

**Nunca desenvolver múltiplas seções simultaneamente.**
Cada seção deve estar 100% completa — HTML, CSS e animação — antes de iniciar a próxima.
Isso evita conflitos de ScrollTrigger, facilita debug e mantém o contexto claro.

### Ciclo por seção

Para cada seção, siga obrigatoriamente esta ordem:

```
[SEÇÃO X]
    ↓
1. HTML da seção — estrutura semântica + atributos data-*
    ↓
2. CSS da seção — layout, visual, responsivo
    ↓
3. Animação da seção — função isolada no animations.js
    ↓
4. Testar no browser antes de seguir
    ↓
[SEÇÃO X+1]
```

Nunca pular para a próxima seção sem testar a atual no browser.

### Ordem de implementação das seções

```
FASE 1 — BASE
├── reset.css — primeiro CSS a existir
├── variables.css — tokens do design-system.md
├── utilities.css + cinematic.css — utilitários e efeitos globais
└── scroll.js — Lenis + integração ScrollTrigger (após CSS estar pronto)

FASE 2 — SEÇÃO POR SEÇÃO (uma de cada vez)
├── 1. Header     → HTML → header.css → animação de entrada
├── 2. Hero       → HTML → hero.css → timeline de entrada + parallax de saída
├── 3. Problema   → HTML → sections.css → fade in por cena
├── 4. Serviços   → HTML → sections.css → stagger nos cards
├── 5. Como funciona → HTML → sections.css → pinned ou stagger
├── 6. Resultados → HTML → sections.css → contadores + reveal
├── 7. Depoimentos → HTML → sections.css → fade + marquee se necessário
├── 8. FAQ        → HTML → sections.css → accordion + fade
├── 9. CTA Final  → HTML → sections.css → reveal + magnetic no botão
└── 10. Footer    → HTML → footer.css → parallax de entrada

FASE 3 — EFEITOS GLOBAIS E FINALIZAÇÃO
├── effects.js — magnetic em todos os botões + cursor glow
├── tracking.js — eventos GTM e Meta Pixel (herdar do landing-page-base.md)
├── responsive.css — ajustes mobile
└── Desativar efeitos pesados em mobile (parallax, pinned, cursor glow)

FASE 4 — ENTREGA
├── Build + Lighthouse
└── Deploy Vercel
```

### Como estruturar o animations.js por seção

Cada seção tem sua própria função isolada — nunca misturar lógica de seções diferentes:

```js
// animations.js

export function initAnimations() {
  initHero();        // ← implementar junto com o HTML do Hero
  // initProblem();  // ← descomentar só quando a seção estiver pronta
  // initServices(); // ← idem
  // initHowItWorks();
  // initResults();
  // initTestimonials();
  // initFaq();
  // initCtaFinal();
  // initFooter();
}
```

Manter as funções comentadas e descomentar conforme cada seção for implementada.
Isso deixa claro o que está pronto e o que ainda não foi feito.

---

## 12. PERFORMANCE — CUIDADOS EXTRAS

Esta versão tem mais peso — aplicar obrigatoriamente:

- `will-change: transform` apenas em elementos que realmente animam
- Desativar parallax e efeitos 3D em mobile (`prefers-reduced-motion` e breakpoint)
- Lenis desabilitado em touch devices com scroll muito lento
- ScrollTrigger com `once: true` sempre que possível
- Nunca animar `width`, `height`, `top`, `left` — apenas `transform` e `opacity`
- Testar com DevTools Performance em CPU 4x slowdown antes de entregar

```js
// Desativar efeitos pesados em mobile
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!isMobile && !prefersReduced) {
  initParallax();
  initPinned();
  initCursorGlow();
}
```

---

## 13. NUNCA FAZER NESTA VERSÃO

Herda tudo do `landing-page-base.md` e adiciona:

- ❌ Chamar `gsap.registerPlugin()` fora do `main.js`
- ❌ Inicializar Lenis fora do `DOMContentLoaded`
- ❌ Inicializar animações antes do Lenis
- ❌ Usar `window.scrollTo()` após inicializar Lenis
- ❌ Parallax em mobile sem verificar performance
- ❌ `will-change: transform` em mais de 10 elementos simultaneamente
- ❌ Animar propriedades que causam reflow (width, height, top, left, margin)
- ❌ Efeito de cursor glow em touch devices
- ❌ Seções pinadas sem `anticipatePin: 1`
- ❌ Text reveal em parágrafos longos — apenas em headlines
- ❌ Desenvolver múltiplas seções ao mesmo tempo
- ❌ Escrever animação de uma seção antes de o HTML e CSS dela estarem prontos
- ❌ Avançar para a próxima seção sem testar a atual no browser
- ❌ Descomentar funções no `animations.js` antes de a seção estar implementada
