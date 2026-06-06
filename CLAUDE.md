# CLAUDE.md — {MAZARO BOLSAS} | {LANDING PAGE}

> Este arquivo é lido automaticamente pelo Claude Code ao abrir o projeto.
> Leia os arquivos abaixo na ordem indicada antes de qualquer tarefa.

---

## 1. LEITURA OBRIGATÓRIA — nesta ordem

1. `.v2digital/landing-page-premium.md` → regras de stack, estrutura, código e padrões técnicos
2. `.v2digital/briefing.md` → contexto do cliente, objetivo, CTA, seções e copy
3. `.v2digital/design-system.md` → identidade visual completa — cores, fontes, espaçamento, componentes

**Nunca escrever código sem ter lido os três arquivos.**

---

## 2. RESUMO DO PROJETO

| Campo | Informação |
|-------|-----------|
| Cliente | {MAZARO} |
| Segmento | {BOUTIQUE DIGITAL DE BOLSAS} |
| Tipo | {Landing page} |
| Versão | {Premium} |
| CTA principal | {E-COMMERCE} |
| Deploy | Vercel |

---

## 3. REGRAS INVIOLÁVEIS

- Nunca usar cores fora do `design-system.md`
- Nunca usar fontes fora do `design-system.md`
- Nunca criar seções fora da ordem definida no `briefing.md`
- Nunca instalar dependências não previstas no `landing-page-base.md`
- Desenvolver **uma seção por vez** — HTML → CSS → JS → testar → próxima
- Todo placeholder marcado com `{TODO: ...}`
- Nunca `console.log` no código final
- Número do WhatsApp e URLs sempre via `.env`

---

## 4. PRIMEIRA TAREFA

Ao abrir o projeto pela primeira vez, siga esta sequência **sem pular etapas**:

1. Ler os 3 arquivos em `.v2digital/` — obrigatório antes de qualquer código
2. Inicializar: `npm create vite@latest . -- --template vanilla`
3. Instalar dependências: `npm install gsap`
4. Criar `styles/reset.css`
5. Criar `styles/variables.css` a partir do `design-system.md`
6. Criar `styles/utilities.css`
7. Criar `index.html` com estrutura semântica completa e seções vazias
8. Desenvolver seção por seção — HTML → CSS → JS → testar → próxima
