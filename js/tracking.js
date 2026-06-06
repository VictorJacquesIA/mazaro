// tracking.js — Mazaro LP

export function initTracking() {
  trackCTAClicks()
  trackWhatsAppClicks()
  trackProductClicks()
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function pixelEvent(event, params = {}) {
  if (typeof fbq === 'function') fbq('track', event, params)
}

function gaEvent(name, params = {}) {
  if (typeof gtag === 'function') gtag('event', name, params)
}

// ── Eventos ──────────────────────────────────────────────────────────────────

function trackCTAClicks() {
  document.querySelectorAll('.btn--primary, .hero__cta, [data-track="cta"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const label = btn.textContent.trim()
      pixelEvent('Lead', { content_name: label })
      gaEvent('cta_click', { event_category: 'engagement', event_label: label })
    })
  })
}

function trackWhatsAppClicks() {
  document.querySelectorAll('[href*="whatsapp"], [href*="wa.me"], .whatsapp-float').forEach(el => {
    el.addEventListener('click', () => {
      pixelEvent('Contact', { content_name: 'whatsapp' })
      gaEvent('whatsapp_click', { event_category: 'contact' })
    })
  })
}

function trackProductClicks() {
  document.addEventListener('click', e => {
    const card = e.target.closest('.product-card')
    if (!card) return
    const name = card.querySelector('.text-h3')?.textContent.trim() || 'produto'
    pixelEvent('ViewContent', { content_name: name, content_type: 'product' })
    gaEvent('view_item', { item_name: name })
  })
}
