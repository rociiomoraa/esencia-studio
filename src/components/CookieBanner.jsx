import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Cookie, ChevronDown, ChevronUp } from 'lucide-react'
import { useIsMobile } from '../hooks/useMediaQuery'

const STORAGE_KEY = 'esencia_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,    // siempre activas, no se pueden desactivar
    analytics: false,   // Google Analytics
    marketing: false,   // futuras cookies de marketing
  })
  const isMobile = useIsMobile()

  useEffect(() => {
    // Mostrar el banner si no hay consentimiento guardado
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      // Pequeño delay para que no aparezca de golpe al cargar
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    } else {
      // Aplicar preferencias guardadas
      const parsed = JSON.parse(saved)
      applyConsent(parsed)
    }
  }, [])

  const applyConsent = (consent) => {
    // Activar/desactivar Google Analytics según preferencia
    if (consent.analytics) {
      window['ga-disable-G-XXXXXXXXXX'] = false
    } else {
      window['ga-disable-G-XXXXXXXXXX'] = true
    }
  }

  const saveConsent = (consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...consent,
      date: new Date().toISOString(),
    }))
    applyConsent(consent)
    setVisible(false)
  }

  const acceptAll = () => {
    const consent = { necessary: true, analytics: true, marketing: true }
    setPreferences(consent)
    saveConsent(consent)
  }

  const rejectAll = () => {
    const consent = { necessary: true, analytics: false, marketing: false }
    setPreferences(consent)
    saveConsent(consent)
  }

  const saveCustom = () => {
    saveConsent(preferences)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.3)', zIndex: 9990, backdropFilter: 'blur(2px)' }}
          />

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: .97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: .97 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'fixed',
              bottom: isMobile ? 0 : '2rem',
              left: isMobile ? 0 : '50%',
              right: isMobile ? 0 : 'auto',
              transform: isMobile ? 'none' : 'translateX(-50%)',
              width: isMobile ? '100%' : 'min(640px, calc(100vw - 4rem))',
              background: 'white',
              borderRadius: isMobile ? '20px 20px 0 0' : 20,
              boxShadow: '0 20px 60px rgba(0,0,0,.15)',
              border: '1px solid var(--gray-light)',
              zIndex: 9999,
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{ padding: isMobile ? '1.5rem 1.5rem 1rem' : '2rem 2rem 1rem', borderBottom: showDetails ? '1px solid var(--gray-light)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
                  <div style={{ width: 36, height: 36, background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Cookie size={16} color="var(--lila-deep)" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--black)' }}>
                    Tu privacidad nos importa
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: '.82rem', lineHeight: 1.7, color: 'var(--gray)' }}>
                Usamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y ofrecerte contenido relevante. Puedes aceptar todas, rechazarlas o personalizar tu elección.{' '}
                <Link to="/privacidad" style={{ color: 'var(--lila-deep)', fontWeight: 500 }}>Más información</Link>
              </p>

              {/* Toggle detalles */}
              <button
                onClick={() => setShowDetails(d => !d)}
                style={{ display: 'flex', alignItems: 'center', gap: '.4rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '.75rem', color: 'var(--lila-deep)', fontWeight: 600, marginTop: '.8rem', padding: 0 }}
              >
                {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                {showDetails ? 'Ocultar opciones' : 'Personalizar cookies'}
              </button>
            </div>

            {/* Detalles personalizables */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: .3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '1.2rem 2rem' }}>
                    {[
                      {
                        key: 'necessary',
                        name: 'Cookies necesarias',
                        desc: 'Imprescindibles para el funcionamiento básico de la web. No se pueden desactivar.',
                        locked: true,
                      },
                      {
                        key: 'analytics',
                        name: 'Cookies analíticas',
                        desc: 'Nos ayudan a entender cómo usas la web (Google Analytics). Datos anónimos.',
                        locked: false,
                      },
                      {
                        key: 'marketing',
                        name: 'Cookies de marketing',
                        desc: 'Permiten mostrar publicidad personalizada. Actualmente no las usamos.',
                        locked: false,
                      },
                    ].map(cat => (
                      <div key={cat.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', padding: '.8rem 0', borderBottom: '1px solid var(--gray-light)' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--black)', marginBottom: '.2rem' }}>{cat.name}</div>
                          <div style={{ fontSize: '.75rem', color: 'var(--gray)', lineHeight: 1.5 }}>{cat.desc}</div>
                        </div>
                        <Toggle
                          checked={preferences[cat.key]}
                          locked={cat.locked}
                          onChange={(val) => !cat.locked && setPreferences(p => ({ ...p, [cat.key]: val }))}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botones */}
            <div style={{
              padding: isMobile ? '1rem 1.5rem 1.5rem' : '1.2rem 2rem 1.8rem',
              display: 'flex',
              gap: '.8rem',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'flex-end',
            }}>
              {showDetails ? (
                <>
                  <motion.button onClick={rejectAll} whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }}
                    style={{ padding: '.65rem 1.2rem', background: 'none', border: '1px solid var(--gray-light)', borderRadius: '100px', fontSize: '.78rem', fontWeight: 500, color: 'var(--gray)', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                    Rechazar todas
                  </motion.button>
                  <motion.button onClick={saveCustom} whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }}
                    style={{ padding: '.65rem 1.4rem', background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: '100px', fontSize: '.78rem', fontWeight: 600, color: 'var(--lila-deep)', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                    Guardar preferencias
                  </motion.button>
                  <motion.button onClick={acceptAll} whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }}
                    style={{ padding: '.65rem 1.4rem', background: 'var(--lila-deep)', border: 'none', borderRadius: '100px', fontSize: '.78rem', fontWeight: 700, color: 'white', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                    Aceptar todas
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.button onClick={rejectAll} whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }}
                    style={{ padding: '.65rem 1.2rem', background: 'none', border: '1px solid var(--gray-light)', borderRadius: '100px', fontSize: '.78rem', fontWeight: 500, color: 'var(--gray)', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                    Solo necesarias
                  </motion.button>
                  <motion.button onClick={acceptAll} whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }}
                    style={{ padding: '.65rem 1.8rem', background: 'var(--lila-deep)', border: 'none', borderRadius: '100px', fontSize: '.78rem', fontWeight: 700, color: 'white', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>
                    Aceptar todas las cookies
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Componente toggle on/off
function Toggle({ checked, locked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      disabled={locked}
      style={{
        width: 44, height: 24,
        borderRadius: 12,
        background: checked ? 'var(--lila-deep)' : locked ? 'var(--lila-mid)' : 'var(--gray-light)',
        border: 'none',
        cursor: locked ? 'not-allowed' : 'pointer',
        position: 'relative',
        flexShrink: 0,
        transition: 'background .2s',
        padding: 0,
      }}
    >
      <motion.div
        animate={{ x: checked ? 22 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{ width: 20, height: 20, borderRadius: '50%', background: 'white', position: 'absolute', top: 2, boxShadow: '0 1px 4px rgba(0,0,0,.2)' }}
      />
    </button>
  )
}

// Hook para usar en otros componentes (ej: Analytics)
export function useCookieConsent() {
  const getSaved = () => {
    try {
      const saved = localStorage.getItem('esencia_cookie_consent')
      return saved ? JSON.parse(saved) : null
    } catch { return null }
  }
  return getSaved()
}