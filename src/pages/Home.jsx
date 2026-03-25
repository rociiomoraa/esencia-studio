import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, TrendingUp, Instagram, Palette, Bot, Zap, Target, Heart, BarChart2, Star, Plus } from 'lucide-react'
import { useState } from 'react'
import SEO from '../components/SEO'
import { PageTransition, Reveal, StaggerContainer, StaggerChild, Marquee, HeroTitle, OrbBackground } from '../components/Animations'
import { useIsMobile, useIsTablet } from '../hooks/useMediaQuery'

const services = [
  { icon: Globe, num: '01', name: 'Diseño & Desarrollo Web', desc: 'Webs modernas, rápidas y adaptadas a todos los dispositivos construidas con WordPress y código propio.' },
  { icon: TrendingUp, num: '02', name: 'Posicionamiento SEO', desc: 'Aparecer en Google cuando tus clientes te buscan. Estrategia, contenido y resultados medibles.' },
  { icon: Instagram, num: '03', name: 'Redes Sociales', desc: 'Contenido creativo para Instagram, Facebook y TikTok que conecta y convierte.' },
  { icon: Palette, num: '04', name: 'Branding & Identidad', desc: 'Logotipo, paleta, tipografía. La imagen que hace que tu negocio se recuerde.' },
  { icon: Bot, num: '05', name: 'Marketing con IA', desc: 'Estrategias potenciadas con inteligencia artificial para resultados más rápidos y precisos.' },
]

const whyUs = [
  { icon: Zap, name: 'Entrega rápida', desc: 'Gracias al uso de IA y herramientas modernas, entregamos proyectos en la mitad de tiempo sin sacrificar calidad.' },
  { icon: Target, name: 'Webs que convierten', desc: 'Cada decisión de diseño tiene un propósito: que tus visitantes se conviertan en clientes reales.' },
  { icon: Heart, name: 'Atención personalizada', desc: 'Somos un estudio pequeño por elección. Cada cliente importa y recibe tiempo y dedicación real.' },
  { icon: BarChart2, name: 'Transparencia total', desc: 'Informes claros, comunicación directa. Sabrás exactamente qué estamos haciendo y por qué.' },
]

const stats = [
  { num: '100%', label: 'Proyectos personalizados' },
  { num: '< 24h', label: 'Tiempo de respuesta' },
  { num: '2+', label: 'Años de formación' },
  { num: '+IA', label: 'Siempre potenciado' },
]

const marqueeItems = ['Diseño Web', 'WordPress', 'SEO', 'Redes Sociales', 'Branding', 'IA', 'Elementor', 'Marketing Digital', 'React', 'Figma']

const testimonials = [
  { name: 'María López', role: 'Dueña de tienda online', text: 'Rocío transformó completamente mi presencia online. Mi web nueva convierte el doble que la anterior y el SEO está funcionando de maravilla.', initial: 'ML' },
  { name: 'Carlos Fernández', role: 'Restaurante El Rincón', text: 'Profesional, rápida y muy detallista. Entendió perfectamente lo que necesitaba para mi negocio y entregó mucho más de lo esperado.', initial: 'CF' },
  { name: 'Ana Martínez', role: 'Consultora independiente', text: 'Gracias a Esencia Studio conseguí mis primeros clientes online. La web es preciosa y el SEO me trajo resultados en menos de 2 meses.', initial: 'AM' },
]

