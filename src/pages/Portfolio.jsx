import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Globe, TrendingUp, Palette, Code } from 'lucide-react'
import SEO from '../components/SEO'
import { PageTransition, Reveal, OrbBackground } from '../components/Animations'
import { useIsMobile } from '../hooks/useMediaQuery'

const projects = [
    {
        id: 'hecate-viajes',
        label: 'Proyecto real',
        name: 'Hécate Viajes',
        tagline: 'Agencia de viajes con alma aventurera',
        category: ['Diseño Web', 'WordPress', 'Elementor'],
        year: '2024',
        context: 'Proyecto desarrollado durante las prácticas en IP10, agencia de marketing digital.',
        url: 'https://hecateviajes.es',
        bg: 'linear-gradient(135deg, #0a2540 0%, #1a4a7a 100%)',
        accentColor: '#3b9edd',
        challenge: 'Hécate Viajes necesitaba una presencia digital que transmitiera la emoción y el espíritu aventurero de sus viajes. Necesitaban mostrar su catálogo de tours de forma atractiva, con sistema de filtrado por destino y páginas de detalle para cada viaje.',
        solution: 'Diseñé y desarrollé una web completa en WordPress con Elementor. Incluye un hero cinematográfico con slider de destinos, sistema de filtrado de tours por categoría (América, Asia, Europa), sección de escapadas, guías de viajes y formulario de contacto para viajes a medida.',
        result: 'Web completamente funcional, publicada y en producción. Diseño responsive para todos los dispositivos, estructura clara que facilita la navegación y el proceso de reserva, e identidad visual coherente con la marca.',
        services: [
            { icon: Globe, label: 'Desarrollo web completo en WordPress' },
            { icon: Palette, label: 'Diseño visual y maquetación con Elementor' },
            { icon: Code, label: 'Desarrollo responsive mobile-first' },
            { icon: TrendingUp, label: 'Estructura SEO y velocidad optimizada' },
        ],
        highlights: [
            { num: '7+', label: 'Páginas diseñadas' },
            { num: '100%', label: 'Responsive' },
            { num: 'WP', label: 'WordPress + Elementor' },
            { num: '2024', label: 'Año del proyecto' },
        ],
    },
    {
        id: 'velaris',
        label: 'TFG DAM',
        name: 'Velaris',
        tagline: 'Gestión y reserva de viajes con asistencia de Inteligencia Artificial',
        category: ['React', 'Spring Boot', 'Java', 'IA'],
        year: '2024',
        context: 'Trabajo de Fin de Grado (TFG) del ciclo de DAM (Desarrollo de Aplicaciones Multiplataforma).',
        url: 'https://github.com/rociomora/velaris',
    bg: 'linear-gradient(135deg, #cc7cb9ff 0%, #a04368ff 100%)',
    accentColor: '#1de9b6',
        challenge: 'Crear una plataforma de viajes con funcionalidades avanzadas para usuarios (exploración, reservas, favoritos, cuenta atrás) y administradores (dashboard de KPIs, informes en CSV), integrando un asistente virtual que recomienda destinos.',
        solution: 'Desarrollé una arquitectura Full Stack completa: un Frontend modular en React y un Backend hiper seguro en Spring Boot (API REST + JWT). Orquesté un modelo de lenguaje para dar vida a "Vera", el asistente integrado en toda la app.',
        result: 'Una aplicación moderna, rápida y escalable con identidad visual hawaiana (rosa hibisco y turquesa). Cumple sobradamente los requisitos técnicos de grado y destaca por sus animaciones y la experiencia de usuario guiada por IA.',
        services: [
            { icon: Code, label: 'Desarrollo Frontend en React' },
            { icon: Globe, label: 'Backend API REST en Spring Boot' },
            { icon: TrendingUp, label: 'Panel de Administración y KPIs' },
            { icon: Palette, label: 'Diseño UX/UI (Web & Identidad)' },
        ],
        highlights: [
            { num: 'IA', label: 'Asistente Vera' },
            { num: 'JWT', label: 'Seguridad' },
            { num: 'API', label: 'Arquitectura REST' },
            { num: 'TFG', label: 'Proyecto Final' },
        ],
    },
]

