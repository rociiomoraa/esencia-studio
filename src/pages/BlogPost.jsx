import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, Twitter, Linkedin, Link2 } from 'lucide-react'
import { useState } from 'react'
import SEO from '../components/SEO'
import { PageTransition, Reveal, OrbBackground } from '../components/Animations'
import { useIsMobile } from '../hooks/useMediaQuery'

export const POSTS = [
  {
    slug: 'por-que-tu-negocio-necesita-web',
    category: 'Diseño Web',
    title: '5 razones por las que tu negocio necesita una web profesional en 2026',
    description: 'Descubre por qué una web profesional es imprescindible para cualquier negocio en 2026. Más ventas, más visibilidad y más credibilidad online.',
    keywords: 'web profesional, diseño web 2026, necesito web para mi negocio, página web empresa, web para negocios locales',
    date: '10 enero 2026',
    dateISO: '2026-01-10',
    readTime: '5 min',
    author: 'Rocío García',
    authorUrl: '/nosotros',
    color: 'var(--lila-pale)',
    related: ['seo-local-negocios', 'errores-web-conversiones'],
    content: [
      { type: 'intro', text: 'En 2026, no tener web no es una opción — es dejarle clientes a tu competencia. Si todavía dependes solo de Instagram o del boca a boca, este artículo es para ti.' },
      { type: 'h2', text: '1. Tu web trabaja por ti las 24 horas del día' },
      { type: 'p', text: 'A diferencia de una tienda física o de tus redes sociales, tu web nunca cierra. Un cliente puede encontrarte, leer sobre tus servicios, ver tu portfolio y contactarte a las 3 de la madrugada. Sin que tú tengas que estar presente.' },
      { type: 'p', text: 'Esto es especialmente valioso para negocios locales: cuando alguien busca "diseñadora web en Madrid" en Google, solo aparecen webs. No perfiles de Instagram.' },
      { type: 'h2', text: '2. Google no indexa Instagram, pero sí tu web' },
      { type: 'p', text: 'El SEO (posicionamiento en buscadores) es la herramienta más poderosa para conseguir clientes de forma gratuita y constante. Pero para eso necesitas una web. Con una estrategia SEO bien hecha, puedes aparecer en los primeros resultados de Google cuando tus clientes te buscan.' },
      { type: 'highlight', text: '"Una web optimizada para SEO es como tener un comercial trabajando gratis para ti todos los días."' },
      { type: 'h2', text: '3. Credibilidad y profesionalidad instantáneas' },
      { type: 'p', text: 'Cuando alguien te recomienda, lo primero que hace el posible cliente es buscarte en Google. Si no encuentran nada, o encuentran solo un Instagram, la percepción de profesionalidad cae en picado. Una web bien diseñada transmite confianza antes de que abras la boca.' },
      { type: 'h2', text: '4. Tú controlas tu imagen, no el algoritmo' },
      { type: 'p', text: 'Las redes sociales pueden cambiar su algoritmo mañana y dejar de mostrarte a tu audiencia. Tu web es tuya. Nadie puede quitarte el tráfico que has conseguido con SEO ni cambiar las reglas del juego. Es tu activo digital más estable.' },
      { type: 'h2', text: '5. Automatiza la captación de clientes' },
      { type: 'p', text: 'Con un buen formulario de contacto, una sección de precios clara y testimonios de clientes, tu web puede convertir visitantes en clientes sin que tengas que hacer nada. Es el mejor embudo de ventas que existe para pequeños negocios.' },
      { type: 'list', items: ['Formulario de contacto que llega directo a tu email', 'Página de precios que responde antes de que pregunten', 'Portfolio que demuestra tu trabajo sin que lo tengas que contar', 'Testimonios que generan confianza automáticamente', 'Blog que posiciona tu negocio como experto en tu sector'] },
      { type: 'h2', text: '¿Y si ya tengo web pero está anticuada?' },
      { type: 'p', text: 'Una web vieja o mal diseñada puede hacer más daño que no tener web. Si tarda en cargar, no se ve bien en móvil o parece de 2015, los visitantes se van en segundos. Google también penaliza las webs lentas.' },
      { type: 'cta', text: '¿Quieres una web que realmente trabaje para tu negocio? En Esencia Studio creamos webs profesionales, rápidas y optimizadas para SEO desde 300€.', link: '/contacto', btnText: 'Pide presupuesto gratis →' },
    ],
  },
  {
    slug: 'seo-local-negocios',
    category: 'SEO',
    title: 'SEO local: cómo aparecer en Google cuando tus clientes te buscan cerca',
    description: 'Guía práctica de SEO local para negocios físicos y servicios por zona. Aprende a aparecer en Google Maps y en las búsquedas locales de tu ciudad.',
    keywords: 'SEO local, aparecer en Google Maps, posicionamiento local, SEO para negocios locales, Google Business Profile',
    date: '20 enero 2026',
    dateISO: '2026-01-20',
    readTime: '7 min',
    author: 'Rocío García',
    authorUrl: '/nosotros',
    color: '#f0f7ff',
    related: ['por-que-tu-negocio-necesita-web', 'ia-marketing-digital-2026'],
    content: [
      { type: 'intro', text: 'Si tienes un negocio físico o trabajas en una zona concreta, el SEO local es probablemente la herramienta de marketing más poderosa que no estás usando.' },
      { type: 'h2', text: '¿Qué es el SEO local?' },
      { type: 'p', text: 'El SEO local es la práctica de optimizar tu presencia online para aparecer en búsquedas con intención geográfica: "peluquería en Sevilla", "fontanero cerca de mí", "restaurante italiano Madrid". Son búsquedas de personas que quieren comprar ahora mismo y cerca de donde están.' },
      { type: 'highlight', text: '"El 46% de todas las búsquedas en Google tienen intención local. Si no apareces ahí, le estás regalando clientes a tu competencia."' },
      { type: 'h2', text: '1. Optimiza tu ficha de Google Business Profile' },
      { type: 'p', text: 'Lo primero y más importante: reclamar y optimizar tu ficha en Google Business Profile. Es gratis y es lo que aparece en el mapa cuando alguien busca tu tipo de negocio.' },
      { type: 'list', items: ['Rellena TODOS los campos: nombre, dirección, teléfono, horario', 'Añade fotos reales y de calidad (interior, exterior, equipo)', 'Responde a todas las reseñas, positivas y negativas', 'Publica actualizaciones regularmente (ofertas, novedades)', 'Asegúrate de que el nombre y dirección sean iguales en toda la web'] },
      { type: 'h2', text: '2. Crea contenido local en tu web' },
      { type: 'p', text: 'Tu web necesita mencionar explícitamente las zonas donde trabajas. Si eres diseñadora web en Madrid, tu página debe decirlo claramente, no solo en la meta descripción sino en el contenido visible.' },
      { type: 'h2', text: '3. Consigue reseñas de clientes' },
      { type: 'p', text: 'Las reseñas en Google son uno de los factores más importantes para el SEO local. Pide a tus clientes satisfechos que te dejen una reseña en Google. No es spam si el servicio ha sido bueno — es información útil para futuros clientes.' },
      { type: 'h2', text: '4. Construye tu autoridad local con menciones' },
      { type: 'p', text: 'Aparecer mencionada en directorios locales, asociaciones de empresas, o medios de tu ciudad envía señales positivas a Google. Cuantas más menciones coherentes tengas (mismo nombre, dirección y teléfono), más confiará Google en tu negocio.' },
      { type: 'cta', text: '¿Quieres que tu negocio aparezca en Google cuando tus clientes te buscan? Hacemos auditorías SEO gratuitas para negocios locales.', link: '/contacto', btnText: 'Solicitar auditoría gratuita →' },
    ],
  },
  {
    slug: 'ia-marketing-digital-2026',
    category: 'Marketing con IA',
    title: 'Cómo uso la inteligencia artificial para entregar proyectos mejores y más rápido',
    description: 'Descubre cómo integro la IA en mi proceso creativo para diseñar webs y crear contenido de marketing más rápido, sin perder el toque humano.',
    keywords: 'inteligencia artificial marketing, IA diseño web, ChatGPT marketing digital, herramientas IA para emprendedoras, automatización marketing',
    date: '3 febrero 2026',
    dateISO: '2026-02-03',
    readTime: '6 min',
    author: 'Rocío García',
    authorUrl: '/nosotros',
    color: '#fff5f0',
    related: ['por-que-tu-negocio-necesita-web', 'seo-local-negocios'],
    content: [
      { type: 'intro', text: 'La IA no va a quitarte el trabajo. Pero si no la usas, alguien que sí la usa puede hacer el mismo trabajo que tú en la mitad de tiempo. Así es como la integro en mi día a día en Esencia Studio.' },
      { type: 'h2', text: 'Por qué uso IA en mis proyectos' },
      { type: 'p', text: 'Cuando empecé a usar herramientas de IA en mi flujo de trabajo, no fue para reemplazar mi creatividad — fue para amplificarla. La IA hace las tareas repetitivas y mecánicas más rápido. Yo me centro en la estrategia, el diseño y la relación con el cliente.' },
      { type: 'highlight', text: '"La IA es mi copiloto, no mi piloto automático. Yo decido el destino, ella me ayuda a llegar más rápido."' },
      { type: 'h2', text: '1. Redacción de textos para webs y redes' },
      { type: 'p', text: 'Uso Claude y ChatGPT para generar primeras versiones de textos: páginas de servicios, descripciones de productos, posts para redes sociales. Después los reviso, los personalizo con la voz de la marca y los optimizo para SEO. Lo que antes me llevaba 2 horas, ahora son 30 minutos.' },
      { type: 'h2', text: '2. Generación de imágenes y recursos visuales' },
      { type: 'p', text: 'Herramientas como Midjourney o Adobe Firefly me permiten crear imágenes de fondo, ilustraciones e iconos personalizados sin necesidad de bancos de imágenes genéricos. Cada web tiene imágenes únicas que refuerzan la identidad de la marca.' },
      { type: 'h2', text: '3. Análisis de competencia y estrategia SEO' },
      { type: 'p', text: 'La IA me ayuda a analizar qué keywords está usando la competencia, qué tipo de contenido posiciona mejor en cada sector, y cómo estructurar los artículos de blog para maximizar el tráfico orgánico.' },
      { type: 'list', items: ['Análisis de keywords con IA en minutos vs horas manuales', 'Generación de meta descripciones optimizadas', 'Estructura de artículos de blog con intención de búsqueda', 'Creación de variaciones A/B para textos de llamada a la acción', 'Resúmenes de informes de analítica para presentar a clientes'] },
      { type: 'h2', text: '¿Significa esto que los proyectos son menos personales?' },
      { type: 'p', text: 'Todo lo contrario. Al dedicar menos tiempo a tareas mecánicas, tengo más tiempo para conocer a fondo a cada cliente, entender su negocio y crear una estrategia realmente personalizada. La IA me da tiempo para ser más humana.' },
      { type: 'cta', text: '¿Quieres una web creada con las mejores herramientas del mercado, incluyendo IA? En Esencia Studio combinamos tecnología y creatividad para darte resultados superiores.', link: '/contacto', btnText: 'Hablemos de tu proyecto →' },
    ],
  },
  {
    slug: 'errores-web-conversiones',
    category: 'Diseño Web',
    title: '7 errores de diseño web que están matando tus conversiones',
    description: 'Descubre los 7 errores de diseño web más comunes que hacen que los visitantes abandonen tu web sin contactarte, y cómo solucionarlos hoy mismo.',
    keywords: 'errores diseño web, mejorar conversiones web, web que no convierte, optimización web, UX diseño web',
    date: '14 febrero 2026',
    dateISO: '2026-02-14',
    readTime: '8 min',
    author: 'Rocío García',
    authorUrl: '/nosotros',
    color: 'var(--lila-pale)',
    related: ['por-que-tu-negocio-necesita-web', 'branding-pequenas-empresas'],
    content: [
      { type: 'intro', text: 'Una web bonita que no convierte es una web fallida. Después de revisar decenas de webs de pequeños negocios, estos son los 7 errores que veo repetirse una y otra vez.' },
      { type: 'h2', text: 'Error 1: No hay una llamada a la acción clara' },
      { type: 'p', text: 'El visitante entra a tu web y no sabe qué quieres que haga. ¿Contactarte? ¿Ver tus servicios? ¿Llamarte? Cada página de tu web debe tener UN objetivo claro y UN botón que invite a cumplirlo. Si hay tres botones distintos compitiendo por la atención, ninguno gana.' },
      { type: 'h2', text: 'Error 2: La web tarda más de 3 segundos en cargar' },
      { type: 'p', text: 'El 53% de los usuarios abandona una web que tarda más de 3 segundos en cargar. Y Google penaliza las webs lentas bajándolas en los resultados de búsqueda. Una web lenta es dinero que se pierde cada día.' },
      { type: 'highlight', text: '"Una mejora de 1 segundo en la velocidad de carga puede aumentar las conversiones hasta un 27%."' },
      { type: 'h2', text: 'Error 3: No está optimizada para móvil' },
      { type: 'p', text: 'Más del 60% del tráfico web viene de móviles. Si tu web no se ve bien en el teléfono, estás perdiendo a más de la mitad de tus visitantes potenciales. No basta con que "se vea", tiene que ser cómoda de usar en pantalla pequeña.' },
      { type: 'h2', text: 'Error 4: Los textos hablan de ti, no del cliente' },
      { type: 'p', text: '"Somos una empresa líder con más de 10 años de experiencia..." Esto no le interesa a nadie. Lo que el visitante quiere saber es: ¿puedes resolver mi problema? ¿Cómo? ¿Cuánto cuesta? Habla del cliente, de sus problemas y de cómo los solucionas.' },
      { type: 'h2', text: 'Error 5: No hay prueba social' },
      { type: 'p', text: 'Sin testimonios, sin casos de éxito, sin logos de clientes, el visitante no tiene motivos para confiar en ti. La prueba social es el elemento que más influye en la decisión de compra online. Añade reseñas reales lo antes posible.' },
      { type: 'h2', text: 'Error 6: El formulario de contacto pide demasiado' },
      { type: 'p', text: 'Nombre, email, teléfono, empresa, tamaño de empresa, presupuesto, descripción del proyecto... Cada campo extra que añades reduce las probabilidades de que alguien lo rellene. Pide solo lo imprescindible para poder responder.' },
      { type: 'h2', text: 'Error 7: No hay consistencia visual' },
      { type: 'p', text: 'Tres tipografías distintas, cuatro colores que no armonizan, fotos de stock mezcladas con imágenes propias de baja calidad... La inconsistencia visual transmite falta de profesionalidad y hace que la marca no se recuerde.' },
      { type: 'list', items: ['Una tipografía para títulos, una para texto', 'Paleta de 2-3 colores máximo y usarlos consistentemente', 'Fotos del mismo estilo y calidad en toda la web', 'Espaciado generoso y coherente entre elementos', 'Iconos del mismo set visual'] },
      { type: 'cta', text: '¿Reconoces alguno de estos errores en tu web? En Esencia Studio hacemos auditorías gratuitas y te decimos exactamente qué mejorar.', link: '/contacto', btnText: 'Solicitar auditoría gratuita →' },
    ],
  },
  {
    slug: 'branding-pequenas-empresas',
    category: 'Branding',
    title: 'Branding para pequeñas empresas: cómo crear una identidad que se recuerde',
    description: 'Aprende a crear una identidad de marca memorable para tu pequeño negocio sin gastar una fortuna. Logo, colores, tipografía y voz de marca explicados.',
    keywords: 'branding pequeñas empresas, identidad de marca, crear logo negocio, branding económico, imagen corporativa pyme',
    date: '25 febrero 2026',
    dateISO: '2026-02-25',
    readTime: '5 min',
    author: 'Rocío García',
    authorUrl: '/nosotros',
    color: '#f0fff4',
    related: ['errores-web-conversiones', 'redes-sociales-o-web'],
    content: [
      { type: 'intro', text: 'No necesitas un logo de 3.000€ para tener una marca potente. Lo que necesitas es claridad, consistencia y un poco de estrategia. Te enseño los elementos clave.' },
      { type: 'h2', text: '¿Qué es exactamente el branding?' },
      { type: 'p', text: 'El branding es mucho más que un logo. Es la suma de todo lo que hace que tu negocio sea reconocible y memorable: el nombre, los colores, la tipografía, el tono en que hablas, las imágenes que usas, incluso cómo contestas los emails.' },
      { type: 'highlight', text: '"Tu marca es lo que la gente dice de ti cuando no estás en la habitación." — Jeff Bezos' },
      { type: 'h2', text: '1. Define tu posicionamiento antes del diseño' },
      { type: 'p', text: 'Antes de elegir colores o tipografías, necesitas tener claro: ¿Para quién es mi negocio? ¿Qué problema resuelvo? ¿Qué me diferencia de la competencia? ¿Qué sensación quiero que evoque mi marca? Las respuestas a estas preguntas dictan todas las decisiones de diseño.' },
      { type: 'h2', text: '2. Elige colores con intención' },
      { type: 'p', text: 'Los colores comunican emociones de forma inconsciente. El azul transmite confianza y profesionalidad. El verde, naturaleza y salud. El lila, creatividad y lujo accesible. Elige 1-2 colores principales que encajen con tu posicionamiento y úsalos siempre.' },
      { type: 'h2', text: '3. La tipografía también comunica' },
      { type: 'p', text: 'Una tipografía serif (con remates, como Times New Roman) transmite tradición, elegancia y confianza. Una sans-serif (sin remates, como Helvetica) transmite modernidad y claridad. Una script (manuscrita) transmite cercanía y personalidad. Elige una para títulos y una para textos, y no las cambies.' },
      { type: 'h2', text: '4. Desarrolla tu voz de marca' },
      { type: 'p', text: '¿Cómo habla tu marca? ¿Formal o cercana? ¿Técnica o accesible? ¿Divertida o seria? La coherencia en el tono de comunicación — en tu web, en redes sociales, en emails — es lo que hace que una marca se sienta auténtica y profesional.' },
      { type: 'list', items: ['Escribe un documento con 5 adjetivos que definen tu marca', 'Define qué palabras NUNCA usarías', 'Crea plantillas de emails y posts que sigan tu voz', 'Revisa todos tus textos actuales y ajústalos si es necesario'] },
      { type: 'h2', text: '5. La consistencia es más importante que la perfección' },
      { type: 'p', text: 'Un logo mediano aplicado consistentemente en todos los puntos de contacto es más efectivo que un logo perfecto usado de forma irregular. La repetición es lo que crea reconocimiento de marca.' },
      { type: 'cta', text: '¿Quieres una identidad de marca coherente y profesional para tu negocio? En Esencia Studio creamos branding completo adaptado a tu presupuesto.', link: '/contacto', btnText: 'Ver precios de branding →' },
    ],
  },
  {
    slug: 'redes-sociales-o-web',
    category: 'Estrategia Digital',
    title: '¿Redes sociales o web? Por qué necesitas las dos y cómo hacerlo bien',
    description: 'Te explico por qué Instagram no es suficiente para tu negocio y cómo combinar redes sociales y página web para maximizar tu presencia digital.',
    keywords: 'redes sociales vs web, Instagram negocio, estrategia digital, presencia online, web y redes sociales',
    date: '5 marzo 2026',
    dateISO: '2026-03-05',
    readTime: '4 min',
    author: 'Rocío García',
    authorUrl: '/nosotros',
    color: '#fff8f0',
    related: ['por-que-tu-negocio-necesita-web', 'seo-local-negocios'],
    content: [
      { type: 'intro', text: 'Muchos emprendedores me preguntan: "¿Con Instagram es suficiente o necesito web?" La respuesta corta es no, no es suficiente. La respuesta larga es este artículo.' },
      { type: 'h2', text: 'Lo que Instagram hace bien' },
      { type: 'p', text: 'Instagram es una herramienta fantástica para construir comunidad, mostrar el lado humano de tu marca, llegar a nuevas audiencias mediante el algoritmo y mantener el contacto con clientes actuales. Si tu negocio tiene un componente visual — y casi todos lo tienen — Instagram es imprescindible.' },
      { type: 'h2', text: 'Lo que Instagram NO puede hacer' },
      { type: 'p', text: 'Instagram no puede posicionarte en Google. No puede darte una dirección web propia. No puede albergar un proceso de compra complejo. No te pertenece — si Instagram cierra mañana o te bloquea la cuenta, pierdes toda tu audiencia de golpe.' },
      { type: 'highlight', text: '"Construir tu negocio solo en redes sociales es como construir una casa en terreno alquilado. Cualquier día te pueden pedir que te vayas."' },
      { type: 'h2', text: 'Cómo funcionan juntas' },
      { type: 'p', text: 'La estrategia ganadora es usar las redes sociales para atraer tráfico y construir comunidad, y usar tu web para convertir ese tráfico en clientes. Instagram descubre, la web convierte.' },
      { type: 'list', items: ['Instagram: muestra el proceso, el equipo, los resultados', 'Web: explica los servicios, precios y facilita el contacto', 'Instagram Stories: tráfico directo a páginas concretas de tu web', 'Blog en tu web: contenido que posiciona en Google a largo plazo', 'Email: la lista que sí te pertenece al 100%'] },
      { type: 'h2', text: '¿Por dónde empezar si tienes recursos limitados?' },
      { type: 'p', text: 'Si tienes que elegir: primero la web. Una web bien hecha es un activo permanente. Las redes sociales son más fáciles de construir una vez tienes la base sólida. Y con una web, tienes algo profesional que mostrar cuando alguien te busque.' },
      { type: 'cta', text: '¿Lista para tener una presencia digital completa y profesional? En Esencia Studio nos encargamos de tu web y te asesoramos sobre tu estrategia en redes.', link: '/contacto', btnText: 'Empezar ahora →' },
    ],
  },
]