const faqs = [
  { q: '¿Cuánto tiempo tarda en estar lista mi web?', a: 'Entre 1 y 3 semanas según el proyecto. Una landing page puede estar en 5-7 días. Una web completa, entre 2 y 3 semanas.' },
  { q: '¿Necesito dominio y hosting antes de contactarte?', a: 'No. Puedo ayudarte a elegir y contratar lo más adecuado para tu proyecto, o trabajar con los que ya tengas.' },
  { q: '¿Qué pasa si no me gusta el resultado?', a: 'Hacemos una fase de diseño previa donde verás cómo quedará tu web. Incluyo hasta 2 rondas de revisiones.' },
  { q: '¿Podré gestionar mi web yo misma después?', a: 'Sí. Con WordPress es muy intuitivo y te formo para que puedas actualizar contenido sin saber programar.' },
  { q: '¿El SEO da resultados reales?', a: 'Sí, pero requiere tiempo. Los primeros resultados se ven entre 2 y 4 meses. Es una inversión a largo plazo.' },
  { q: '¿Cómo es el proceso de pago?', a: '50% al inicio del proyecto y 50% al entregar. Acepto transferencia bancaria y Bizum.' },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '.2rem', marginBottom: '1rem' }}>
      {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="var(--lila-deep)" color="var(--lila-deep)" />)}
    </div>
  )
}

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--gray-light)' }}>
      <button onClick={onToggle} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.3rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '.98rem', fontWeight: 500, color: isOpen ? 'var(--lila-deep)' : 'var(--black)', lineHeight: 1.4, transition: 'color .2s' }}>{q}</span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: .2 }}
          style={{ width: 28, height: 28, borderRadius: '50%', background: isOpen ? 'var(--lila-deep)' : 'var(--lila-pale)', border: '1px solid var(--lila-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background .2s' }}>
          <Plus size={13} color={isOpen ? 'white' : 'var(--lila-deep)'} />
        </motion.div>
      </button>
      <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: .3, ease: [.04,.62,.23,.98] }} style={{ overflow: 'hidden' }}>
        <p style={{ fontSize: '.85rem', lineHeight: 1.8, color: '#5a5566', paddingBottom: '1.3rem' }}>{a}</p>
      </motion.div>
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  const sectionPad = isMobile ? '4rem 1.5rem' : '8rem 4rem'

  return (
    <PageTransition>
      <SEO description="Esencia Studio: diseño web profesional, SEO y marketing digital para negocios locales en España. by Rocío García." keywords="diseño web, marketing digital, SEO, redes sociales, WordPress, agencia digital España" canonical="/" />

      {/* ── HERO ── */}
      <section style={{
        minHeight: isMobile ? 'auto' : '100vh',
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '7rem 1.5rem 4rem' : '0 4rem',
        gap: isMobile ? '3rem' : '2rem',
      }}>
        <OrbBackground />
        
        {/* Contenido Texto */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 700, width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', padding: '.35rem .9rem', borderRadius: '100px', marginBottom: '1.8rem' }}>
            <motion.span style={{ width: 6, height: 6, background: 'var(--lila-deep)', borderRadius: '50%' }} animate={{ opacity: [1,.3,1] }} transition={{ duration: 2, repeat: Infinity }} />
            <span style={{ fontSize: '.62rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--lila-deep)' }}>Estudio Digital · Disponible para proyectos</span>
          </motion.div>
          
          <HeroTitle delay={.35}><span style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 'clamp(4rem,15vw,6rem)' : 'clamp(4rem,8vw,9rem)', fontWeight: 300, lineHeight: .9, letterSpacing: '-.03em', display: 'block' }}>Esencia</span></HeroTitle>
          <HeroTitle delay={.55}><span style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 'clamp(4rem,15vw,6rem)' : 'clamp(4rem,8vw,9rem)', fontWeight: 300, lineHeight: .9, letterSpacing: '-.03em', fontStyle: 'italic', color: 'var(--lila-deep)', display: 'block' }}>Studio.</span></HeroTitle>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9, duration: .7 }}
            style={{ fontSize: 'clamp(.88rem,1.5vw,1.05rem)', fontWeight: 300, color: 'var(--gray)', lineHeight: 1.75, maxWidth: 460, marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            Diseño web, marketing digital y presencia online para negocios que quieren{' '}
            <strong style={{ color: 'var(--black)', fontWeight: 500 }}>crecer de verdad</strong>. Webs que convierten, estrategias que funcionan.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: .7 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contacto"><button className="btn-primary">Empieza tu proyecto <ArrowRight size={14} /></button></Link>
            <Link to="/servicios"><button className="btn-ghost">Ver servicios</button></Link>
          </motion.div>
        </div>

        {/* Stats — Desktop */}
        {!isMobile && (
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, duration: .8 }}
            style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {stats.map((s, i) => (
              <motion.div key={i} whileHover={{ x: -4, scale: 1.02 }}
                style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 18, padding: '1.2rem 1.6rem', boxShadow: '0 4px 20px rgba(0,0,0,.05)', minWidth: 160 }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.7rem', fontWeight: 600, color: 'var(--lila-deep)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '.7rem', color: 'var(--gray)', marginTop: '.25rem' }}>{s.label}</div>
              </motion.div>
            ))}
            <div style={{ background: 'var(--lila-deep)', borderRadius: 14, padding: '1rem 1.4rem' }}>
              <div style={{ fontSize: '.7rem', fontWeight: 600, color: 'white', letterSpacing: '.06em' }}>by Rocío García</div>
              <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.55)', marginTop: '.2rem' }}>Diseñadora & Dev Web</div>
            </div>
          </motion.div>
        )}

        {/* Stats móvil — Corregido para que no se superponga */}
        {isMobile && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
            style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.6rem', width: '100%' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 14, padding: '.9rem 1rem', boxShadow: '0 4px 20px rgba(0,0,0,.05)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--lila-deep)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '.65rem', color: 'var(--gray)', marginTop: '.2rem' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Bottom bar — Desktop */}
        {!isMobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid var(--gray-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.3rem 4rem', background: 'rgba(250,248,253,.7)', backdropFilter: 'blur(10px)', zIndex: 2 }}>
            <div style={{ fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gray)', display: 'flex', alignItems: 'center', gap: '.8rem' }}>
              <motion.div style={{ width: 36, height: 1, background: 'var(--gray-light)', overflow: 'hidden', position: 'relative' }}>
                <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--lila-deep)' }} animate={{ x: ['-100%','100%'] }} transition={{ duration: 2, repeat: Infinity }} />
              </motion.div>
              Scroll para explorar
            </div>
            <div style={{ display: 'flex', gap: '1.8rem' }}>
              {['Diseño Web', 'SEO', 'Redes Sociales', 'Branding'].map(s => (
                <span key={s} style={{ fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gray)' }}>{s}</span>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      <Marquee items={marqueeItems} />

      {/* ── SERVICES ── */}
      <section style={{ padding: sectionPad }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--gray-light)', gap: '1rem' }}>
            <Reveal><div><div className="section-eyebrow">Servicios</div><h2 className="section-title">Todo lo que tu negocio<br /><em>necesita online</em></h2></div></Reveal>
            <Reveal delay={.2}><Link to="/servicios"><button className="btn-ghost">Ver todos <ArrowRight size={14} /></button></Link></Reveal>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3,1fr)', gap: '1.2rem', gridAutoRows: '1fr' }}>
            {services.slice(0,3).map((s) => (<StaggerChild key={s.num} style={{ display: 'flex' }}><ServiceCard {...s} /></StaggerChild>))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.2rem', marginTop: '1.2rem', gridAutoRows: '1fr' }}>
            {services.slice(3).map((s) => (<StaggerChild key={s.num} style={{ display: 'flex' }}><ServiceCard {...s} /></StaggerChild>))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: isMobile ? '0 1.5rem 4rem' : '0 4rem 8rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ background: 'var(--dark)', borderRadius: 24, padding: isMobile ? '2.5rem 1.8rem' : '5rem', position: 'relative', overflow: 'hidden' }}>
              <motion.div style={{ position: 'absolute', right: -100, top: -100, width: 400, height: 400, background: 'radial-gradient(circle,rgba(155,127,212,.12),transparent)', borderRadius: '50%', pointerEvents: 'none' }} animate={{ scale: [1,1.1,1] }} transition={{ duration: 8, repeat: Infinity }} />
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--lila-soft)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '.8rem' }}><span style={{ width: 18, height: 1, background: 'var(--lila-soft)', display: 'block' }} />Proceso</div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : 'clamp(2rem,3.5vw,3rem)', fontWeight: 400, color: 'white', letterSpacing: '-.02em' }}>Cómo <em style={{ fontStyle: 'italic', color: 'var(--lila-soft)' }}>trabajamos</em></h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: isMobile ? '1.5rem' : '2rem', position: 'relative', zIndex: 2 }}>
                {[
                  { n: '01', name: 'Descubrimiento', desc: 'Entendemos tu negocio, tus objetivos y a quién quieres llegar.' },
                  { n: '02', name: 'Estrategia & Diseño', desc: 'Diseñamos el mockup antes de escribir código.' },
                  { n: '03', name: 'Desarrollo', desc: 'Construimos con atención al detalle y optimización SEO.' },
                  { n: '04', name: 'Entrega & Soporte', desc: 'Publicamos, te formamos y ofrecemos soporte.' },
                ].map((step, i) => (
                  <div key={i} style={{ position: 'relative' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, color: 'rgba(155,127,212,.2)', lineHeight: 1, marginBottom: '.7rem' }}>{step.n}</div>
                    <div style={{ fontSize: isMobile ? '.82rem' : '.88rem', fontWeight: 600, color: 'white', marginBottom: '.5rem' }}>{step.name}</div>
                    <p style={{ fontSize: '.75rem', lineHeight: 1.7, color: 'rgba(255,255,255,.33)' }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: isMobile ? '0 1.5rem 4rem' : '0 4rem 8rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: isMobile ? '2.5rem' : '4rem', marginBottom: isMobile ? '2rem' : '3rem' }}>
            <Reveal><div className="section-eyebrow">¿Por qué elegirnos?</div></Reveal>
            <Reveal delay={.1}><h2 className="section-title">Lo que nos hace <em>diferentes</em></h2></Reveal>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.2rem' }}>
            {whyUs.map((item, i) => (
              <StaggerChild key={i}>
                <motion.div whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(124,92,191,.1)' }}
                  style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 20, padding: isMobile ? '1.5rem' : '2.2rem', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', transition: 'border-color .3s' }}>
                  <div style={{ width: 44, height: 44, background: 'var(--lila-pale)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--lila-mid)' }}>
                    <item.icon size={20} color="var(--lila-deep)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '.88rem', fontWeight: 600, marginBottom: '.4rem' }}>{item.name}</div>
                    <p style={{ fontSize: '.8rem', lineHeight: 1.7, color: 'var(--gray)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section style={{ padding: isMobile ? '0 1.5rem 4rem' : '0 4rem 8rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: isMobile ? '2.5rem' : '4rem', marginBottom: isMobile ? '2rem' : '3rem' }}>
            <Reveal><div className="section-eyebrow">Testimonios</div></Reveal>
            <Reveal delay={.1}><h2 className="section-title">Lo que dicen <em>nuestros clientes</em></h2></Reveal>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3,1fr)', gap: '1.2rem', gridAutoRows: '1fr' }}>
            {testimonials.map((t, i) => (
              <StaggerChild key={i} style={{ display: 'flex' }}>
                <motion.div whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(124,92,191,.1)', borderColor: 'var(--lila-mid)' }}
                  style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 20, padding: isMobile ? '1.5rem' : '2rem', width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', transition: 'border-color .3s', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '1rem', right: '1.2rem', fontFamily: 'var(--font-serif)', fontSize: '4rem', lineHeight: 1, color: 'var(--lila-pale)', fontWeight: 700, userSelect: 'none' }}>"</div>
                  <Stars />
                  <p style={{ fontSize: '.84rem', lineHeight: 1.8, color: '#5a5566', flex: 1, marginBottom: '1.2rem', position: 'relative', zIndex: 1 }}>{t.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.9rem', borderTop: '1px solid var(--gray-light)', paddingTop: '1rem' }}>
                    <div style={{ width: 38, height: 38, background: 'linear-gradient(135deg, var(--lila-soft), var(--lila-deep))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.68rem', fontWeight: 700, color: 'white', flexShrink: 0 }}>{t.initial}</div>
                    <div>
                      <div style={{ fontSize: '.82rem', fontWeight: 600 }}>{t.name}</div>
                      <div style={{ fontSize: '.72rem', color: 'var(--gray)' }}>{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: isMobile ? '0 1.5rem 4rem' : '0 4rem 8rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: isMobile ? '2.5rem' : '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? '2rem' : '6rem', alignItems: 'start' }}>
              <div style={isMobile ? {} : { position: 'sticky', top: '8rem' }}>
                <Reveal><div className="section-eyebrow">FAQ</div></Reveal>
                <Reveal delay={.1}>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : 'clamp(2rem,3vw,2.8rem)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-.02em', marginBottom: '1rem' }}>
                    Preguntas <em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>frecuentes</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={.1}>
                <div>
                  {faqs.map((faq, i) => (
                    <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: isMobile ? '0 1.5rem 5rem' : '0 4rem 8rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <motion.div whileHover={{ scale: 1.01 }}
              style={{ background: 'linear-gradient(135deg, var(--lila-deep), #5a3a9e)', borderRadius: 24, padding: isMobile ? '3rem 2rem' : '5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 'clamp(2rem,8vw,2.8rem)' : 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 300, color: 'white', lineHeight: 1.1, marginBottom: '1.2rem', letterSpacing: '-.02em' }}>
                  ¿Listo para una <em style={{ fontStyle: 'italic', color: 'var(--lila-soft)' }}>web que trabaje</em> por ti?
                </h2>
                <p style={{ fontSize: isMobile ? '.88rem' : '1rem', color: 'rgba(255,255,255,.55)', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>Primera consulta gratuita. Sin compromiso.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/contacto"><motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} style={{ padding: '.9rem 2rem', background: 'white', color: 'var(--lila-deep)', border: 'none', borderRadius: '100px', fontSize: '.82rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '.04em' }}>Empieza ahora →</motion.button></Link>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}

function ServiceCard({ icon: Icon, num, name, desc }) {
  return (
    <motion.div whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(124,92,191,.1)', borderColor: 'var(--lila-mid)' }}
      style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 20, padding: '2rem', position: 'relative', overflow: 'hidden', cursor: 'default', transition: 'border-color .3s', width: '100%', height: '100%', boxSizing: 'border-box' }}>
      <div style={{ width: 46, height: 46, background: 'var(--lila-pale)', borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.3rem', border: '1px solid var(--lila-mid)' }}>
        <Icon size={20} color="var(--lila-deep)" />
      </div>
      <div style={{ fontSize: '.72rem', fontFamily: 'var(--font-serif)', color: 'var(--lila-soft)', marginBottom: '.4rem' }}>{num}</div>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '.7rem', lineHeight: 1.2 }}>{name}</h3>
      <p style={{ fontSize: '.8rem', lineHeight: 1.75, color: 'var(--gray)' }}>{desc}</p>
    </motion.div>
  )
}