// forms.js — Mazaro LP
// Sem formulário de contato nesta fase (apenas e-commerce e WhatsApp)

export function initForms() {
  initWhatsApp();
}

function initWhatsApp() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER;
  const message = encodeURIComponent(import.meta.env.VITE_WHATSAPP_MESSAGE || "");
  const url = `https://wa.me/${number}?text=${message}`;

  document.querySelectorAll("[href='#whatsapp']").forEach((el) => {
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  const ecommerceUrl = import.meta.env.VITE_ECOMMERCE_URL;
  if (ecommerceUrl) {
    document.querySelectorAll("[href='#ecommerce']").forEach((el) => {
      el.href = ecommerceUrl;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });
  }
}
