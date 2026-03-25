import SEO from '../components/SEO'
import { PageTransition, Reveal } from '../components/Animations'

export default function Privacidad() {
  return (
    <PageTransition>
      <SEO
        title="Política de Privacidad"
        description="Política de privacidad y protección de datos de Esencia Studio, conforme al RGPD y la LOPD."
        canonical="/privacidad"
      />
      <section style={{ padding: '10rem 4rem 8rem', maxWidth: 800, margin: '0 auto' }}>
        <Reveal>
          <div className="section-eyebrow">Legal</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 300, lineHeight: .95, letterSpacing: '-.03em', marginBottom: '3rem' }}>
            Política de <em style={{ fontStyle: 'italic', color: 'var(--lila-deep)' }}>Privacidad</em>
          </h1>
        </Reveal>

        <div style={{ fontSize: '.9rem', lineHeight: 1.85, color: '#5a5566' }}>
          {[
            {
              title: '1. Responsable del tratamiento',
              content: `En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos (LOPD-GDD), te informamos que el responsable del tratamiento de tus datos personales es:\n\nRocío García (Esencia Studio)\nEmail: hola@esenciastudio.es\nActividad: Diseño web y marketing digital`,
            },
            {
              title: '2. Datos que recogemos',
              content: `Recogemos únicamente los datos que tú nos proporcionas de forma voluntaria a través del formulario de contacto:\n\n• Nombre y apellidos\n• Dirección de correo electrónico\n• Número de teléfono (opcional)\n• El contenido del mensaje que nos envíes\n\nNo recogemos datos de navegación ni utilizamos cookies de seguimiento sin tu consentimiento.`,
            },
            {
              title: '3. Finalidad del tratamiento',
              content: `Los datos recogidos a través del formulario de contacto se utilizan exclusivamente para:\n\n• Responder a tu consulta o solicitud de información\n• Gestionar la relación comercial si decides contratar nuestros servicios\n• Enviarte información sobre nuestros servicios si nos das tu consentimiento expreso`,
            },
            {
              title: '4. Base legal',
              content: `La base legal para el tratamiento de tus datos es:\n\n• Tu consentimiento expreso al enviar el formulario de contacto\n• La ejecución de un contrato cuando exista una relación comercial\n• El interés legítimo en responder a consultas recibidas`,
            },
            {
              title: '5. Conservación de los datos',
              content: `Conservamos tus datos durante el tiempo necesario para atender tu consulta o gestionar la relación comercial, y posteriormente durante los plazos legalmente establecidos. Puedes solicitar la eliminación de tus datos en cualquier momento.`,
            },
            {
              title: '6. Tus derechos',
              content: `Tienes derecho a:\n\n• Acceder a tus datos personales\n• Rectificar datos inexactos\n• Solicitar la supresión de tus datos\n• Oponerte al tratamiento\n• Solicitar la limitación del tratamiento\n• Portabilidad de los datos\n\nPuedes ejercer estos derechos escribiendo a hola@esenciastudio.es indicando el derecho que deseas ejercer. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
            },
            {
              title: '7. Transferencias internacionales',
              content: `No realizamos transferencias internacionales de datos a terceros países fuera del Espacio Económico Europeo.`,
            },
            {
              title: '8. Actualización de esta política',
              content: `Podemos actualizar esta política de privacidad en cualquier momento. La versión más reciente siempre estará disponible en esta página. Última actualización: marzo 2025.`,
            },
          ].map((section, i) => (
            <Reveal key={i} delay={i * .05}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--lila-deep)', marginBottom: '.8rem' }}>{section.title}</h2>
                <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}