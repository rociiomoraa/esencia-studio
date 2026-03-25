import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Globe, TrendingUp, Instagram, Palette, Bot, ArrowRight, CheckCircle } from 'lucide-react'
import SEO from '../components/SEO'
import { PageTransition, Reveal, StaggerContainer, StaggerChild, OrbBackground } from '../components/Animations'

const services = [
  {
    icon: Globe,
    num: '01',
    name: 'Diseño & Desarrollo Web',
    tagline: 'Tu presencia online, redefinida.',
    desc: 'Creamos webs que no solo son bonitas — son herramientas de negocio. Cada web está pensada para guiar al visitante hacia la acción que tú quieres: una llamada, un formulario, una venta.',
    features: ['Diseño responsive (móvil, tablet, escritorio)', 'WordPress + Elementor Pro', 'Velocidad optimizada (Core Web Vitals)', 'SEO técnico desde el primer día', 'Panel de administración fácil de usar', 'Formularios y llamadas a la acción', 'Integración con Google Analytics', 'Certificado SSL incluido'],
    tags: ['WordPress', 'Elementor', 'React', 'Responsive', 'SEO'],
    from: '350€',
    color: '#7c5cbf',
  },
  {
    icon: TrendingUp,
    num: '02',
    name: 'Posicionamiento SEO',
    tagline: 'Aparece cuando te buscan.',
    desc: 'El 90% de las búsquedas online terminan en la primera página de Google. Con nuestra estrategia SEO, tu negocio deja de ser invisible y empieza a aparecer exactamente cuando tus clientes potenciales te necesitan.',
    features: ['Auditoría SEO completa inicial', 'Investigación de palabras clave', 'Optimización de contenido existente', 'SEO local (Google My Business)', 'Linkbuilding y autoridad de dominio', 'Informes mensuales de posicionamiento', 'Optimización de velocidad de carga', 'Schema markup y datos estructurados'],
    tags: ['Google', 'SEO Local', 'Contenido', 'Analytics', 'Posicionamiento'],
    from: '150€/mes',
    color: '#5a9e7c',
  },
  {
    icon: Instagram,
    num: '03',
    name: 'Gestión de Redes Sociales',
    tagline: 'Contenido que conecta y convierte.',
    desc: 'Las redes sociales son el escaparate digital de tu negocio. Creamos contenido estratégico, visual y constante para Instagram, Facebook y TikTok que construye comunidad y genera clientes reales.',
    features: ['Estrategia de contenido personalizada', 'Diseño de posts y stories', 'Producción y edición de Reels', 'Gestión de comentarios y DMs', 'Hashtag research y optimización', 'Calendario editorial mensual', 'Reportes de métricas y alcance', 'Publicidad en redes (adicional)'],
    tags: ['Instagram', 'TikTok', 'Facebook', 'Reels', 'Contenido'],
    from: '120€/mes',
    color: '#e8764a',
  },
  {
    icon: Palette,
    num: '04',
    name: 'Branding & Identidad Visual',
    tagline: 'La imagen que te hace recordar.',
    desc: 'Tu marca es mucho más que un logotipo. Es la primera impresión, la confianza que generas, la diferencia entre que te elijan a ti o a tu competencia. Creamos identidades visuales con carácter y coherencia.',
    features: ['Diseño de logotipo (3 propuestas)', 'Paleta de colores corporativos', 'Tipografía corporativa', 'Guía de estilo (brandbook)', 'Aplicaciones: tarjetas, firma email', 'Diseño de plantillas redes sociales', 'Revisiones ilimitadas', 'Archivos en todos los formatos'],
    tags: ['Logo', 'Branding', 'Figma', 'Identidad', 'Diseño'],
    from: '250€',
    color: '#d4728e',
  },
  {
    icon: Bot,
    num: '05',
    name: 'Marketing Digital con IA',
    tagline: 'El futuro del marketing, ahora.',
    desc: 'Integramos inteligencia artificial en tu estrategia de marketing para crear más contenido, de mejor calidad y en menos tiempo. Desde copywriting hasta análisis de datos — la IA trabaja para que tú crezcas más rápido.',
    features: ['Copywriting con IA para tu web', 'Generación de contenido para redes', 'Automatización de respuestas', 'Análisis de competencia con IA', 'Email marketing automatizado', 'Chatbot básico para web', 'Optimización de anuncios con datos', 'Formación en herramientas de IA'],
    tags: ['IA', 'Automatización', 'ChatGPT', 'Contenido', 'Estrategia'],
    from: '100€/mes',
    color: '#7b8ee8',
  },
]

