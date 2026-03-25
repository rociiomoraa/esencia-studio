import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import SEO from '../components/SEO'
import { PageTransition, Reveal, StaggerContainer, StaggerChild, OrbBackground } from '../components/Animations'
import { useIsMobile, useIsTablet } from '../hooks/useMediaQuery'
import { POSTS } from './BlogPost'

// Usamos los posts definidos en BlogPost.jsx para tener una única fuente de verdad

export default function Blog() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const gridCols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3,1fr)'
  const featured = POSTS[0]
  const rest = POSTS.slice(1)

  return (
    <PageTransition>
      <SEO
        title="Blog"
        description="Consejos de diseño web, SEO, branding y marketing digital para emprendedores y negocios locales. Por Rocío García, Esencia Studio."
        canonical="/blog"
      />

      {/* Hero */}
      <section style={{ minHeight: isMobile ? 'auto' : '40vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: isMobile ? '7rem 1.5rem 3rem' : '10rem 4rem 5rem' }}>
        <OrbBackground />
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="section-eyebrow">Blog & Recursos</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 'clamp(2.5rem,10vw,3.5rem)' : 'clamp(3rem,7vw,6rem)', fontWeight: 300, lineHeight: .92, letterSpacing: '-.03em', maxWidth: 700 }}>
              Ideas que <em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>hacen crecer</em><br />tu negocio
            </h1>
          </Reveal>
          <Reveal delay={.15}>
            <p style={{ fontSize: isMobile ? '.9rem' : '1rem', color: 'var(--gray)', lineHeight: 1.75, maxWidth: 500, marginTop: '1.5rem' }}>
              Consejos prácticos de diseño web, SEO y marketing digital. Solo lo que realmente funciona.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: isMobile ? '0 1.5rem 5rem' : '0 4rem 8rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Artículo destacado */}
          <Reveal>
            <Link to={`/blog/${featured.slug}`} style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 30px 60px rgba(124,92,191,.1)', borderColor: 'var(--lila-mid)' }}
                style={{
                  background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 24,
                  padding: isMobile ? '1.8rem' : '3rem', marginBottom: '2rem',
                  display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
                  gap: isMobile ? '1.5rem' : '3rem', alignItems: 'center', transition: 'border-color .3s',
                  cursor: 'pointer',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '.8rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ background: 'var(--lila-deep)', color: 'white', padding: '.25rem .8rem', borderRadius: '100px', fontSize: '.62rem', fontWeight: 700, letterSpacing: '.08em' }}>DESTACADO</span>
                    <span style={{ fontSize: '.72rem', color: 'var(--gray)', fontWeight: 500 }}>{featured.category}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1.4rem' : 'clamp(1.5rem,2.5vw,2.2rem)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-.02em', marginBottom: '1rem', color: 'var(--black)' }}>{featured.title}</h2>
                  <p style={{ fontSize: '.88rem', lineHeight: 1.8, color: 'var(--gray)', marginBottom: '1.2rem' }}>{featured.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontSize: '.72rem', color: 'var(--gray)' }}><Clock size={12} /> {featured.readTime} lectura</span>
                    <span style={{ fontSize: '.72rem', color: 'var(--gray)' }}>{featured.date}</span>
                    <span style={{ fontSize: '.75rem', color: 'var(--lila-deep)', fontWeight: 600 }}>Leer artículo →</span>
                  </div>
                </div>
                {!isMobile && (
                  <div style={{ width: 180, height: 160, background: featured.color || 'var(--lila-pale)', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--lila-mid)', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', color: 'var(--lila-mid)' }}>✦</span>
                  </div>
                )}
              </motion.div>
            </Link>
          </Reveal>

          {/* Grid de artículos */}
          <StaggerContainer stagger={.08} style={{ display: 'grid', gridTemplateColumns: gridCols, gap: '1.5rem' }}>
            {rest.map((post) => (
              <StaggerChild key={post.slug}>
                <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'flex', height: '100%' }}>
                  <motion.article
                    whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(124,92,191,.08)', borderColor: 'var(--lila-mid)' }}
                    style={{
                      background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 20,
                      overflow: 'hidden', width: '100%', display: 'flex', flexDirection: 'column',
                      transition: 'border-color .3s', cursor: 'pointer',
                    }}
                  >
                    <div style={{ height: 130, background: post.color || 'var(--lila-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--gray-light)', flexShrink: 0 }}>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--lila-mid)', opacity: .5 }}>✦</span>
                    </div>
                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <span style={{ background: 'var(--lila-pale)', color: 'var(--lila-deep)', padding: '.2rem .7rem', borderRadius: '100px', fontSize: '.62rem', fontWeight: 700, letterSpacing: '.06em', border: '1px solid var(--lila-mid)', display: 'inline-block', marginBottom: '.8rem', width: 'fit-content' }}>{post.category}</span>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.3, marginBottom: '.7rem', flex: 1, color: 'var(--black)' }}>{post.title}</h3>
                      <p style={{ fontSize: '.78rem', lineHeight: 1.7, color: 'var(--gray)', marginBottom: '1rem' }}>{post.description}</p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--gray-light)', paddingTop: '.9rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontSize: '.7rem', color: 'var(--gray)' }}><Clock size={11} /> {post.readTime}</span>
                        <span style={{ fontSize: '.7rem', color: 'var(--gray)' }}>{post.date}</span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </StaggerChild>
            ))}
          </StaggerContainer>

          {/* Newsletter */}
          <Reveal delay={.2}>
            <motion.div style={{
              marginTop: '3rem',
              background: 'linear-gradient(135deg, var(--lila-pale), var(--lavender))',
              border: '1px solid var(--lila-mid)', borderRadius: 24,
              padding: isMobile ? '2rem 1.5rem' : '3rem',
              display: 'flex', flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              justifyContent: 'space-between', gap: '2rem',
            }}>
              <div>
                <div className="section-eyebrow">Newsletter</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1.5rem' : '1.8rem', fontWeight: 400, letterSpacing: '-.02em', marginBottom: '.5rem' }}>
                  Consejos cada semana, <em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>directo al email</em>
                </h3>
                <p style={{ fontSize: '.85rem', color: 'var(--gray)', lineHeight: 1.6 }}>Sin spam. Solo contenido útil para hacer crecer tu negocio online.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '.8rem', width: isMobile ? '100%' : 'auto' }}>
                <input type="email" placeholder="tu@email.com"
                  style={{ padding: '.8rem 1.2rem', border: '1px solid var(--lila-mid)', borderRadius: '100px', fontSize: '.82rem', background: 'white', outline: 'none', width: isMobile ? '100%' : 220, fontFamily: 'var(--font-sans)', color: 'var(--black)', boxSizing: 'border-box' }} />
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
                  style={{ padding: '.8rem 1.6rem', background: 'var(--lila-deep)', color: 'white', border: 'none', borderRadius: '100px', fontSize: '.82rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', width: isMobile ? '100%' : 'auto' }}>
                  Suscribirme <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}