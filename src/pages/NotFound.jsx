import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowRight, Search } from 'lucide-react'
import SEO from '../components/SEO'
import { PageTransition } from '../components/Animations'
import { useIsMobile } from '../hooks/useMediaQuery'

const quickLinks = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/precios', label: 'Precios' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
]

export default function NotFound() {
  const isMobile = useIsMobile()

  return (
    <PageTransition>
      <SEO
        title="Página no encontrada"
        description="Esta página no existe en Esencia Studio. Vuelve al inicio o explora nuestros servicios de diseño web y marketing digital."
        canonical="/404"
      />

      <div style={{
        minHeight: '100vh',
        background: 'var(--dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '6rem 1.5rem 3rem' : '8rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Orbs decorativos */}
        <motion.div
          style={{ position: 'absolute', right: -150, top: -150, width: 500, height: 500, background: 'radial-gradient(circle, rgba(155,127,212,.1), transparent)', borderRadius: '50%', pointerEvents: 'none' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          style={{ position: 'absolute', left: -100, bottom: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(155,127,212,.07), transparent)', borderRadius: '50%', pointerEvents: 'none' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />

        <div style={{ maxWidth: 700, width: '100%', textAlign: 'center', position: 'relative', zIndex: 2 }}>

          {/* Número 404 grande */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <div style={{ position: 'relative', marginBottom: '1rem', display: 'inline-block' }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: isMobile ? 'clamp(6rem,30vw,10rem)' : '14rem',
                fontWeight: 300,
                lineHeight: 1,
                letterSpacing: '-.05em',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(155,127,212,.25)',
                display: 'block',
                userSelect: 'none',
              }}>
                404
              </span>
              {/* ✦ flotante encima del 0 */}
              <motion.span
                style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: isMobile ? '3rem' : '5rem',
                  color: 'var(--lila-soft)',
                  opacity: .6,
                }}
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                ✦
              </motion.span>
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2, duration: .6 }}
            style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--lila-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.7rem', marginBottom: '1.2rem' }}
          >
            <span style={{ width: 18, height: 1, background: 'var(--lila-soft)', display: 'block' }} />
            Página no encontrada
            <span style={{ width: 18, height: 1, background: 'var(--lila-soft)', display: 'block' }} />
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3, duration: .7 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? 'clamp(2rem,8vw,2.8rem)' : 'clamp(2.5rem,4vw,3.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-.02em',
              color: 'white',
              marginBottom: '1.2rem',
            }}
          >
            Esta página se ha perdido<br />
            <em style={{ fontStyle: 'italic', color: 'var(--lila-soft)' }}>por el camino.</em>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .4, duration: .7 }}
            style={{ fontSize: isMobile ? '.9rem' : '1rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 480, margin: '0 auto 2.5rem' }}
          >
            La página que buscas no existe, se ha movido o la URL tiene un error. Pero no te preocupes — aquí tienes dónde ir.
          </motion.p>

          {/* Botones principales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .5, duration: .7 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: .97 }}
                style={{ padding: '.9rem 2rem', background: 'var(--lila-deep)', color: 'white', border: 'none', borderRadius: '100px', fontSize: '.85rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.6rem', letterSpacing: '.03em' }}
              >
                <Home size={15} /> Volver al inicio
              </motion.button>
            </Link>
            <Link to="/contacto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: .97 }}
                style={{ padding: '.9rem 2rem', background: 'rgba(255,255,255,.06)', color: 'white', border: '1px solid rgba(255,255,255,.15)', borderRadius: '100px', fontSize: '.85rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.6rem' }}
              >
                Contactar <ArrowRight size={15} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Separador */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: '2rem' }}
          >
            <p style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.25)', marginBottom: '1.2rem' }}>
              O ve directamente a
            </p>

            {/* Quick links */}
            <div style={{ display: 'flex', gap: '.7rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {quickLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: .65 + i * .07 }}
                >
                  <Link to={link.to} style={{ textDecoration: 'none' }}>
                    <motion.span
                      whileHover={{ background: 'rgba(155,127,212,.2)', borderColor: 'rgba(155,127,212,.4)', color: 'white' }}
                      style={{
                        display: 'inline-block',
                        padding: '.4rem 1rem',
                        background: 'rgba(255,255,255,.04)',
                        border: '1px solid rgba(255,255,255,.1)',
                        borderRadius: '100px',
                        fontSize: '.78rem',
                        fontWeight: 500,
                        color: 'rgba(255,255,255,.5)',
                        cursor: 'pointer',
                        transition: 'all .2s',
                      }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Firma */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ marginTop: '3rem' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.8rem', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, padding: '.8rem 1.4rem' }}>
              <div style={{ width: 28, height: 28, background: 'linear-gradient(135deg, var(--lila-soft), var(--lila-deep))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.6rem', fontWeight: 700, color: 'white', flexShrink: 0 }}>RG</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '.72rem', fontWeight: 600, color: 'rgba(255,255,255,.6)' }}>Esencia Studio</div>
                <div style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.3)' }}>by Rocío García</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  )
}