export default function Services() {
  return (
    <PageTransition>
      <SEO
        title="Servicios"
        description="Diseño web, SEO, redes sociales, branding y marketing digital con IA. Servicios digitales completos para negocios locales en España. Esencia Studio by Rocío García."
        keywords="diseño web profesional, SEO posicionamiento Google, gestión redes sociales, branding identidad visual, marketing digital IA"
        canonical="/servicios"
      />

      {/* HEADER */}
      <section style={{ minHeight: '60vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '10rem 4rem 6rem' }}>
        <OrbBackground />
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="section-eyebrow">Servicios</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,7vw,6.5rem)', fontWeight: 300, lineHeight: .95, letterSpacing: '-.03em', marginBottom: '1.5rem' }}>
              Todo lo que necesitas<br /><em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>para crecer online</em>
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--gray)', maxWidth: 520, lineHeight: 1.75 }}>
              Desde la web hasta las redes sociales, cubrimos toda tu presencia digital con estrategia, diseño y tecnología.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section style={{ padding: '0 4rem 8rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {services.map((s, i) => (
            <Reveal key={s.num} delay={.05}>
              <motion.div
                whileHover={{ scale: 1.005 }}
                style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 24, overflow: 'hidden', transition: 'border-color .3s' }}
              >
                {/* Top bar */}
                <div style={{ height: 4, background: `linear-gradient(to right, ${s.color}44, ${s.color})` }} />
                <div style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'start' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ width: 52, height: 52, borderRadius: 14, background: `${s.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${s.color}30` }}>
                        <s.icon size={22} color={s.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: '.62rem', color: s.color, fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.2rem' }}>{s.num}</div>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, lineHeight: 1.1 }}>{s.name}</h2>
                      </div>
                    </div>
                    <p style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: s.color, marginBottom: '1rem' }}>{s.tagline}</p>
                    <p style={{ fontSize: '.85rem', lineHeight: 1.8, color: '#5a5566', marginBottom: '1.5rem' }}>{s.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '2rem' }}>
                      {s.tags.map(t => (
                        <span key={t} style={{ padding: '.25rem .7rem', background: `${s.color}12`, border: `1px solid ${s.color}25`, borderRadius: '100px', fontSize: '.62rem', fontWeight: 600, color: s.color, textTransform: 'uppercase', letterSpacing: '.08em' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ fontSize: '.6rem', color: 'var(--gray)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Desde</div>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: s.color }}>{s.from}</div>
                      </div>
                      <Link to="/contacto">
                        <motion.button whileHover={{ scale: 1.03 }}
                          style={{ padding: '.75rem 1.8rem', background: s.color, color: 'white', border: 'none', borderRadius: '100px', fontSize: '.75rem', fontWeight: 600, cursor: 'none', letterSpacing: '.04em', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                          Solicitar <ArrowRight size={13} />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '.62rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '1.2rem' }}>Qué incluye</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.6rem' }}>
                      {s.features.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem' }}>
                          <CheckCircle size={14} color={s.color} style={{ marginTop: '.15rem', flexShrink: 0 }} />
                          <span style={{ fontSize: '.78rem', lineHeight: 1.5, color: '#5a5566' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 4rem 8rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: 24, padding: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 400, marginBottom: '.8rem', letterSpacing: '-.02em' }}>
                  ¿No sabes cuál es el servicio <em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>que necesitas?</em>
                </h2>
                <p style={{ fontSize: '.88rem', color: 'var(--gray)', maxWidth: 420, lineHeight: 1.7 }}>Cuéntanos tu situación y te recomendamos sin compromiso. Primera consulta siempre gratuita.</p>
              </div>
              <Link to="/contacto"><button className="btn-primary">Consulta gratuita <ArrowRight size={14} /></button></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`@media(max-width:768px){section{padding-left:1.5rem!important;padding-right:1.5rem!important} div[style*="grid-template-columns: 1fr 1.2fr"]{grid-template-columns:1fr!important} div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </PageTransition>
  )
}
