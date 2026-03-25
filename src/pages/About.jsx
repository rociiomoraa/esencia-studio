import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { PageTransition, Reveal, StaggerContainer, StaggerChild, OrbBackground } from '../components/Animations'
import { useIsMobile } from '../hooks/useMediaQuery'

const values = [
  { icon: '✦', name: 'Honestidad', desc: 'Sin humo ni promesas vacías. Te digo lo que funciona y lo que no, aunque no sea lo que quieras escuchar.' },
  { icon: '✦', name: 'Resultados', desc: 'El diseño bonito que también convierte. Cada decisión tiene un propósito: hacer crecer tu negocio.' },
  { icon: '✦', name: 'Cercanía', desc: 'Trato directo, sin intermediarios. Siempre sabrás con quién hablas y quién trabaja en tu proyecto.' },
  { icon: '✦', name: 'Innovación', desc: 'IA + diseño + código para entregar resultados que sorprenden en tiempo récord.' },
]

const stackCategories = [
  {
    label: 'Frontend & Código',
    items: ['HTML / CSS', 'JavaScript', 'React', 'PHP', 'Node.js'],
  },
  {
    label: 'CMS & Diseño',
    items: ['WordPress', 'Elementor', 'Figma', 'Canva Pro', 'Framer'],
  },
  {
    label: 'Marketing & SEO',
    items: ['SEO', 'Google Analytics', 'MySQL', 'Git / GitHub'],
  },
  {
    label: 'Inteligencia Artificial',
    items: ['ChatGPT / Claude', 'Midjourney'],
  },
]

