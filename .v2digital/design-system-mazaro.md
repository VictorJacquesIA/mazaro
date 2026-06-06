# Design System — Mazaro

> Gerado pela V2 Digital em 02/06/2026
> Referência de estilo: Mastercard
> Adaptado para: boutique digital de bolsas femininas — Imbituba, SC

---

## 1. FILOSOFIA VISUAL

**Estilo base:** Mastercard — canvas putty-cream premium, editorial quente, hierarquia tipográfica refinada, acento emocional único.

**Adaptação:** Substituímos o laranja sinal do Mastercard pelo Caramelo Mazaro `#B77A48` como acento emocional e comercial. O canvas putty-cream evolui para o Off White `#F8F4EE` do brand book. A estrutura editorial e a temperatura quente da referência se mantêm intactas — o resultado é uma boutique digital que parece um relatório anual de moda feminina acessível.

**Princípio central:** _Sofisticação que acolhe — elegante o bastante para gerar desejo, clara o bastante para gerar confiança, próxima o bastante para gerar compra._

**O que este design deve transmitir:**
- Elegância calma e acessível — não grife, não popular
- Confiança consultiva — "aqui você não compra no escuro"
- Feminilidade adulta — para a rotina real, não para a passarela

**O que este design nunca deve transmitir:**
- Promoção ou urgência agressiva — sem countdowns, sem "CORRE"
- Luxo artificial — sem excesso de dourado, coroas ou ornamentos
- Frieza ou distância — a marca é próxima, nunca arrogante

---

## 2. PALETA DE CORES

```css
:root {
  /* ── FUNDOS ── */
  --color-bg-primary:    #F8F4EE;   /* Off White — fundo principal, 60% */
  --color-bg-secondary:  #E8D8C8;   /* Nude Soft — superfícies de apoio, 20% */
  --color-bg-elevated:   #F0EAE0;   /* Off White levemente aquecido — cards */
  --color-bg-border:     #DDD0BF;   /* Borda sutil entre Off White e Nude */

  /* ── ACENTO PRINCIPAL ── */
  --color-accent:        #B77A48;   /* Caramelo Mazaro — CTA, destaques, 7% */
  --color-accent-hover:  #9A6438;   /* 15% mais escuro para hover */
  --color-accent-muted:  #B77A4818; /* Caramelo com 9% opacidade — badges */
  --color-accent-glow:   #B77A4835; /* Caramelo com 21% opacidade — glow sutil */

  /* ── ACENTO SECUNDÁRIO ── */
  --color-accent-2:      #D7B98E;   /* Champagne — acentos sutis, detalhes premium */

  /* ── TEXTO ── */
  --color-text-primary:  #3B2A22;   /* Marrom Café — texto principal e estrutura */
  --color-text-secondary:#8C837A;   /* Cinza Quente — textos de apoio e legendas */
  --color-text-muted:    #B0A59A;   /* Nude escurecido — placeholders, micro-texto */

  /* ── FEEDBACK ── */
  --color-success:       #5F6247;   /* Oliva Profundo — confirmações, entregas */
  --color-warning:       #D7B98E;   /* Champagne — alertas suaves */
  --color-error:         #6E2F36;   /* Vinho Elegante — erros, atenção */

  /* ── GRADIENTES ── */
  --gradient-accent:  linear-gradient(135deg, #B77A48 0%, #9A6438 100%);
  --gradient-hero:    linear-gradient(180deg, #F8F4EE 0%, #E8D8C8 100%);
  --gradient-subtle:  linear-gradient(135deg, #F8F4EE 0%, #F0EAE0 100%);
  --gradient-dark:    linear-gradient(135deg, #3B2A22 0%, #2A1D15 100%);
}
```

**Modo:** Light — paleta exclusivamente clara, tons terrosos e neutros quentes.

**Resumo da paleta:**

