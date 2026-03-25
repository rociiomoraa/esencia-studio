import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useIsMobile } from '../hooks/useMediaQuery'

const MENSAJE = 'Disponible para nuevos proyectos en abril 2026'  // ← actualiza cada mes

export default function AvailabilityBanner() {
  const [visible, setVisible] = useState(true)
  const isMobile = useIsMobile()
  if (!visible) return null

  return (
    <div
      id="availability-banner"
      style={{
        background: 'var(--lila-deep)',
        color: 'white',
        padding: isMobile ? '.6rem 2.5rem .6rem 1rem' : '.55rem 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '.6rem',
        position: 'relative',
        zIndex: 1000,
        flexWrap: 'wrap',
        textAlign: 'center',
      }}
    >
      <motion.span
        style={{ width: 7, height: 7, background: '#4eff91', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }}
        animate={{ opacity: [1, .3, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <span style={{ fontSize: isMobile ? '.68rem' : '.72rem', fontWeight: 500, letterSpacing: '.03em' }}>{MENSAJE}</span>
      <Link to="/contacto" style={{ color: 'white', fontSize: isMobile ? '.68rem' : '.72rem', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3, whiteSpace: 'nowrap' }}>
        Contáctame →
      </Link>
      <button
        onClick={() => setVisible(false)}
        style={{ position: 'absolute', right: '.7rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.7)', display: 'flex', alignItems: 'center', padding: '.3rem' }}
      >
        <X size={13} />
      </button>
    </div>
  )
}