export function About() {
  const isMobile = useIsMobile()

  return (
    <PageTransition>
      <SEO title="Nosotros" description="Esencia Studio, fundado por Rocío García, diseñadora y desarrolladora web con formación en DAM y experiencia en agencia de marketing digital. Diseño con propósito." canonical="/nosotros" />

      {/* ── HERO ── */}
      <section style={{ 
        minHeight: isMobile ? 'auto' : '60vh', 
        position: 'relative', 
        overflow: 'hidden', 
        display: 'flex', 
        alignItems: 'center', 
        padding: isMobile ? '6rem 1.5rem 3rem' : '10rem 4rem 6rem' 
      }}>
        <OrbBackground />
        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          width: '100%', 
          position: 'relative', 
          zIndex: 2, 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? '2.5rem' : '6rem', 
          alignItems: 'center' 
        }}>
          <Reveal>
            <div className="section-eyebrow">Sobre nosotros</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.8rem' : 'clamp(3rem,6vw,5.5rem)', fontWeight: 300, lineHeight: .95, letterSpacing: '-.03em', marginBottom: '1.5rem' }}>
              Diseño que tiene<br /><em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>esencia propia.</em>
            </h1>
            <p style={{ fontSize: '.95rem', color: 'var(--gray)', lineHeight: 1.8 }}>Un estudio pequeño con grandes ideas, fundado con la misión de hacer el diseño profesional accesible para todos los negocios.</p>
          </Reveal>

          {/* Tarjeta RG */}
          <Reveal delay={.2}>
            <motion.div
              style={{ 
                background: 'linear-gradient(135deg, var(--lila-pale), var(--lavender))', 
                borderRadius: 24, 
                height: isMobile ? 280 : 380, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                border: '1px solid var(--lila-mid)', 
                position: 'relative' 
              }}
              whileHover={{ scale: 1.02 }}
            >
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '4.5rem' : '8rem', fontWeight: 700, color: 'var(--lila-mid)', letterSpacing: '-.05em' }}>RG</span>
              <motion.div
                style={{ position: 'absolute', bottom: 15, right: 15, background: 'var(--lila-deep)', borderRadius: 12, padding: '.8rem 1.2rem' }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div style={{ fontSize: '.7rem', fontWeight: 600, color: 'white', whiteSpace: 'nowrap' }}>Rocío García</div>
                <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.65)', marginTop: '.1rem' }}>Fundadora</div>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ── HISTORIA ── */}
      <section style={{ padding: isMobile ? '2rem 1.5rem 4rem' : '0 4rem 8rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ 
            borderTop: '1px solid var(--gray-light)', 
            paddingTop: isMobile ? '2.5rem' : '5rem', 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1.3fr', 
            gap: isMobile ? '2rem' : '6rem', 
            alignItems: 'start' 
          }}>
            <div style={{ position: isMobile ? 'relative' : 'sticky', top: isMobile ? '0' : '8rem', marginBottom: isMobile ? '1.5rem' : '0' }}>
              <Reveal><div className="section-eyebrow">Mi historia</div></Reveal>
              <Reveal delay={.1}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.2rem' : 'clamp(2rem,3.5vw,3rem)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-.02em', marginBottom: isMobile ? '1.5rem' : '2rem' }}>
                  De DAM a<br /><em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>Esencia Studio</em>
                </h2>
              </Reveal>
              <Reveal delay={.2}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.8rem' }}>
                  {[{ n: '2022', l: 'Inicio DAM' }, { n: '2024', l: 'Prácticas IP10' }, { n: '+5', l: 'Proyectos' }, { n: '∞', l: 'Ganas' }].map(s => (
                    <div key={s.n} style={{ background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: 14, padding: '1rem' }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--lila-deep)' }}>{s.n}</div>
                      <div style={{ fontSize: '.65rem', color: 'var(--gray)', marginTop: '.1rem' }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            
            <div style={{ marginTop: isMobile ? '1.5rem' : 0 }}>
              {[
                { title: '¿Quién soy?', text: 'Soy Rocío García, tengo 23 años y soy la fundadora de Esencia Studio. Me formé en Desarrollo de Aplicaciones Multiplataforma — aunque siempre me apasionó más el diseño que el backend. Esa combinación de conocimiento técnico y sensibilidad visual es lo que hace único a Esencia Studio.' },
                { title: 'Dónde aprendí', text: 'Durante mis prácticas en IP10, una agencia de marketing digital, aprendí cómo funciona el negocio digital de verdad. Vi cómo una web bien hecha cambia el rumbo de un negocio local. Cómo el SEO trae clientes de forma constante.' },
                { title: 'Por qué Esencia Studio', text: 'Fundé Esencia Studio porque creo que todos los negocios merecen una presencia digital que los represente de verdad. Me ayudo de la IA como copiloto para entregar más rápido y mejor — sin perder el toque humano.' },
                { title: 'Mi visión', text: 'Esencia Studio nació pequeño pero con grandes ambiciones. El objetivo es crecer junto a mis clientes y convertirse en el estudio de referencia para negocios con esencia propia.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * .1} style={{ marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '.5rem', color: 'var(--lila-deep)' }}>{item.title}</h3>
                  <p style={{ fontSize: '.88rem', lineHeight: 1.85, color: '#5a5566' }}>{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── VALORES ── */}
          <div style={{ marginTop: isMobile ? '3rem' : '6rem', borderTop: '1px solid var(--gray-light)', paddingTop: isMobile ? '2.5rem' : '4rem' }}>
            <Reveal><div className="section-eyebrow">Valores</div></Reveal>
            <Reveal delay={.1}><h2 className="section-title" style={{ marginBottom: isMobile ? '1.5rem' : '3rem' }}>En qué <em>creemos</em></h2></Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2,1fr)', gap: '1rem', gridAutoRows: 'auto' }}>
              {values.map((v) => (
                <StaggerChild key={v.name} style={{ display: 'flex' }}>
                  <motion.div
                    whileHover={{ y: -3, borderColor: 'var(--lila-mid)' }}
                    style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 18, padding: isMobile ? '1.5rem' : '2rem', width: '100%' }}
                  >
                    <div style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--lila-deep)', marginBottom: '.5rem', letterSpacing: '.08em' }}>{v.icon} {v.name}</div>
                    <p style={{ fontSize: '.8rem', lineHeight: 1.7, color: 'var(--gray)' }}>{v.desc}</p>
                  </motion.div>
                </StaggerChild>
              ))}
            </div>
          </div>

          {/* ── STACK ── */}
          <div style={{ marginTop: isMobile ? '3rem' : '6rem', borderTop: '1px solid var(--gray-light)', paddingTop: isMobile ? '2.5rem' : '4rem' }}>
            <Reveal><div className="section-eyebrow">Herramientas & Stack</div></Reveal>
            <Reveal delay={.1}><h2 className="section-title" style={{ marginBottom: isMobile ? '1.5rem' : '3rem' }}>Con qué <em>trabajamos</em></h2></Reveal>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1rem' }}>
              {stackCategories.map((cat, i) => (
                <Reveal key={cat.label} delay={i * .1}>
                  <motion.div
                    whileHover={{ y: -3, borderColor: 'var(--lila-mid)', boxShadow: '0 12px 30px rgba(124,92,191,.08)' }}
                    style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 20, padding: isMobile ? '1.2rem' : '1.8rem 2rem' }}
                  >
                    <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--lila-deep)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                      <span style={{ width: 16, height: 1, background: 'var(--lila-mid)', display: 'block' }} />
                      {cat.label}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                      {cat.items.map(t => (
                        <span
                          key={t}
                          style={{ display: 'inline-block', padding: '.35rem .8rem', background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: '100px', fontSize: '.7rem', fontWeight: 500, color: 'var(--lila-deep)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default About