export default function BlogPost() {
  const { slug } = useParams()
  const isMobile = useIsMobile()
  const [copied, setCopied] = useState(false)

  const postIndex = POSTS.findIndex(p => p.slug === slug)
  const post = POSTS[postIndex]
  const relatedPosts = post?.related?.map(s => POSTS.find(p => p.slug === s)).filter(Boolean) || []
  const prevPost = POSTS[postIndex + 1] || null
  const nextPost = POSTS[postIndex - 1] || null

  if (!post) {
    return (
      <PageTransition>
        <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 2rem' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5rem', color: 'var(--lila-mid)', marginBottom: '1rem' }}>404</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>Artículo no encontrado</h1>
          <Link to="/blog"><button className="btn-primary">← Volver al Blog</button></Link>
        </div>
      </PageTransition>
    )
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Person', name: post.author, url: `https://esenciastudio.es${post.authorUrl}` },
    publisher: { '@type': 'Organization', name: 'Esencia Studio', url: 'https://esenciastudio.es' },
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://esenciastudio.es/blog/${post.slug}` },
  }

  return (
    <PageTransition>
      <SEO title={post.title} description={post.description} keywords={post.keywords} canonical={`/blog/${post.slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '7rem 1.5rem 3rem' : '9rem 4rem 4rem', background: post.color || 'var(--lila-pale)' }}>
        <OrbBackground />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <nav aria-label="breadcrumb" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap' }}>
              <Link to="/" style={{ fontSize: '.72rem', color: 'var(--gray)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ fontSize: '.72rem', color: 'var(--gray)' }}>›</span>
              <Link to="/blog" style={{ fontSize: '.72rem', color: 'var(--gray)', textDecoration: 'none' }}>Blog</Link>
              <span style={{ fontSize: '.72rem', color: 'var(--gray)' }}>›</span>
              <span style={{ fontSize: '.72rem', color: 'var(--lila-deep)', fontWeight: 500 }}>{post.category}</span>
            </div>
          </nav>
          <span style={{ background: 'var(--lila-deep)', color: 'white', padding: '.25rem .9rem', borderRadius: '100px', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.08em', display: 'inline-block', marginBottom: '1.2rem' }}>{post.category}</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 'clamp(1.9rem,7vw,2.8rem)' : 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-.02em', marginBottom: '1.5rem', color: 'var(--black)' }}>{post.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
              <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, var(--lila-soft), var(--lila-deep))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.65rem', fontWeight: 700, color: 'white', flexShrink: 0 }}>RG</div>
              <div>
                <Link to={post.authorUrl} style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--black)', textDecoration: 'none' }}>{post.author}</Link>
                <div style={{ fontSize: '.7rem', color: 'var(--gray)' }}>Esencia Studio</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontSize: '.72rem', color: 'var(--gray)' }}><Calendar size={12} /> {post.date}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontSize: '.72rem', color: 'var(--gray)' }}><Clock size={12} /> {post.readTime} de lectura</div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section style={{ padding: isMobile ? '3rem 1.5rem 4rem' : '5rem 4rem 6rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 280px', gap: '4rem', alignItems: 'start' }}>
          <article>
            {post.content.map((block, i) => <ContentBlock key={i} block={block} isMobile={isMobile} />)}

            {/* Compartir */}
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--gray-light)' }}>
              <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <Share2 size={13} /> Compartir este artículo
              </div>
              <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
                <ShareBtn href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://esenciastudio.es/blog/${post.slug}`)}`} label="Twitter / X" icon={<Twitter size={14} />} />
                <ShareBtn href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://esenciastudio.es/blog/${post.slug}`)}`} label="LinkedIn" icon={<Linkedin size={14} />} />
                <motion.button onClick={handleCopyLink} whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.5rem 1rem', background: copied ? 'var(--lila-deep)' : 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: '100px', fontSize: '.75rem', fontWeight: 500, color: copied ? 'white' : 'var(--lila-deep)', cursor: 'pointer', transition: 'all .2s' }}>
                  <Link2 size={14} /> {copied ? '¡Copiado!' : 'Copiar enlace'}
                </motion.button>
              </div>
            </div>

            {/* Autora */}
            <div style={{ marginTop: '3rem', background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: 20, padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
              <div style={{ width: 56, height: 56, background: 'linear-gradient(135deg, var(--lila-soft), var(--lila-deep))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.85rem', fontWeight: 700, color: 'white', flexShrink: 0 }}>RG</div>
              <div>
                <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--lila-deep)', marginBottom: '.3rem' }}>Autora</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '.5rem' }}>Rocío García</div>
                <p style={{ fontSize: '.82rem', lineHeight: 1.7, color: 'var(--gray)', marginBottom: '.8rem' }}>Fundadora de Esencia Studio. Diseñadora web y especialista en marketing digital. Ayudo a negocios locales a crecer online con diseño, SEO y estrategia.</p>
                <Link to="/nosotros" style={{ fontSize: '.78rem', color: 'var(--lila-deep)', fontWeight: 600, textDecoration: 'none' }}>Ver más sobre mí →</Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          {!isMobile && (
            <aside style={{ position: 'sticky', top: '6rem' }}>
              <div style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 18, padding: '1.8rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '1rem' }}>En este artículo</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
                  {post.content.filter(b => b.type === 'h2').map((block, i) => (
                    <li key={i}><span style={{ fontSize: '.78rem', color: 'var(--gray)', lineHeight: 1.4, display: 'block', paddingLeft: '.8rem', borderLeft: '2px solid var(--lila-mid)' }}>{block.text}</span></li>
                  ))}
                </ul>
              </div>
              <div style={{ background: 'linear-gradient(135deg, var(--lila-deep), #5a3a9e)', borderRadius: 18, padding: '1.8rem', textAlign: 'center' }}>
                <motion.span style={{ width: 8, height: 8, background: '#4eff91', borderRadius: '50%', display: 'inline-block', marginBottom: '.8rem' }} animate={{ opacity: [1,.3,1] }} transition={{ duration: 1.8, repeat: Infinity }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 400, color: 'white', marginBottom: '.7rem', lineHeight: 1.3 }}>¿Necesitas ayuda con tu web?</h3>
                <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.6, marginBottom: '1.2rem' }}>Primera consulta gratis. Sin compromiso.</p>
                <Link to="/contacto">
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
                    style={{ width: '100%', padding: '.75rem', background: 'white', color: 'var(--lila-deep)', border: 'none', borderRadius: '100px', fontSize: '.78rem', fontWeight: 700, cursor: 'pointer' }}>
                    Contactar →
                  </motion.button>
                </Link>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* Relacionados */}
      {relatedPosts.length > 0 && (
        <section style={{ padding: isMobile ? '0 1.5rem 4rem' : '0 4rem 6rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '3rem', marginBottom: '2rem' }}>
              <div className="section-eyebrow">Seguir leyendo</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 400, letterSpacing: '-.02em' }}>Artículos <em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>relacionados</em></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.5rem' }}>
              {relatedPosts.map((related, i) => (
                <Reveal key={related.slug} delay={i * .1}>
                  <Link to={`/blog/${related.slug}`} style={{ textDecoration: 'none' }}>
                    <motion.div whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(124,92,191,.08)', borderColor: 'var(--lila-mid)' }}
                      style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: 18, overflow: 'hidden', transition: 'border-color .3s' }}>
                      <div style={{ height: 90, background: related.color || 'var(--lila-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--lila-mid)', opacity: .5 }}>✦</span>
                      </div>
                      <div style={{ padding: '1.4rem' }}>
                        <span style={{ background: 'var(--lila-pale)', color: 'var(--lila-deep)', padding: '.2rem .7rem', borderRadius: '100px', fontSize: '.62rem', fontWeight: 700, border: '1px solid var(--lila-mid)', display: 'inline-block', marginBottom: '.7rem' }}>{related.category}</span>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 500, lineHeight: 1.3, marginBottom: '.5rem', color: 'var(--black)' }}>{related.title}</h3>
                        <span style={{ fontSize: '.7rem', color: 'var(--lila-deep)', fontWeight: 600 }}>Leer artículo →</span>
                      </div>
                    </motion.div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navegación */}
      <section style={{ padding: isMobile ? '0 1.5rem 4rem' : '0 4rem 5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', borderTop: '1px solid var(--gray-light)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/blog" style={{ textDecoration: 'none' }}>
            <motion.button whileHover={{ scale: 1.03 }} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.7rem 1.4rem', background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: '100px', fontSize: '.78rem', fontWeight: 600, color: 'var(--lila-deep)', cursor: 'pointer' }}>
              <ArrowLeft size={14} /> Volver al Blog
            </motion.button>
          </Link>
          <Link to="/contacto" style={{ textDecoration: 'none' }}>
            <motion.button whileHover={{ scale: 1.03 }} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.7rem 1.4rem', background: 'var(--lila-deep)', border: 'none', borderRadius: '100px', fontSize: '.78rem', fontWeight: 600, color: 'white', cursor: 'pointer' }}>
              ¿Te ha gustado? Hablemos <ArrowRight size={14} />
            </motion.button>
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

function ContentBlock({ block, isMobile }) {
  const baseText = { fontSize: isMobile ? '.92rem' : '.95rem', lineHeight: 1.9, color: '#4a4558', marginBottom: '1.5rem' }
  switch (block.type) {
    case 'intro':
      return <p style={{ ...baseText, fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 500, color: 'var(--black)', borderLeft: '3px solid var(--lila-deep)', paddingLeft: '1.2rem', marginBottom: '2rem' }}>{block.text}</p>
    case 'p':
      return <p style={baseText}>{block.text}</p>
    case 'h2':
      return <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1.5rem' : '1.8rem', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-.02em', color: 'var(--black)', marginTop: '2.5rem', marginBottom: '1rem' }}>{block.text}</h2>
    case 'h3':
      return <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1.2rem' : '1.4rem', fontWeight: 500, lineHeight: 1.3, color: 'var(--black)', marginTop: '2rem', marginBottom: '.8rem' }}>{block.text}</h3>
    case 'list':
      return (
        <ul style={{ marginBottom: '1.5rem', paddingLeft: 0, listStyle: 'none' }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: '.8rem', alignItems: 'flex-start', marginBottom: '.7rem', fontSize: baseText.fontSize, lineHeight: 1.7, color: baseText.color }}>
              <span style={{ color: 'var(--lila-deep)', fontWeight: 700, flexShrink: 0, marginTop: '.15rem' }}>✦</span>{item}
            </li>
          ))}
        </ul>
      )
    case 'highlight':
      return (
        <blockquote style={{ margin: '2rem 0', padding: isMobile ? '1.5rem' : '2rem 2.5rem', background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderLeft: '4px solid var(--lila-deep)', borderRadius: '0 16px 16px 0' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1.1rem' : '1.3rem', fontStyle: 'italic', lineHeight: 1.5, color: 'var(--lila-deep)', margin: 0 }}>{block.text}</p>
        </blockquote>
      )
    case 'cta':
      return (
        <motion.div whileHover={{ scale: 1.01 }} style={{ margin: '2.5rem 0', background: 'linear-gradient(135deg, var(--lila-deep), #5a3a9e)', borderRadius: 20, padding: isMobile ? '2rem 1.5rem' : '2.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: isMobile ? '.9rem' : '.95rem', color: 'rgba(255,255,255,.8)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{block.text}</p>
          <Link to={block.link}>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} style={{ padding: '.85rem 2rem', background: 'white', color: 'var(--lila-deep)', border: 'none', borderRadius: '100px', fontSize: '.82rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '.03em' }}>{block.btnText}</motion.button>
          </Link>
        </motion.div>
      )
    default: return null
  }
}

function ShareBtn({ href, label, icon }) {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }}
      style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.5rem 1rem', background: 'var(--lila-pale)', border: '1px solid var(--lila-mid)', borderRadius: '100px', fontSize: '.75rem', fontWeight: 500, color: 'var(--lila-deep)', textDecoration: 'none' }}>
      {icon} {label}
    </motion.a>
  )
}