| Papel | Nome | HEX |
|-------|------|-----|
| Fundo principal | Off White | `#F8F4EE` |
| Fundo cards | Off White aquecido | `#F0EAE0` |
| Superfície de apoio | Nude Soft | `#E8D8C8` |
| Acento / CTA | Caramelo Mazaro | `#B77A48` |
| Detalhe premium | Champagne | `#D7B98E` |
| Texto principal | Marrom Café | `#3B2A22` |
| Texto secundário | Cinza Quente | `#8C837A` |

**Por que essa paleta:** Herda diretamente do brand book Mazaro Volume 01. A temperatura quente do Mastercard (putty-cream) é espelhada no Off White `#F8F4EE`. O Caramelo `#B77A48` substitui o laranja sinal da referência com a mesma função emocional e comercial — cor de couro, calor, desejo — perfeita para uma boutique de bolsas femininas.

---

## 3. TIPOGRAFIA

**Família principal (display / desejo):** Cormorant Garamond
**Família secundária (UI / clareza):** Manrope
**Por que essas fontes:** Definidas no brand book Mazaro. Cormorant gera desejo e feminilidade editorial — serifada com presença. Manrope gera clareza e confiança — sans-serif limpa e moderna. Nunca inverter os papéis.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-ui:      'Manrope', system-ui, sans-serif;

  /* Escala responsiva */
  --font-size-hero: clamp(2.5rem, 6vw, 4.5rem);   /* 40–72px — Cormorant */
  --font-size-h1:   clamp(2rem,   4vw, 3.5rem);   /* 32–56px — Cormorant */
  --font-size-h2:   clamp(1.5rem, 3vw, 2.75rem);  /* 24–44px — Cormorant */
  --font-size-h3:   clamp(1rem,   2vw, 1.5rem);   /* 16–24px — Manrope Semibold */
  --font-size-body: 1rem;                          /* 16px — Manrope Regular */
  --font-size-sm:   0.9375rem;                     /* 15px */
  --font-size-xs:   0.8125rem;                     /* 13px — micro-texto */

  --font-weight-light:    300;
  --font-weight-regular:  400;
  --font-weight-medium:   500;
  --font-weight-semibold: 600;
  --font-weight-bold:     700;

  --leading-tight:   1.1;   /* headlines Cormorant */
  --leading-snug:    1.3;   /* subtítulos */
  --leading-normal:  1.65;  /* corpo Manrope */
  --leading-relaxed: 1.8;   /* textos longos */

  --tracking-tight:  -0.02em;  /* headlines grandes */
  --tracking-normal:  0;
  --tracking-wide:    0.05em;  /* H3 Manrope */
  --tracking-wider:   0.12em;  /* micro-texto uppercase */
}
```

**Hierarquia de uso:**

| Nível | Fonte | Peso | Uso |
|-------|-------|------|-----|
| Hero | Cormorant Garamond | Semibold 600 | Headline principal do hero |
| H1 | Cormorant Garamond | Semibold 600 | Títulos de seção — desejo |
| H2 | Cormorant Garamond | Medium 500 | Subtítulos editoriais |
| H3 | Manrope | Semibold 600 | Títulos de card, categorias |
| Corpo | Manrope | Regular 400 | Descrições, textos consultivos |
| CTA | Manrope | Semibold 600 | Botões e chamadas para ação |
| Micro | Manrope | Medium 500 | Tags de ocasião, selos, legendas |

---

## 4. ESPAÇAMENTO

Sistema em múltiplos de 8px — conforme brand book Mazaro.

```css
:root {
  --space-1:  0.25rem;   /*  4px — micro */
  --space-2:  0.5rem;    /*  8px — pequeno */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px — elementos */
  --space-5:  1.25rem;   /* 20px */
  --space-6:  1.5rem;    /* 24px — médio */
  --space-8:  2rem;      /* 32px — blocos */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px — seções internas */
  --space-16: 4rem;      /* 64px — áreas nobres */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px — seções principais */
  --space-32: 8rem;      /* 128px — hero & banners */

  --section-padding-y:   var(--space-24);   /* 96px entre seções */
  --container-max:       1200px;
  --container-padding-x: var(--space-6);    /* 24px lateral */
  --card-padding:        var(--space-8);    /* 32px interno nos cards */
  --gap-cards:           var(--space-6);    /* 24px entre cards */
}
```

---

## 5. BORDAS E FORMAS

```css
:root {
  --radius-xs:   4px;    /* inputs — sharp, não infantil */
  --radius-sm:   8px;    /* botões */
  --radius-md:   12px;
  --radius-lg:   16px;   /* cards de produto */
  --radius-xl:   24px;   /* cards acolhedores, hero sections */
  --radius-2xl:  32px;
  --radius-full: 9999px; /* badges / tags de ocasião */
}
```

**Estilo de forma:** Misto — levemente geométrico com toques orgânicos nos elementos acolhedores.

**Justificativa:** Cards de produto em `radius-lg` (16px) e badges de ocasião em `radius-full` seguem o brand book. Evitar `radius-2xl` em botões ou inputs — a marca pede sofisticação, não formas pílula infantis.

---

## 6. SOMBRAS

Sombras em tom terroso quente — nunca azul-cinza frio, alinhado à temperatura da paleta.

```css
:root {
  --shadow-xs:     0 1px  3px rgba(59, 42, 34, 0.06);
  --shadow-sm:     0 2px  8px rgba(59, 42, 34, 0.08);
  --shadow-md:     0 4px 16px rgba(59, 42, 34, 0.10);
  --shadow-lg:     0 8px 32px rgba(59, 42, 34, 0.12);
  --shadow-glow:   0 8px 32px rgba(183, 122, 72, 0.20);  /* Caramelo glow — hover CTA */
  --shadow-glow-sm:0 4px 16px rgba(183, 122, 72, 0.15);
  --shadow-button: 0 2px  8px rgba(183, 122, 72, 0.30);  /* Sombra dos botões primários */
}
```

---

## 7. ANIMAÇÕES

```css
:root {
  --duration-instant: 100ms;
  --duration-fast:    150ms;
  --duration-base:    300ms;
  --duration-slow:    500ms;
  --duration-slower:  800ms;

  --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);     /* entrada de elementos */
  --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);    /* transições suaves */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* micro-interações hover */
  --ease-linear: linear;
}
```

**Intensidade:** Sutil — movimento com propósito, nunca decorativo.

**Justificativa:** A persona Mariana (35 anos, analista sênior) aprecia elegância calma. Animações exageradas comunicam promoção — o oposto do posicionamento Mazaro.

**Regras específicas deste projeto:**
- Fade-in com `translateY(12px → 0)` em elementos ao entrar na viewport — entrada suave, não abrupta
- Hover em cards de produto: `translateY(-4px)` + `shadow-md` em `300ms ease-out`
- Hover em botão primário: `translateY(-2px)` + `shadow-glow` + `brightness(1.08)`
- Nunca usar `bounce`, `shake`, `flash` ou qualquer animação de urgência
- Imagens de produto: zoom lento `scale(1 → 1.03)` em `500ms` no hover do card

---

## 8. COMPONENTES — PADRÃO VISUAL

### Botão primário (CTA principal)
```css
background:    var(--gradient-accent);    /* Caramelo gradient */
color:         #F8F4EE;                   /* Off White — não branco puro */
padding:       var(--space-4) var(--space-8);
border-radius: var(--radius-sm);          /* 8px — elegante, não pílula */
font-family:   var(--font-ui);
font-weight:   var(--font-weight-semibold);
font-size:     var(--font-size-sm);
letter-spacing:var(--tracking-wide);
box-shadow:    var(--shadow-button);
/* hover: translateY(-2px) + shadow-glow + brightness(1.08) */
```

### Botão secundário (outline)
```css
background:    transparent;
border:        1px solid var(--color-bg-border);
color:         var(--color-text-primary);
padding:       var(--space-4) var(--space-8);
border-radius: var(--radius-sm);
font-family:   var(--font-ui);
font-weight:   var(--font-weight-semibold);
/* hover: border-color: var(--color-accent), color: var(--color-accent) */
```

### Card de produto
```css
background:    var(--color-bg-elevated);
border:        1px solid var(--color-bg-border);
border-radius: var(--radius-lg);           /* 16px */
overflow:      hidden;
box-shadow:    var(--shadow-sm);
/* hover: shadow-md + translateY(-4px) + border-color: var(--color-accent-glow) */
/* imagem interna: scale(1.03) em 500ms */
```

### Tag de ocasião (micro-badge)
```css
background:    var(--color-accent-muted);
border:        1px solid var(--color-accent-glow);
color:         var(--color-accent);
border-radius: var(--radius-full);
padding:       var(--space-1) var(--space-3);
font-family:   var(--font-ui);
font-size:     var(--font-size-xs);
font-weight:   var(--font-weight-medium);
letter-spacing:var(--tracking-wider);
text-transform:uppercase;
```

### Linha fina separadora (sistema gráfico)
```css
border: none;
height: 1px;
background: var(--color-bg-border);
margin: var(--space-8) 0;
```

### Selo / Badge de curadoria
```css
border:        1px solid var(--color-bg-border);
border-radius: var(--radius-full);
padding:       var(--space-2) var(--space-4);
font-family:   var(--font-ui);
font-size:     var(--font-size-xs);
font-weight:   var(--font-weight-medium);
letter-spacing:var(--tracking-wider);
color:         var(--color-text-secondary);
text-transform:uppercase;
/* Ex: "ENTREGA PARA TODO O BRASIL" · "MODELOS SELECIONADOS COM CRITÉRIO" */
```

---

## 9. IMAGENS E MÍDIA

- **Fotos:** sempre `.webp` — máx 200kb hero, 100kb cards de produto
- **Logos e ícones:** sempre `.svg`
- **Transparência:** `.png` apenas quando sem versão `.svg`
- **Tratamento de foto:** sem filtro — luz natural, tons quentes, fundo claro. Temperatura consistente entre todas as fotos.
- **Proporção hero:** 4:5 (retrato) em mobile · 16:9 ou split 50/50 em desktop
- **Proporção cards:** 4:5 fixo para todos os cards de produto (consistência editorial)
- **Bordas em imagens:** `radius-lg` (16px) nos cards · sem borda no hero
- **Cenas obrigatórias por produto:** bolsa no corpo + close de acabamento + interior aberto
- **Nunca usar:** fotos escuras, inconsistentes em temperatura ou com fundo colorido

---

## 10. REGRAS INVIOLÁVEIS DESTE PROJETO

- **Nunca** usar cores fora das definidas neste arquivo — especialmente pink neon, amarelo vibrante, roxo, azul tecnológico
- **Nunca** usar fontes fora do par Cormorant Garamond + Manrope
- **Nunca** inverter o papel das fontes — Cormorant é desejo (H1/H2), Manrope é clareza (H3/corpo/CTA)
- **Nunca** usar valores de espaçamento fora da escala de múltiplos de 8px
- **Nunca** adicionar brilhos, coroas, diamantes, borboletas, flores genéricas ou excesso de dourado
- **Nunca** usar sombras azul-frias — todas as sombras usam base `rgba(59, 42, 34, ...)` (Marrom Café)
- **Nunca** criar sensação de urgência de promoção — sem contadores, sem "CORRE", sem "ÚLTIMA UNIDADE" em destaque
- **Sempre** validar com a pergunta-guia do brand book: _"Isso comunica elegância acessível para uma mulher real?"_
- **CTA principal** sempre aponta para o e-commerce InfinitePay — WhatsApp apenas como canal de apoio secundário
- **Textos** sempre no tom consultivo — consultora de estilo, não vendedora

---

> **Próximo passo:** usar este `design-system.md` junto ao `briefing.md` para desenvolver a landing page da Mazaro.
