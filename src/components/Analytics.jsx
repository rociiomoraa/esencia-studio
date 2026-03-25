import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ── INSTRUCCIONES ────────────────────────────────────────────────────────────
// 1. Ve a https://analytics.google.com y crea una cuenta gratis
// 2. Crea una propiedad para esenciastudio.es
// 3. Ve a Flujos de datos > Web > copia el ID de medición (ej: G-XXXXXXXXXX)
// 4. Reemplaza 'G-XXXXXXXXXX' por tu ID real en las dos líneas marcadas
// ─────────────────────────────────────────────────────────────────────────────
const GA_ID = 'G-7J7YQ1DMVK' // ← cambia esto por tu ID real

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    // Inyectar el script de GA solo una vez
    if (window.gtag) return

    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      // Respetar consentimiento de cookies
      const consent = localStorage.getItem('esencia_cookie_consent');
      const parsed = consent ? JSON.parse(consent) : null;
      const hasAnalytics = parsed && parsed.analytics === true;

      // Modo de consentimiento de GA4
      gtag('consent', 'default', {
        'analytics_storage': hasAnalytics ? 'granted' : 'denied',
        'ad_storage': 'denied',
        'wait_for_update': 500
      });

      gtag('config', '${GA_ID}', {
        send_page_view: false // lo enviamos manualmente en cada cambio de ruta
      });
    `
    document.head.appendChild(script2)
  }, [])

  // Enviar pageview en cada cambio de ruta
  useEffect(() => {
    if (!window.gtag) return

    const consent = localStorage.getItem('esencia_cookie_consent')
    const parsed = consent ? JSON.parse(consent) : null
    if (!parsed?.analytics) return // no trackear si no hay consentimiento

    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_title: document.title,
    })
  }, [location])

  return null
}