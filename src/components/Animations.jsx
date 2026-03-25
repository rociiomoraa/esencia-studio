import { motion } from 'framer-motion'

// Page transition wrapper
export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: .5, ease: [.16, 1, .3, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Reveal on scroll
export function Reveal({ children, delay = 0, y = 40, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: .8, delay, ease: [.16, 1, .3, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

// Stagger container
export function StaggerContainer({ children, stagger = .1, style = {} }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

// Stagger child
export function StaggerChild({ children, style = {} }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 36 },
        show: { opacity: 1, y: 0, transition: { duration: .8, ease: [.16, 1, .3, 1] } }
      }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

// Text that types letter by letter
export function TypewriterText({ text, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + i * 0.055, duration: 0 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Marquee
export function Marquee({ items }) {
  const doubled = [...items, ...items, ...items, ...items]
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--gray-light)', borderBottom: '1px solid var(--gray-light)', padding: '1rem 0', background: 'var(--white)' }}>
      <motion.div
        style={{ display: 'flex', width: 'max-content', gap: '3rem' }}
        animate={{ x: [0, '-25%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '3rem', whiteSpace: 'nowrap' }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--lila)', flexShrink: 0 }} />
            <span style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gray)' }}>
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// Hero title slide up
export function HeroTitle({ children, delay = 0 }) {
  return (
    <div style={{ overflow: 'hidden', paddingBottom: '.05em' }}>
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .9, delay, ease: [.16, 1, .3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Floating orb background
export function OrbBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {[
        { size: 400, x: '75%', y: '-15%', delay: 0 },
        { size: 250, x: '5%', y: '70%', delay: -3 },
        { size: 160, x: '55%', y: '80%', delay: -6 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: orb.size, height: orb.size,
            left: orb.x, top: orb.y,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(155,127,212,.18), transparent)`,
            filter: 'blur(50px)',
          }}
          animate={{ y: [0, -25, 0], x: [0, 12, 0] }}
          transition={{ duration: 9 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
        />
      ))}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 80% 30%, rgba(155,127,212,.14) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(196,173,235,.12) 0%, transparent 55%)'
      }} />
    </div>
  )
}
