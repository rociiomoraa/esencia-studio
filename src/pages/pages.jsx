import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react'
import SEO from '../components/SEO'
import { PageTransition, Reveal, StaggerContainer, StaggerChild, OrbBackground } from '../components/Animations'

/* ══════════════════════════════
   PORTFOLIO
══════════════════════════════ */
export function Portfolio() {
  const projects = [
    {
      num: '01', name: 'Velaris', sub: 'Travel AI Platform',
      cat: 'Full Stack · IA · TFG',
      desc: 'Plataforma de reservas de viajes con inteligencia artificial integrada. Desarrollada íntegramente como proyecto final de grado — front y back desde cero. La IA personaliza recomendaciones de destinos en tiempo real según las preferencias del usuario.',
      tags: ['React', 'Node.js', 'MySQL', 'IA', 'Full Stack'],
      color: '#7c5cbf', bg: '#1a1228',
      featured: true,
    },
    {
      num: '02', name: 'IP10', sub: 'Webs para clientes',
      cat: 'WordPress · SEO · Agencia',
      desc: 'Desarrollo y diseño de webs para negocios locales durante las prácticas en IP10, agencia de marketing digital. WordPress, Elementor, estrategia SEO y presencia digital completa.',
      tags: ['WordPress', 'Elementor', 'SEO', 'Diseño'],
      color: '#5a9e7c', bg: '#0d1a14',
      featured: false,
    },
    {
      num: '03', name: 'Próximamente', sub: 'Tu proyecto aquí',
      cat: 'Nuevo proyecto',
      desc: '¿Tienes un proyecto en mente? Podría ser el siguiente caso de éxito de Esencia Studio. Contacta y hablemos sin compromiso.',
      tags: ['Tu proyecto'],
      color: '#9b7fd4', bg: '#1a1528',
      featured: false, cta: true,
    },
  ]

  return (
    <PageTransition>
      <SEO title="Portfolio" description="Proyectos de Esencia Studio: Velaris (plataforma de viajes con IA), webs WordPress para negocios locales y más. Diseño web y desarrollo full stack." canonical="/portfolio" />

      <section style={{ minHeight: '50vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '10rem 4rem 6rem' }}>
        <OrbBackground />
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="section-eyebrow">Portfolio</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,7vw,6.5rem)', fontWeight: 300, lineHeight: .95, letterSpacing: '-.03em', marginBottom: '1.5rem' }}>
              Proyectos con<br /><em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>esencia</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '0 4rem 8rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((p, i) => (
            <Reveal key={p.num} delay={i * .08}>
              <motion.div whileHover={{ y: p.cta ? -4 : -2 }}
                style={{ background: p.cta ? 'var(--lila-pale)' : p.bg, border: `1px solid ${p.cta ? 'var(--lila-mid)' : p.color + '30'}`, borderRadius: 24, overflow: 'hidden' }}>
                {!p.cta && (
                  <div style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '.62rem', color: p.color, fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.8rem' }}>{p.cat}</div>
                      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: 'white', lineHeight: 1, marginBottom: '.3rem', letterSpacing: '-.02em' }}>
                        <em style={{ fontStyle: 'italic', color: p.color }}>{p.name}</em>
                      </h2>
                      <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,.4)', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>{p.sub}</div>
                      <p style={{ fontSize: '.82rem', lineHeight: 1.8, color: 'rgba(255,255,255,.4)', marginBottom: '1.8rem' }}>{p.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                        {p.tags.map(t => (
                          <span key={t} style={{ padding: '.25rem .7rem', background: `${p.color}18`, border: `1px solid ${p.color}30`, borderRadius: '100px', fontSize: '.62rem', fontWeight: 600, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    {/* Mockup visual */}
                    <div style={{ background: 'rgba(255,255,255,.03)', borderRadius: 16, padding: '2rem', border: `1px solid ${p.color}20`, minHeight: 220, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '90%', background: '#0a0812', borderRadius: 10, border: `1px solid ${p.color}30`, overflow: 'hidden', boxShadow: `0 20px 50px rgba(0,0,0,.5), 0 0 30px ${p.color}15` }}>
                        <div style={{ height: 24, background: '#151020', display: 'flex', alignItems: 'center', padding: '0 .8rem', gap: '.35rem', borderBottom: `1px solid rgba(255,255,255,.04)` }}>
                          {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />)}
                        </div>
                        <div style={{ padding: '.8rem', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                          <div style={{ height: 48, borderRadius: 5, background: `linear-gradient(135deg,${p.color}35,${p.color}18)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '.5rem', color: 'rgba(255,255,255,.3)', letterSpacing: '.12em', textTransform: 'uppercase' }}>{p.name} · {p.sub}</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.4rem' }}>
                            {[1,2,3].map(n => <div key={n} style={{ height: 34, background: 'rgba(255,255,255,.04)', border: `1px solid ${p.color}10`, borderRadius: 4 }} />)}
                          </div>
                          {[1,2].map(n => <div key={n} style={{ height: 5, background: 'rgba(255,255,255,.05)', borderRadius: 3, width: n === 2 ? '65%' : '100%' }} />)}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {p.cta && (
                  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: '.62rem', color: 'var(--lila-deep)', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.8rem' }}>{p.cat}</div>
                      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 400, marginBottom: '.8rem' }}>{p.name} — <em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>{p.sub}</em></h2>
                      <p style={{ fontSize: '.85rem', color: 'var(--gray)', lineHeight: 1.7 }}>{p.desc}</p>
                    </div>
                    <Link to="/contacto"><button className="btn-primary">Hablemos <ArrowRight size={14} /></button></Link>
                  </div>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
      <style>{`@media(max-width:768px){section{padding-left:1.5rem!important;padding-right:1.5rem!important} div[style*="grid-template-columns: 1fr 1fr; gap: 3rem"]{grid-template-columns:1fr!important}}`}</style>
    </PageTransition>
  )
}

/* ══════════════════════════════
   PRICING
══════════════════════════════ */
export function Pricing() {
  const plans = [
    {
      tier: 'Inicio', name: 'Web Básica', price: '350', period: 'pago único', featured: false,
      features: ['Web hasta 5 páginas', 'Diseño responsive (móvil)', 'Formulario de contacto', 'SEO básico incluido', 'Integración Google Maps', '1 mes de soporte gratuito'],
    },
    {
      tier: 'Profesional', name: 'Web + SEO', price: '700', period: '+ 80€/mes mantenimiento', featured: true,
      features: ['Web hasta 10 páginas', 'Diseño personalizado premium', 'SEO completo + Google My Business', 'Blog optimizado para SEO', 'Mantenimiento mensual', 'Informe mensual de resultados', 'Velocidad y seguridad optimizadas', 'Hasta 3 meses de soporte'],
    },
    {
      tier: 'Completo', name: 'Presencia Digital', price: '200', period: '/mes · mín. 3 meses', featured: false,
      features: ['Gestión de 2 redes sociales', '8 posts + 4 reels mensuales', 'SEO y mantenimiento web', 'Estrategia de contenido', 'Informe mensual detallado', 'Respuesta en menos de 24h'],
    },
  ]

  return (
    <PageTransition>
      <SEO title="Precios" description="Precios transparentes para diseño web, SEO y marketing digital. Web básica desde 350€, planes de mantenimiento desde 80€/mes. Esencia Studio." canonical="/precios" />

      <section style={{ minHeight: '50vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '10rem 4rem 6rem' }}>
        <OrbBackground />
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="section-eyebrow">Precios</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,7vw,6.5rem)', fontWeight: 300, lineHeight: .95, letterSpacing: '-.03em', marginBottom: '1.5rem' }}>
              Inversión<br /><em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>transparente</em>
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--gray)', maxWidth: 480, lineHeight: 1.75 }}>Precios claros, sin sorpresas. Adaptados a negocios locales y pymes que quieren crecer sin arruinarse.</p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '0 4rem 8rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <StaggerContainer stagger={.1} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {plans.map(p => (
              <StaggerChild key={p.name}>
                <motion.div whileHover={{ y: -6 }}
                  style={{ background: p.featured ? 'var(--lila-deep)' : 'var(--white)', border: `1px solid ${p.featured ? 'var(--lila-deep)' : 'var(--gray-light)'}`, borderRadius: 22, padding: '2.5rem', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {p.featured && (
                    <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--lila-soft)', color: 'var(--lila-deep)', padding: '.3rem .9rem', borderRadius: '100px', fontSize: '.62rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                      Más popular
                    </div>
                  )}
                  <div style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: p.featured ? 'rgba(255,255,255,.6)' : 'var(--lila-deep)', marginBottom: '.6rem' }}>{p.tier}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: p.featured ? 'white' : 'var(--black)', marginBottom: '1rem' }}>{p.name}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', fontWeight: 300, lineHeight: 1, color: p.featured ? 'white' : 'var(--lila-deep)', marginBottom: '.3rem' }}>
                    <span style={{ fontSize: '1rem' }}>desde </span>{p.price}<span style={{ fontSize: '1rem' }}>€</span>
                  </div>
                  <div style={{ fontSize: '.72rem', color: p.featured ? 'rgba(255,255,255,.4)' : 'var(--gray)', marginBottom: '1.8rem' }}>{p.period}</div>
                  <div style={{ height: 1, background: p.featured ? 'rgba(255,255,255,.15)' : 'var(--gray-light)', marginBottom: '1.5rem' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem', flex: 1 }}>
                    {p.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem' }}>
                        <CheckCircle size={14} color={p.featured ? 'rgba(255,255,255,.5)' : 'var(--lila-deep)'} style={{ marginTop: '.15rem', flexShrink: 0 }} />
                        <span style={{ fontSize: '.78rem', color: p.featured ? 'rgba(255,255,255,.7)' : '#5a5566', lineHeight: 1.4 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contacto" style={{ marginTop: '2rem' }}>
                    <motion.button whileHover={{ scale: 1.02 }}
                      style={{ width: '100%', padding: '.88rem', background: p.featured ? 'white' : 'transparent', color: p.featured ? 'var(--lila-deep)' : 'var(--lila-deep)', border: `1.5px solid ${p.featured ? 'transparent' : 'var(--lila-deep)'}`, borderRadius: '100px', fontSize: '.75rem', fontWeight: 600, cursor: 'none', letterSpacing: '.06em' }}>
                      Solicitar
                    </motion.button>
                  </Link>
                </motion.div>
              </StaggerChild>
            ))}
          </StaggerContainer>
          <Reveal style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ fontSize: '.8rem', color: 'var(--gray)' }}>
              ¿Tu proyecto no encaja?{' '}
              <Link to="/contacto" style={{ color: 'var(--lila-deep)', fontWeight: 600 }}>Hablemos y hacemos un presupuesto a medida →</Link>
            </p>
          </Reveal>
        </div>
      </section>
      <style>{`@media(max-width:768px){section{padding-left:1.5rem!important;padding-right:1.5rem!important} div[style*="grid-template-columns: repeat(3"]{grid-template-columns:1fr!important}}`}</style>
    </PageTransition>
  )
}

/* ══════════════════════════════
   CONTACT
══════════════════════════════ */
export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const btn = e.target.querySelector('button[type=submit]')
    btn.textContent = '¡Mensaje enviado! ✓'
    btn.style.background = '#2d6a3f'
    setTimeout(() => { btn.textContent = 'Enviar mensaje →'; btn.style.background = ''; e.target.reset() }, 3500)
  }

  return (
    <PageTransition>
      <SEO title="Contacto" description="Contacta con Esencia Studio. Primera consulta gratuita. Diseño web, SEO y marketing digital para tu negocio. Respuesta en menos de 24 horas." canonical="/contacto" />

      <section style={{ background: 'var(--dark)', minHeight: '100vh', padding: '10rem 4rem 8rem', position: 'relative', overflow: 'hidden' }}>
        <motion.div style={{ position: 'absolute', right: -200, top: '50%', transform: 'translateY(-50%)', width: 600, height: 600, background: 'radial-gradient(circle,rgba(155,127,212,.1),transparent)', borderRadius: '50%', pointerEvents: 'none' }}
          animate={{ scale: [1,1.1,1] }} transition={{ duration: 8, repeat: Infinity }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--lila-soft)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.8rem' }}>
              <span style={{ width: 18, height: 1, background: 'var(--lila-soft)', display: 'block' }} />
              Contacto
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,7vw,6.5rem)', fontWeight: 300, lineHeight: .95, letterSpacing: '-.03em', color: 'white', marginBottom: '1.5rem' }}>
              Cuéntanos tu<br /><em style={{ fontStyle: 'italic', color: 'var(--lila-soft)' }}>proyecto</em>
            </h1>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginTop: '5rem', alignItems: 'start' }}>
            <Reveal>
              <p style={{ fontSize: '.9rem', lineHeight: 1.8, color: 'rgba(255,255,255,.4)', marginBottom: '2.5rem' }}>
                ¿Tienes un negocio que merece brillar online? Estamos aquí para ayudarte. Sin compromiso, sin jerga técnica — solo una conversación honesta sobre lo que necesitas.
              </p>
              <a href="mailto:hola@esenciastudio.es" style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', color: 'white', fontFamily: 'var(--font-serif)', fontSize: '1.1rem', borderBottom: '1px solid rgba(255,255,255,.15)', paddingBottom: '.25rem', transition: 'color .25s, border-color .25s' }}
                onMouseEnter={e => { e.target.style.color = 'var(--lila-soft)'; e.target.style.borderColor = 'var(--lila-soft)' }}
                onMouseLeave={e => { e.target.style.color = 'white'; e.target.style.borderColor = 'rgba(255,255,255,.15)' }}>
                hola@esenciastudio.es ↗
              </a>
              <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
                {['Respuesta en menos de 24h', 'Primera consulta siempre gratuita', 'Presupuesto sin compromiso'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', fontSize: '.8rem', color: 'rgba(255,255,255,.35)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--lila-soft)' }} />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={.2}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                {[
                  { row: true, fields: [{ label: 'Nombre', type: 'text', placeholder: 'Tu nombre', required: true }, { label: 'Email', type: 'email', placeholder: 'tu@email.com', required: true }] },
                ].map((group, gi) => (
                  <div key={gi} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {group.fields.map(f => (
                      <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                        <label style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.28)' }}>{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder} required={f.required}
                          style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: '.85rem 1.1rem', color: 'white', fontFamily: 'var(--font-sans)', fontSize: '.83rem', outline: 'none' }}
                          onFocus={e => { e.target.style.borderColor = 'var(--lila-soft)'; e.target.style.background = 'rgba(155,127,212,.08)' }}
                          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,.1)'; e.target.style.background = 'rgba(255,255,255,.05)' }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                  <label style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.28)' }}>¿Qué necesitas?</label>
                  <select style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: '.85rem 1.1rem', color: 'rgba(255,255,255,.5)', fontFamily: 'var(--font-sans)', fontSize: '.83rem', outline: 'none', appearance: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--lila-soft)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.1)'}>
                    <option value="" style={{ background: '#1a1528' }}>Selecciona un servicio...</option>
                    {['Diseño & Desarrollo Web', 'SEO & Posicionamiento', 'Gestión de Redes Sociales', 'Branding & Identidad Visual', 'Presencia Digital Completa', 'Otro / No lo sé todavía'].map(o => (
                      <option key={o} value={o} style={{ background: '#1a1528' }}>{o}</option>
                    ))}
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                  <label style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.28)' }}>Cuéntanos más</label>
                  <textarea required rows={5} placeholder="¿A qué se dedica tu negocio? ¿Qué quieres conseguir?..."
                    style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: '.85rem 1.1rem', color: 'white', fontFamily: 'var(--font-sans)', fontSize: '.83rem', outline: 'none', resize: 'none' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--lila-soft)'; e.target.style.background = 'rgba(155,127,212,.08)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,.1)'; e.target.style.background = 'rgba(255,255,255,.05)' }}
                  />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.02, y: -2, boxShadow: '0 10px 28px rgba(124,92,191,.4)' }}
                  style={{ padding: '.9rem 2.2rem', background: 'var(--lila-deep)', color: 'white', border: 'none', borderRadius: '100px', fontSize: '.75rem', fontWeight: 600, cursor: 'none', letterSpacing: '.1em', textTransform: 'uppercase', alignSelf: 'flex-start', transition: 'background .25s' }}>
                  Enviar mensaje →
                </motion.button>
              </form>
            </Reveal>
          </div>
        </div>
        <style>{`input::placeholder,textarea::placeholder{color:rgba(255,255,255,.15)} @media(max-width:768px){section{padding-left:1.5rem!important;padding-right:1.5rem!important;padding-top:8rem!important} div[style*="grid-template-columns: 1fr 1fr; gap: 6rem"]{grid-template-columns:1fr!important;gap:3rem!important} div[style*="grid-template-columns: 1fr 1fr; gap: 1rem"]{grid-template-columns:1fr!important}}`}</style>
      </section>
    </PageTransition>
  )
}
