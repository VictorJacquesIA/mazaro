export const DEFAULT_PRODUCTS = [
  {
    id: 1,
    tag: 'Trabalho',
    title: 'Siena · Caramelo',
    desc: 'Trabalho, passeio e rotina diária. Cabe celular, carteira, chave e óculos. A bolsa que combina com tudo e transforma qualquer look.',
    img: './assets/images/01.jpeg',
    alt: 'Bolsa Siena Caramelo — Mazaro',
    link: '#ecommerce'
  },
  {
    id: 2,
    tag: 'Dia a dia',
    title: 'Mini Bag · com Lenço',
    desc: 'Para os dias em que menos é mais. Cabe o essencial — e sobra estilo. Pequena no tamanho. Grande na presença.',
    img: './assets/images/02.jpeg',
    alt: 'Mini Bag com Lenço — Mazaro',
    link: '#ecommerce'
  },
  {
    id: 3,
    tag: 'Noite',
    title: 'Clutch · Corrente Preta',
    desc: 'Para quando o look pede atenção. Do jantar ao evento — sem concessões. Algumas bolsas completam o visual. Essa transforma.',
    img: './assets/images/03.jpeg',
    alt: 'Clutch Corrente Preta — Mazaro',
    link: '#ecommerce'
  },
  {
    id: 4,
    tag: 'Dia a dia',
    title: 'Estruturada · Fecho Dourado',
    desc: 'Para quem chega e já impressiona. O acabamento que separa o refinado do comum.',
    img: './assets/images/04.jpeg',
    alt: 'Bolsa Estruturada Fecho Dourado — Mazaro',
    link: '#ecommerce'
  }
]

export function getProducts() {
  try {
    const saved = localStorage.getItem('mazaro_products')
    return saved ? JSON.parse(saved) : DEFAULT_PRODUCTS
  } catch {
    return DEFAULT_PRODUCTS
  }
}

export function saveProducts(products) {
  localStorage.setItem('mazaro_products', JSON.stringify(products))
}

export function resetProducts() {
  localStorage.removeItem('mazaro_products')
}
