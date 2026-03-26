import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const MotionLink = motion.create(Link)

const links = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/precios', label: 'Precios' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)
  const location = useLocation()

  // Detectamos si la página actual es la de contacto para el modo oscuro
  const isDarkPage = location.pathname === '/contacto'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const measure = () => {
      const banner = document.getElementById('availability-banner')
      setBannerHeight(banner ? banner.offsetHeight : 0)
    }
    measure()
    const observer = new MutationObserver(measure)
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true, attributes: true })
    }
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  useEffect(() => setOpen(false), [location])

  const navTop = scrolled ? 0 : bannerHeight

  // Lógica de colores dinámica para el contraste
  const logoColor = scrolled ? 'var(--black)' : (isDarkPage ? 'rgba(255, 255, 255, 1)' : 'var(--black)')
  const linkColor = scrolled ? 'var(--gray)' : (isDarkPage ? 'rgba(255, 255, 255, 0.7)' : 'var(--gray)')
  const activeLinkColor = scrolled ? 'var(--black)' : (isDarkPage ? 'rgba(255, 255, 255, 1)' : 'var(--black)')

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: navTop,
          left: 0, right: 0,
          zIndex: 200,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: scrolled ? '1.1rem 4rem' : '1.6rem 4rem',
          background: scrolled ? 'rgba(250, 248, 253, 0.95)' : 'rgba(250, 248, 253, 0)',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--gray-light)' : '1px solid rgba(250, 248, 253, 0)',
          transition: 'background .3s, border-color .3s, padding .3s, top .25s',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .7, ease: [.16, 1, .3, 1] }}
      >
        <Link to="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, textDecoration: 'none' }}>
          <motion.span 
            animate={{ color: logoColor }}
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.2rem', 
              fontWeight: 600, 
              letterSpacing: '.04em',
            }}
            transition={{ duration: 0.3 }}
          >
            Esencia Studio
          </motion.span>
          <span style={{ 
            fontSize: '.55rem', 
            fontWeight: 500, 
            letterSpacing: '.18em', 
            textTransform: 'uppercase', 
            color: 'var(--lila-deep)' 
          }}>
            by Rocío García
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul style={{ display: 'flex', gap: '2.2rem', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }} className="nav-desktop">
          {links.map(l => (
            <li key={l.to}>
              <NavLink 
                to={l.to} 
                active={location.pathname === l.to}
                customColor={location.pathname === l.to ? activeLinkColor : linkColor}
                hoverColor={activeLinkColor}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contacto">
              <motion.button
                style={{ padding: '.55rem 1.4rem', background: 'var(--lila-deep)', color: 'rgba(255, 255, 255, 1)', border: 'none', borderRadius: '100px', fontSize: '.68rem', fontWeight: 600, letterSpacing: '.1em', cursor: 'pointer' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: .97 }}
              >
                Contacto
              </motion.button>
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="nav-mobile-toggle"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', padding: '.3rem', color: logoColor }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: .25 }}
            style={{
              position: 'fixed',
              top: (scrolled ? 0 : bannerHeight) + 62,
              left: 0, right: 0,
              zIndex: 199,
              background: 'rgba(250, 248, 253, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--gray-light)',
              padding: '2rem 1.5rem',
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
            }}
          >
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', fontWeight: 600, color: location.pathname === l.to ? 'var(--lila-deep)' : 'var(--black)', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
            <Link to="/contacto">
              <button style={{ width: '100%', padding: '.8rem', background: 'var(--lila-deep)', color: 'rgba(255, 255, 255, 1)', border: 'none', borderRadius: '100px', fontSize: '.82rem', fontWeight: 600, cursor: 'pointer' }}>
                Contacto
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
          nav { padding: 1.2rem 1.5rem !important; }
        }
      `}</style>
    </>
  )
}

function NavLink({ to, active, children, customColor, hoverColor }) {
  return (
    <Link to={to} style={{ position: 'relative', display: 'inline-block', textDecoration: 'none' }}>
      <motion.span
        animate={{ color: customColor }}
        style={{ 
          fontSize: '.7rem', 
          fontWeight: 500, 
          letterSpacing: '.12em', 
          textTransform: 'uppercase', 
        }}
        transition={{ duration: 0.25 }}
        whileHover={{ color: hoverColor }}
      >
        {children}
      </motion.span>
      {active && (
        <motion.div
          layoutId="nav-indicator"
          style={{ position: 'absolute', bottom: -3, left: 0, right: 0, height: 1, background: 'var(--lila-deep)', borderRadius: 1 }}
        />
      )}
    </Link>
  )
}