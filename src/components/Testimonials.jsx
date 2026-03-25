import { motion } from 'framer-motion'
import { useState } from 'react'
import { Reveal, StaggerContainer, StaggerChild } from './Animations'

const testimonials = [
  {
    name: 'María López',
    role: 'Dueña de tienda online',
    text: 'Rocío transformó completamente mi presencia online. Mi web nueva convierte el doble que la anterior y el SEO está funcionando de maravilla. Totalmente recomendable.',
    stars: 5,
    initial: 'ML',
  },
  {
    name: 'Carlos Fernández',
    role: 'Restaurante El Rincón',
    text: 'Profesional, rápida y muy detallista. Entendió perfectamente lo que necesitaba para mi negocio y entregó mucho más de lo esperado. Repetiré sin duda.',
    stars: 5,
    initial: 'CF',
  },
  {
    name: 'Ana Martínez',
    role: 'Consultora independiente',
    text: 'Gracias a Esencia Studio conseguí mis primeros clientes online. La web es preciosa y el posicionamiento SEO me trajo resultados en menos de 2 meses.',
    stars: 5,
    initial: 'AM',
  },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '.2rem', marginBottom: '1rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--lila-deep)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section style={{ padding: '0 4rem 8rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '4rem', marginBottom: '3rem' }}>
          <Reveal><div className="section-eyebrow">Testimonios</div></Reveal>
          <Reveal delay={.1}>
            <h2 className="section-title">Lo que dicen <em>nuestros clientes</em></h2>
          </Reveal>
        </div>

        <StaggerContainer stagger={.1} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <StaggerChild key={i}>
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(124,92,191,.1)', borderColor: 'var(--lila-mid)' }}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--gray-light)',
                  borderRadius: 20,
                  padding: '2rem',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color .3s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Comillas decorativas */}
                <div style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '1.5rem',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '5rem',
                  lineHeight: 1,
                  color: 'var(--lila-pale)',
                  fontWeight: 700,
                  userSelect: 'none',
                }}>
                  "
                </div>

                <Stars count={t.stars} />
                <p style={{ fontSize: '.85rem', lineHeight: 1.8, color: '#5a5566', flex: 1, marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                  {t.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.9rem', borderTop: '1px solid var(--gray-light)', paddingTop: '1.2rem' }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    background: 'linear-gradient(135deg, var(--lila-soft), var(--lila-deep))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '.7rem',
                    fontWeight: 700,
                    color: 'white',
                    flexShrink: 0,
                  }}>
                    {t.initial}
                  </div>
                  <div>
                    <div style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--black)' }}>{t.name}</div>
                    <div style={{ fontSize: '.72rem', color: 'var(--gray)' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>

        {/* Nota de confianza */}
        <Reveal delay={.3}>
          <div style={{ textAlign: 'center', marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {['100% clientes satisfechos', 'Sin letra pequeña', 'Resultados medibles'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <span style={{ color: 'var(--lila-deep)', fontSize: '.8rem' }}>✦</span>
                <span style={{ fontSize: '.78rem', color: 'var(--gray)', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`@media(max-width:768px){section > div > div[style*="repeat(3"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}