import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords, canonical }) {
  const siteName = 'Esencia Studio'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Diseño Web & Marketing Digital`
  const defaultDesc = 'Esencia Studio: diseño web profesional, SEO, redes sociales y marketing digital para negocios que quieren crecer. by Rocío García.'
  const url = canonical ? `https://esenciastudio.es${canonical}` : 'https://esenciastudio.es'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Esencia Studio",
        "description": description || defaultDesc,
        "url": "https://esenciastudio.es",
        "founder": { "@type": "Person", "name": "Rocío García" },
        "serviceType": ["Diseño Web", "SEO", "Marketing Digital", "Redes Sociales"],
        "areaServed": "España",
        "priceRange": "€€"
      })}</script>
    </Helmet>
  )
}
