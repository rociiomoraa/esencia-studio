import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark)',
      color: 'white',
      padding: '3rem 4rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 300, height: 300, background: 'radial-gradient(circle, rgba(155,127,212,.07), transparent)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Main row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,.08)' }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 300, letterSpacing: '-.02em', marginBottom: '.3rem' }}>Esencia Studio</div>
            <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.35)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>by Rocío García</div>
            <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.32)', lineHeight: 1.7, maxWidth: 240, marginBottom: '1.2rem' }}>
              Diseño web, SEO y marketing digital para negocios que quieren crecer de verdad.
            </p>
            <div style={{ display: 'flex', gap: '.6rem' }}>
              {[
                { icon: Instagram, href: 'https://instagram.com/esenciastudio', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com/in/rociogarcia', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hola@esenciastudio.es', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }} aria-label={label}
                  style={{ width: 32, height: 32, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>
                  <Icon size={13} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Páginas */}
          <div>
            <div style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.28)', marginBottom: '1rem' }}>Páginas</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              {[{ to: '/', label: 'Inicio' }, { to: '/servicios', label: 'Servicios' }, { to: '/nosotros', label: 'Nosotros' }, { to: '/portfolio', label: 'Portfolio' }, { to: '/blog', label: 'Blog' }, { to: '/contacto', label: 'Contacto' }].map(item => (
                <li key={item.label}>
                  <Link to={item.to} style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.48)', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.48)'}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <div style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.28)', marginBottom: '1rem' }}>Servicios</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              {['Diseño Web', 'SEO', 'Redes Sociales', 'Branding', 'Marketing con IA'].map(s => (
                <li key={s}>
                  <Link to="/servicios" style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.48)', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.48)'}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contacto */}
          <div>
            <div style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.28)', marginBottom: '1rem' }}>Legal</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.5rem' }}>
              {[{ to: '/privacidad', label: 'Política de Privacidad' }, { to: '/privacidad', label: 'Aviso Legal' }, { to: '/privacidad', label: 'Cookies' }].map(item => (
                <li key={item.label}>
                  <Link to={item.to} style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.48)', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.48)'}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.28)', marginBottom: '.7rem' }}>Contacto</div>
            <a href="mailto:hola@esenciastudio.es" style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.48)', textDecoration: 'none', display: 'block', marginBottom: '.3rem' }}>hola@esenciastudio.es</a>
            <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.28)' }}>España · Remoto</span>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.25)' }}>
            © {new Date().getFullYear()} Esencia Studio · Rocío García · Todos los derechos reservados
          </p>
          <motion.a href="/contacto" whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.6rem 1.4rem', background: 'var(--lila-deep)', borderRadius: '100px', fontSize: '.75rem', fontWeight: 600, color: 'white', textDecoration: 'none' }}>
            Empieza tu proyecto →
          </motion.a>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){ footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; } }
        @media(max-width:768px){ footer { padding: 2.5rem 1.5rem 1.5rem !important; } footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 1.5rem 2rem !important; } footer > div > div:last-child { flex-direction: column !important; align-items: flex-start !important; } }
        @media(max-width:480px){ footer > div > div:first-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}