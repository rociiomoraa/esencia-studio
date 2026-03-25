import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from './Animations'

const faqs = [
  {
    q: '¿Cuánto tiempo tarda en estar lista mi web?',
    a: 'Dependiendo del proyecto, entre 1 y 3 semanas. Una landing page sencilla puede estar en 5-7 días. Una web completa con varias páginas, entre 2 y 3 semanas. Siempre te daré un plazo realista antes de empezar.',
  },
  {
    q: '¿Necesito tener dominio y hosting antes de contactarte?',
    a: 'No es necesario. Puedo ayudarte a elegir y contratar el dominio y hosting más adecuado para tu proyecto, o trabajar con los que ya tengas. Te guío en todo el proceso.',
  },
  {
    q: '¿Qué pasa si no me gusta el resultado?',
    a: 'Antes de empezar a desarrollar hacemos una fase de diseño donde verás exactamente cómo quedará tu web. Incluyo hasta 2 rondas de revisiones para asegurarme de que el resultado sea exactamente lo que necesitas.',
  },
  {
    q: '¿Podré gestionar mi web yo misma después?',
    a: 'Sí, absolutamente. Si usamos WordPress, es muy intuitivo y te formo para que puedas actualizar contenido, añadir entradas de blog o cambiar imágenes sin necesidad de saber programar.',
  },
  {
    q: '¿El SEO da resultados reales?',
    a: 'Sí, pero requiere tiempo. Los primeros resultados se suelen ver entre 2 y 4 meses. El SEO no es magia rápida, es una inversión a largo plazo que trae tráfico constante y gratuito. Incluyo optimización SEO en todas las webs que creo.',
  },
  {
    q: '¿Trabajas solo con negocios de España?',
    a: 'Principalmente con negocios en España, aunque puedo trabajar con clientes de habla hispana de cualquier país. Todo el trabajo se hace de forma remota, así que la ubicación no es un problema.',
  },
  {
    q: '¿Cómo es el proceso de pago?',
    a: 'Trabajo con un 50% al inicio del proyecto y el 50% restante al entregar el trabajo terminado. Para proyectos más grandes podemos acordar pagos por hitos. Acepto transferencia bancaria y Bizum.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <motion.div
      style={{
        borderBottom: '1px solid var(--gray-light)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.05rem',
          fontWeight: 500,
          color: isOpen ? 'var(--lila-deep)' : 'var(--black)',
          lineHeight: 1.4,
          transition: 'color .2s',
        }}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: .2 }}
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: isOpen ? 'var(--lila-deep)' : 'var(--lila-pale)',
            border: '1px solid var(--lila-mid)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background .2s, border-color .2s',
          }}
        >
          <Plus size={14} color={isOpen ? 'white' : 'var(--lila-deep)'} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .3, ease: [.04, .62, .23, .98] }}
          >
            <p style={{
              fontSize: '.88rem',
              lineHeight: 1.8,
              color: '#5a5566',
              paddingBottom: '1.5rem',
              paddingRight: '3rem',
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section style={{ padding: '0 4rem 8rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: '8rem' }}>
              <Reveal><div className="section-eyebrow">FAQ</div></Reveal>
              <Reveal delay={.1}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-.02em', marginBottom: '1.5rem' }}>
                  Preguntas <em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>frecuentes</em>
                </h2>
              </Reveal>
              <Reveal delay={.2}>
                <p style={{ fontSize: '.85rem', lineHeight: 1.8, color: 'var(--gray)', marginBottom: '2rem' }}>
                  ¿Tienes dudas? Aquí respondo las más habituales. Si no encuentras la tuya, escríbeme.
                </p>
                <a href="/contacto" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    style={{
                      padding: '.8rem 1.6rem',
                      background: 'var(--lila-pale)',
                      border: '1px solid var(--lila-mid)',
                      borderRadius: '100px',
                      fontSize: '.78rem',
                      fontWeight: 600,
                      color: 'var(--lila-deep)',
                      cursor: 'pointer',
                    }}
                  >
                    Hacer una pregunta →
                  </motion.button>
                </a>
              </Reveal>
            </div>

            <Reveal delay={.1}>
              <div>
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){section > div > div > div[style*="grid-template-columns: 1fr 2fr"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}