import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'
import emailjs from '@emailjs/browser' // 1. Importamos EmailJS
import SEO from '../components/SEO'
import { PageTransition } from '../components/Animations'
import { useIsMobile } from '../hooks/useMediaQuery'

// ── CONFIGURACIÓN EMAILJS ──────────────────────────────────────────────────
const SERVICE_ID = 'service_4urxxib'
const TEMPLATE_ID = 'template_9bsvhkd'
const PUBLIC_KEY = 'aqj_lvltEoBaP5hu8'
// ─────────────────────────────────────────────────────────────────────────────

const servicios = ['Diseño & Desarrollo Web', 'Posicionamiento SEO', 'Redes Sociales', 'Branding & Identidad', 'Marketing con IA', 'Otro / No sé aún']
const presupuestos = ['Menos de 300€', '300€ – 600€', '600€ – 1.000€', 'Más de 1.000€', 'Aún no lo sé']

export default function Contact() {
  const isMobile = useIsMobile()
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', servicio: '', presupuesto: '', mensaje: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Preparamos los parámetros para que coincidan con tus {{etiquetas}} de EmailJS
    const templateParams = {
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono,
      servicio: form.servicio,
      presupuesto: form.presupuesto,
      mensaje: form.mensaje,
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      setStatus('success')
      setForm({ nombre: '', email: '', telefono: '', servicio: '', presupuesto: '', mensaje: '' })
    } catch (error) {
      console.error('Error al enviar:', error)
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '.85rem 1.1rem',
    border: '1px solid var(--gray-light)', borderRadius: 12,
    fontSize: '.88rem', fontFamily: 'var(--font-sans)',
    color: 'var(--black)', background: 'var(--white)',
    outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box',
  }

  return (
    <PageTransition>
      <SEO title="Contacto" description="¿Tienes un proyecto en mente? Primera consulta gratuita sin compromiso. Esencia Studio by Rocío García." canonical="/contacto" />

      {/* ── HERO OSCURO ── */}
      <section style={{
        background: 'var(--dark)',
        position: 'relative',
        overflow: 'hidden',
        padding: isMobile ? '7rem 1.5rem 4rem' : '9rem 4rem 5rem',
      }}>
        {/* Orbs decorativos */}
        <motion.div style={{ position: 'absolute', right: -120, top: -120, width: 500, height: 500, background: 'radial-gradient(circle, rgba(155,127,212,.1), transparent)', borderRadius: '50%', pointerEvents: 'none' }}
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div style={{ position: 'absolute', left: -80, bottom: -80, width: 350, height: 350, background: 'radial-gradient(circle, rgba(155,127,212,.07), transparent)', borderRadius: '50%', pointerEvents: 'none' }}
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '6rem', alignItems: 'center' }}>

            {/* Texto */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <div style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--lila-soft)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.2rem' }}>
                <span style={{ width: 18, height: 1, background: 'var(--lila-soft)', display: 'block' }} />
                Contacto
              </div>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 'clamp(2.8rem,10vw,4rem)' : 'clamp(3rem,6vw,5.5rem)', fontWeight: 300, lineHeight: .95, letterSpacing: '-.03em', color: 'white', marginBottom: '1.5rem' }}>
                Cuéntanos tu<br />
                <em style={{ fontStyle: 'italic', color: 'var(--lila-soft)' }}>proyecto</em>
              </h1>
              <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 420 }}>
                Sin compromiso, sin jerga técnica — solo una conversación honesta sobre lo que necesitas.
              </p>

              {/* Info de contacto */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.9rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: Mail, label: 'hola@esenciastudio.es', href: 'mailto:hola@esenciastudio.es' },
                  { icon: Phone, label: '+34 622 337 967', href: 'tel:+34622337967' },
                  { icon: MapPin, label: 'España · Trabajo remoto', href: null },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '.9rem' }}>
                    <div style={{ width: 36, height: 36, background: 'rgba(155,127,212,.15)', border: '1px solid rgba(155,127,212,.3)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={15} color="var(--lila-soft)" />
                    </div>
                    {href
                      ? <a href={href} style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}>{label}</a>
                      : <span style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.6)' }}>{label}</span>
                    }
                  </div>
                ))}
              </div>

              {/* Redes */}
              <div style={{ display: 'flex', gap: '.7rem' }}>
                {[
                  { icon: Instagram, href: 'https://instagram.com/esenciastudio', label: 'Instagram' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/rociiogarciia', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:hola@esenciastudio.es', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }} aria-label={label}
                    style={{ width: 36, height: 36, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Tarjeta stats */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .2 }}>
              <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 24, padding: isMobile ? '2rem' : '2.5rem' }}>
                <motion.span style={{ width: 10, height: 10, background: '#4eff91', borderRadius: '50%', display: 'inline-block', marginBottom: '1.2rem' }}
                  animate={{ opacity: [1,.3,1] }} transition={{ duration: 1.8, repeat: Infinity }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 300, color: 'white', marginBottom: '.7rem' }}>
                  Primera consulta <em style={{ fontStyle: 'italic', color: 'var(--lila-soft)' }}>gratis</em>
                </h3>
                <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Cuéntame tu proyecto y te respondo en menos de 24h con una propuesta honesta.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.8rem' }}>
                  {[
                    { n: '< 24h', l: 'Tiempo de respuesta' },
                    { n: '100%', l: 'Personalizado' },
                    { n: '0€', l: 'Primera consulta' },
                    { n: '2+', l: 'Años de experiencia' },
                  ].map(s => (
                    <div key={s.n} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, padding: '1rem' }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--lila-soft)', lineHeight: 1 }}>{s.n}</div>
                      <div style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.35)', marginTop: '.3rem' }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO CLARO ── */}
      <section style={{ padding: isMobile ? '4rem 1.5rem 5rem' : '6rem 4rem 8rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          {status === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '5rem 2rem', background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: 24 }}>
              <CheckCircle size={48} color="var(--lila-deep)" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 400, marginBottom: '1rem' }}>¡Mensaje enviado! 🎉</h2>
              <p style={{ fontSize: '.95rem', color: 'var(--gray)', lineHeight: 1.7 }}>Gracias por contactar con Esencia Studio. Te responderé en menos de 24 horas.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : 'clamp(2rem,3vw,2.8rem)', fontWeight: 400, letterSpacing: '-.02em', marginBottom: '.6rem' }}>
                  Cuéntame tu <em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>proyecto</em>
                </h2>
                <p style={{ fontSize: '.88rem', color: 'var(--gray)', marginBottom: '2.5rem' }}>Rellena el formulario y te respondo en menos de 24h.</p>
              </motion.div>

              {/* Nombre + Email */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--black)', letterSpacing: '.08em', display: 'block', marginBottom: '.5rem' }}>NOMBRE *</label>
                  <input name="nombre" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre"
                    style={inputStyle} onFocus={e => e.target.style.borderColor='var(--lila-mid)'} onBlur={e => e.target.style.borderColor='var(--gray-light)'} />
                </div>
                <div>
                  <label style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--black)', letterSpacing: '.08em', display: 'block', marginBottom: '.5rem' }}>EMAIL *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="hola@tunegocio.es"
                    style={inputStyle} onFocus={e => e.target.style.borderColor='var(--lila-mid)'} onBlur={e => e.target.style.borderColor='var(--gray-light)'} />
                </div>
              </div>

              {/* Teléfono */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--black)', letterSpacing: '.08em', display: 'block', marginBottom: '.5rem' }}>TELÉFONO (opcional)</label>
                <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="+34 600 000 000"
                  style={inputStyle} onFocus={e => e.target.style.borderColor='var(--lila-mid)'} onBlur={e => e.target.style.borderColor='var(--gray-light)'} />
              </div>

              {/* Servicio */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--black)', letterSpacing: '.08em', display: 'block', marginBottom: '.8rem' }}>¿QUÉ NECESITAS? *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                  {servicios.map(s => (
                    <motion.button key={s} type="button" whileTap={{ scale: .97 }}
                      onClick={() => setForm(f => ({ ...f, servicio: s }))}
                      style={{ padding: '.42rem .95rem', borderRadius: '100px', fontSize: '.78rem', fontWeight: 500, border: '1px solid', cursor: 'pointer', transition: 'all .2s',
                        background: form.servicio === s ? 'var(--lila-deep)' : 'var(--lila-pale)',
                        color: form.servicio === s ? 'white' : 'var(--lila-deep)',
                        borderColor: form.servicio === s ? 'transparent' : 'var(--lila-mid)',
                      }}>
                      {s}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Presupuesto */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--black)', letterSpacing: '.08em', display: 'block', marginBottom: '.8rem' }}>PRESUPUESTO APROXIMADO</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                  {presupuestos.map(p => (
                    <motion.button key={p} type="button" whileTap={{ scale: .97 }}
                      onClick={() => setForm(f => ({ ...f, presupuesto: p }))}
                      style={{ padding: '.42rem .95rem', borderRadius: '100px', fontSize: '.78rem', fontWeight: 500, border: '1px solid', cursor: 'pointer', transition: 'all .2s',
                        background: form.presupuesto === p ? 'var(--lila-deep)' : 'var(--lila-pale)',
                        color: form.presupuesto === p ? 'white' : 'var(--lila-deep)',
                        borderColor: form.presupuesto === p ? 'transparent' : 'var(--lila-mid)',
                      }}>
                      {p}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Mensaje */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--black)', letterSpacing: '.08em', display: 'block', marginBottom: '.5rem' }}>CUÉNTAME MÁS *</label>
                <textarea name="mensaje" required value={form.mensaje} onChange={handleChange}
                  placeholder="Hola, tengo un negocio de... y me gustaría..."
                  rows={isMobile ? 4 : 5}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                  onFocus={e => e.target.style.borderColor='var(--lila-mid)'}
                  onBlur={e => e.target.style.borderColor='var(--gray-light)'}
                />
              </div>

              {status === 'error' && (
                <p style={{ color: '#e53e3e', fontSize: '.82rem', marginBottom: '1rem' }}>Error al enviar. Escríbeme directamente a hola@esenciastudio.es</p>
              )}

              <motion.button type="submit" disabled={status === 'sending'} whileHover={{ scale: 1.02 }} whileTap={{ scale: .98 }}
                style={{ padding: '1rem 2.2rem', background: 'var(--lila-deep)', color: 'white', border: 'none', borderRadius: '100px', fontSize: '.88rem', fontWeight: 700, cursor: status === 'sending' ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', gap: '.6rem', width: isMobile ? '100%' : 'auto', justifyContent: 'center' }}>
                {status === 'sending' ? 'Enviando...' : <><Send size={15} /> Enviar mensaje</>}
              </motion.button>

              <p style={{ fontSize: '.72rem', color: 'var(--gray)', marginTop: '1rem', lineHeight: 1.6 }}>
                Al enviar aceptas nuestra <a href="/privacidad" style={{ color: 'var(--lila-deep)' }}>política de privacidad</a>. Nunca compartiremos tus datos.
              </p>
            </form>
          )}
        </div>
      </section>
    </PageTransition>
  )
}