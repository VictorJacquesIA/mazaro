# Briefing — Mazaro

> Gerado pela V2 Digital em 02/06/2026
> Leia antes de criar qualquer conteúdo ou componente deste projeto.

---

## 1. SOBRE O NEGÓCIO

| Campo | Informação |
|-------|-----------|
| Nome | Mazaro |
| Segmento | Boutique digital de bolsas femininas |
| Cidade / Estado | Imbituba, SC |
| Modalidade de atendimento | 100% online (e-commerce) |
| Tempo de mercado | Inaugurada em junho de 2026 |
| Site atual | Loja operacional via InfinitePay (sem identidade visual própria) |

---

## 2. SERVIÇOS / PRODUTOS PRINCIPAIS

1. **Bolsas para trabalho** — modelos estruturados, versáteis, para uso profissional e rotina urbana
2. **Bolsas para dia a dia** — modelos práticos com visual elegante para passeio, compromissos e uso geral
3. **Bolsas para ocasiões especiais / presente** — modelos de maior apelo emocional, ideais para datas comemorativas

**Foco de crescimento:** bolsas versáteis de rotina (trabalho + dia a dia) · ticket médio R$ 140

---

## 3. PÚBLICO-ALVO

**Perfil do cliente ideal:**
- Idade: 27–42 anos
- Classe: C+ / B− / B
- Perfil: mulher adulta, prática, vaidosa, feminina e visualmente exigente. Trabalha, cuida da rotina, vai a compromissos sociais. Não compra bolsa só para carregar coisas — compra para completar a sua imagem.
- Principal dor: medo de comprar online e se arrepender — bolsa que parece bonita na foto mas decepciona no uso real
- O que ela busca: sentir que está pronta, bonita e segura para circular nos ambientes da sua vida

**Objeções comuns:**
- Medo de errar tamanho, cor ou ocasião
- Medo da bolsa parecer barata ou descascar rápido
- Insegurança em comprar sem ver o produto pessoalmente
- Querer sofisticação sem pagar preço de grife

---

## 4. OBJETIVO DO PROJETO

| Campo | Informação |
|-------|-----------|
| Objetivo principal | Apresentar a marca com identidade visual própria e converter visitantes em compradores no e-commerce |
| CTA principal | "Escolher minha bolsa" → link para loja InfinitePay |
| Prazo de entrega | 5 dias corridos a partir do início |
| Investimento aprovado | A definir |

---

## 5. CONTEÚDO DISPONÍVEL

| Recurso | Disponível? |
|---------|------------|
| Fotos profissionais | Sim |
| Depoimentos de clientes | Não — loja recém-inaugurada |
| Logo em alta resolução | Sim — brand book completo entregue |
| Textos prontos | Não — V2 cria com base no brand book |

**Diferencial competitivo:**
> Boutique digital com seleção elegante e acessível — posicionada entre a loja popular e a grife de luxo. Abordagem consultiva: a cliente entende como a bolsa combina, o que cabe e para quais ocasiões serve, antes de comprar. Compra sem medo de errar.

---

## 6. REQUISITOS TÉCNICOS

| Funcionalidade | Necessário? |
|----------------|------------|
| WhatsApp flutuante | Sim — como canal de apoio secundário |
| Formulário de contato | Não |
| Mapa / Localização | Não — 100% online |
| Galeria de fotos | Sim — vitrine de produtos |
| Blog / Conteúdo | Não nesta fase |
| Agendamento online | Não |
| Integração com CRM | Não |
| E-commerce | Sim — link externo para InfinitePay |

---

## 7. DOMÍNIO E HOSPEDAGEM

| Campo | Informação |
|-------|-----------|
| Domínio | {A DEFINIR} — a registrar se necessário |
| Hospedagem | A critério da V2 Digital |
| SSL | Automático via plataforma escolhida |

---

## 8. COPY E MENSAGENS PRINCIPAIS

**Headline sugerida:**
> "Elegância acessível para a sua rotina real."

**Subheadline sugerida:**
> "Bolsas femininas escolhidas para mulheres que querem se sentir mais arrumadas, confiantes e sofisticadas — sem pagar preço de grife e sem medo de comprar errado."

**Mensagem padrão do WhatsApp:**
> "Olá! Vim pelo site da Mazaro e gostaria de ajuda para escolher uma bolsa."

---

## 9. SEÇÕES DA LANDING PAGE

1. **Header** — logo + navegação mínima (Bolsas · Sobre · WhatsApp) + CTA
2. **Hero** — headline + subheadline + foto de produto no corpo + CTA "Escolher minha bolsa"
3. **Proposta de valor** — 3 pilares: Elegância · Acessível · Rotina Real (ícones lineares + texto curto)
4. **Vitrine de produtos** — 4 a 6 cards com foto, nome do modelo, ocasião de uso e CTA "Ver no site"
5. **Como escolher** — seção consultiva: ocasião → modelo recomendado (trabalho / dia a dia / presente)
6. **Sobre a Mazaro** — manifesto curto + foto editorial
7. **Prova social** — {TODO: depoimentos — inserir quando disponíveis} · por ora: selos de confiança (entrega para todo o Brasil, atendimento pelo WhatsApp, modelos selecionados com critério)
8. **CTA Final** — "Encontre a bolsa certa para você" + botão para e-commerce + WhatsApp como opção de apoio
9. **Footer** — logo + Instagram + WhatsApp + InfinitePay

---

## 10. OBSERVAÇÕES PARA O CLAUDE CODE

- Fontes: Cormorant Garamond (títulos/desejo) + Manrope (corpo/UI) — importar via Google Fonts
- Paleta: background `#F8F4EE` · surface `#E8D8C8` · primary `#B77A48` · text `#3B2A22` · accent `#D7B98E` · secondary-text `#8C837A`
- Espaçamento em múltiplos de 8px · radius: 4px inputs · 8px botões · 16px cards
- NUNCA usar: brilhos, coroas, gradientes vibrantes, sombras dramáticas, excesso de dourado
- Tom de voz: consultora de estilo, não vendedora — clara, feminina, acolhedora, sofisticada sem arrogância
- Seção de depoimentos com marcação `{TODO: inserir depoimentos reais}` — manter estrutura para fácil preenchimento futuro
- Imagens placeholder com dimensões reais para evitar CLS
- Número do WhatsApp e URL do e-commerce via variáveis de ambiente (.env)
- CTA principal sempre aponta para InfinitePay · WhatsApp aparece apenas como canal de apoio secundário
- Pergunta-guia de validação: _"Isso comunica elegância acessível para uma mulher real?"_

> **Próximo passo:** usar o `design-system.md` com este briefing para desenvolver a landing page da Mazaro.
