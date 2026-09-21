import type { Metadata, Viewport } from 'next';
import './globals.css';

const url = 'https://indianastudio.io';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: 'Développeur Next.js & Agents IA à Paris — Indiana Studio',
  description:
    "Développeur Next.js à Paris : conception, développement et agents IA, de l'idée au déploiement. 18 ans d'expérience, 60+ clients accompagnés.",
  keywords: ['développeur Next.js Paris', 'product builder', 'développeur full-stack freelance', 'agents IA', 'SaaS', 'React', 'Supabase'],
  authors: [{ name: 'Stéphane Aboukrat', url }],
  creator: 'Stéphane Aboukrat',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url,
    siteName: 'Indiana Studio',
    title: 'Indiana Studio — Design × Code × IA',
    description: 'Je conçois, développe et déploie des produits digitaux de bout en bout. Next.js, React, Supabase, agents IA.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indiana Studio — Design × Code × IA',
    description: 'Produits digitaux, SaaS et agents IA. De l\'idée au déploiement.'
  },
  icons: {
    icon: [{
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 7 26 25H6Z' fill='%233845e1'/%3E%3C/svg%3E"
    }]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = { themeColor: '#2b2c2e' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': url + '/#studio',
      name: 'Indiana Studio',
      description: 'Conception et développement de produits digitaux, SaaS et agents IA.',
      url,
      email: 'stephane@indianastudio.fr',
      telephone: '+33684234852',
      priceRange: '€€',
      areaServed: { '@type': 'Country', name: 'France' },
      address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
      founder: { '@id': url + '/#stephane' },
      knowsAbout: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Claude AI', 'RAG', 'Agents IA']
    },
    {
      '@type': 'Person',
      '@id': url + '/#stephane',
      name: 'Stéphane Aboukrat',
      jobTitle: 'Product Builder · Développeur Full-Stack Senior',
      url,
      email: 'stephane@indianastudio.fr',
      worksFor: { '@id': url + '/#studio' },
      address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
      sameAs: ['https://www.linkedin.com/in/stephane-aboukrat', 'https://github.com/stephane75005']
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
