// tracking.js — Mazaro LP

export function initTracking() {
  trackCTAClicks()
  trackWhatsAppClicks()
  trackProductClicks()
}

// ── Browser Pixel ─────────────────────────────────────────────────────────────

function pixelEvent(event, params = {}) {
  if (typeof fbq === 'function') fbq('track', event, params)
}

function gaEvent(name, params = {}) {
  if (typeof gtag === 'function') gtag('event', name, params)
}

// ── Conversions API (server-side) ─────────────────────────────────────────────

async function serverEvent(eventName, customData = {}) {
  try {
    await fetch('/api/pixel-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name: eventName,
        event_source_url: window.location.href,
        custom_data: customData
      })
    })
  } catch {}
}

// ── Eventos ──────────────────────────────────────────────────────────────────

function trackCTAClicks() {
  document.querySelectorAll('.btn--primary, .hero__cta, [data-track="cta"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const label = btn.textContent.trim()
      pixelEvent('Lead', { content_name: label })
      gaEvent('cta_click', { event_category: 'engagement', event_label: label })
      serverEvent('Lead', { content_name: label })
    })
  })
}

function trackWhatsAppClicks() {
  document.querySelectorAll('[href*="whatsapp"], [href*="wa.me"], .whatsapp-float').forEach(el => {
    el.addEventListener('click', () => {
      pixelEvent('Contact', { content_name: 'whatsapp' })
      gaEvent('whatsapp_click', { event_category: 'contact' })
      serverEvent('Contact', { content_name: 'whatsapp' })
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
    serverEvent('ViewContent', { content_name: name, content_type: 'product' })
  })
}
