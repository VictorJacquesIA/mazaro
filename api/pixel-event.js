export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const PIXEL_ID = process.env.VITE_META_PIXEL_ID
  const TOKEN   = process.env.META_PIXEL_TOKEN

  if (!PIXEL_ID || !TOKEN) {
    return res.status(200).json({ skipped: 'pixel not configured' })
  }

  const { event_name, event_source_url, custom_data } = req.body || {}
  if (!event_name) return res.status(400).json({ error: 'event_name required' })

  const ip        = (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
  const userAgent = req.headers['user-agent'] || ''

  const payload = {
    data: [{
      event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: event_source_url || 'https://usemazaro.com.br/',
      action_source: 'website',
      user_data: {
        client_ip_address: ip || undefined,
        client_user_agent: userAgent || undefined
      },
      ...(custom_data ? { custom_data } : {})
    }]
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    )
    const data = await response.json()
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