export default function Portfolio() {
    const isMobile = useIsMobile()

    return (
        <PageTransition>
            <SEO
                title="Portfolio"
                description="Proyectos de diseño web y marketing digital realizados por Esencia Studio. Casos de estudio reales con resultados medibles."
                canonical="/portfolio"
            />

            {/* Hero */}
            <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '7rem 1.5rem 4rem' : '9rem 4rem 5rem' }}>
                <OrbBackground />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    <Reveal>
                        <div className="section-eyebrow">Portfolio</div>
                        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 'clamp(2.8rem,10vw,4rem)' : 'clamp(3.5rem,7vw,6rem)', fontWeight: 300, lineHeight: .92, letterSpacing: '-.03em', maxWidth: 700 }}>
                            Proyectos con <em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>esencia</em>
                        </h1>
                    </Reveal>
                    <Reveal delay={.15}>
                        <p style={{ fontSize: isMobile ? '.9rem' : '1rem', color: 'var(--gray)', lineHeight: 1.75, maxWidth: 500, marginTop: '1.5rem' }}>
                            Cada proyecto tiene una historia. Aquí cuento el problema, la solución y el resultado.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Proyectos */}
            <section style={{ padding: isMobile ? '0 1.5rem 5rem' : '0 4rem 8rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} isMobile={isMobile} />
                    ))}
                </div>
            </section>

            {/* CTA próximos proyectos */}
            <section style={{ padding: isMobile ? '0 1.5rem 5rem' : '0 4rem 8rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <motion.div style={{ background: 'var(--lila-pale)', border: '2px dashed var(--lila-mid)', borderRadius: 24, padding: isMobile ? '3rem 2rem' : '4rem', textAlign: 'center' }}>
                            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--lila-mid)', marginBottom: '1rem' }}>✦</div>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 400, letterSpacing: '-.02em', marginBottom: '1rem' }}>
                                Tu proyecto podría <em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>estar aquí</em>
                            </h2>
                            <p style={{ fontSize: '.9rem', color: 'var(--gray)', lineHeight: 1.7, maxWidth: 400, margin: '0 auto 2rem' }}>
                                Estoy disponible para nuevos proyectos. Si tienes un negocio que merece una presencia digital con esencia, hablemos.
                            </p>
                            <Link to="/contacto">
                                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
                                    style={{ padding: '.9rem 2rem', background: 'var(--lila-deep)', color: 'white', border: 'none', borderRadius: '100px', fontSize: '.85rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '.6rem' }}>
                                    Empieza tu proyecto <ArrowRight size={15} />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </Reveal>
                </div>
            </section>
        </PageTransition>
    )
}

function ProjectCard({ project, isMobile }) {
    return (
        <Reveal>
            <div style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 28, overflow: 'hidden' }}>

                {/* Header oscuro */}
                <div style={{ background: project.bg, padding: isMobile ? '3rem 2rem' : '4rem', position: 'relative', overflow: 'hidden', minHeight: isMobile ? 200 : 280, display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                    <motion.div style={{ position: 'absolute', right: -100, top: -100, width: 400, height: 400, background: `radial-gradient(circle, ${project.accentColor}25, transparent)`, borderRadius: '50%', pointerEvents: 'none' }}
                        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} />

                    <div style={{ position: 'relative', zIndex: 2 }}>
                        {project.label && (
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: `${project.accentColor}30`, border: `1px solid ${project.accentColor}50`, borderRadius: '100px', padding: '.3rem .9rem', marginBottom: '1.2rem' }}>
                                <motion.span style={{ width: 6, height: 6, background: '#4eff91', borderRadius: '50%' }} animate={{ opacity: [1, .3, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
                                <span style={{ fontSize: '.62rem', fontWeight: 700, color: 'rgba(255,255,255,.8)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{project.label}</span>
                            </div>
                        )}
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.2rem' : '3.2rem', fontWeight: 300, color: 'white', lineHeight: 1, letterSpacing: '-.03em', marginBottom: '.5rem' }}>{project.name}</h2>
                        <p style={{ fontSize: isMobile ? '.85rem' : '.95rem', color: 'rgba(255,255,255,.5)', marginBottom: '1.5rem' }}>{project.tagline}</p>
                        <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                            {[...project.category, project.year].map(tag => (
                                <span key={tag} style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.15)', borderRadius: '100px', padding: '.25rem .8rem', fontSize: '.68rem', fontWeight: 500, color: 'rgba(255,255,255,.7)' }}>{tag}</span>
                            ))}
                        </div>
                    </div>

                    {!isMobile && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.8rem', flexShrink: 0, position: 'relative', zIndex: 2 }}>
                            {project.highlights.map(h => (
                                <div key={h.label} style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: '1rem 1.2rem', textAlign: 'center', minWidth: 110 }}>
                                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'white', lineHeight: 1 }}>{h.num}</div>
                                    <div style={{ fontSize: '.63rem', color: 'rgba(255,255,255,.4)', marginTop: '.3rem' }}>{h.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Caso de estudio */}
                <div style={{ padding: isMobile ? '2rem 1.5rem' : '3.5rem 4rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '4rem', marginBottom: '2.5rem' }}>

                        {/* Reto / Solución / Resultado */}
                        <div>
                            {[
                                { eyebrow: 'El reto', text: project.challenge },
                                { eyebrow: 'La solución', text: project.solution },
                                { eyebrow: 'El resultado', text: project.result, last: true },
                            ].map(({ eyebrow, text, last }) => (
                                <div key={eyebrow} style={{ marginBottom: last ? 0 : '1.8rem', paddingBottom: last ? 0 : '1.8rem', borderBottom: last ? 'none' : '1px solid var(--gray-light)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.6rem' }}>
                                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: project.accentColor, flexShrink: 0 }} />
                                        <span style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gray)' }}>{eyebrow}</span>
                                    </div>
                                    <p style={{ fontSize: '.88rem', lineHeight: 1.75, color: '#5a5566' }}>{text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Servicios + contexto */}
                        <div>
                            <div style={{ marginBottom: '1.8rem' }}>
                                <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '1rem' }}>Qué hice</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
                                    {project.services.map(s => (
                                        <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
                                            <div style={{ width: 32, height: 32, background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <s.icon size={14} color="var(--lila-deep)" />
                                            </div>
                                            <span style={{ fontSize: '.84rem', color: 'var(--gray)' }}>{s.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: 16, padding: '1.4rem' }}>
                                <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--lila-deep)', marginBottom: '.5rem' }}>Contexto</div>
                                <p style={{ fontSize: '.82rem', color: 'var(--gray)', lineHeight: 1.6 }}>{project.context}</p>
                            </div>

                            {isMobile && (
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.7rem', marginTop: '1.5rem' }}>
                                    {project.highlights.map(h => (
                                        <div key={h.label} style={{ background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: 14, padding: '1rem', textAlign: 'center' }}>
                                            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--lila-deep)', lineHeight: 1 }}>{h.num}</div>
                                            <div style={{ fontSize: '.63rem', color: 'var(--gray)', marginTop: '.3rem' }}>{h.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer de la tarjeta */}
                    <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <div style={{ fontSize: '.7rem', color: 'var(--gray)', marginBottom: '.2rem' }}>Web en producción</div>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '.88rem', color: 'var(--lila-deep)', fontWeight: 600, textDecoration: 'none' }}>
                                {project.url.replace('https://', '')}
                            </a>
                        </div>
                        <motion.a href={project.url} target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', padding: '.8rem 1.8rem', background: 'var(--dark)', color: 'white', borderRadius: '100px', fontSize: '.82rem', fontWeight: 600, textDecoration: 'none' }}>
                            Ver web en vivo <ExternalLink size={14} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}