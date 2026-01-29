import { Helmet } from 'react-helmet-async';

// Organization Schema for the main site
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Oak Real Estate Partners',
    alternateName: 'Oak REP',
    url: 'https://oakrealestatepartners.com',
    logo: 'https://oakrealestatepartners.com/lovable-uploads/90ee6cd5-c626-412e-a007-8192ed146eba.png',
    description: 'Oak Real Estate Partners specializes in commercial real estate lending and investment solutions including bridge loans, HUD financing, and private credit opportunities.',
    foundingDate: '2020',
    sameAs: [
      'https://www.linkedin.com/company/oak-real-estate-partners',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: [
      'Commercial Real Estate Lending',
      'Bridge Loans',
      'HUD Financing',
      'FHA Loans',
      'Private Credit',
      'Real Estate Investment',
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Financial Service Schema
export function FinancialServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Oak Real Estate Partners',
    description: 'Commercial real estate lending services including bridge loans, HUD/FHA financing, and private credit solutions.',
    url: 'https://oakrealestatepartners.com',
    priceRange: '$$$',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: [
      'Commercial Real Estate Lending',
      'Bridge Loans',
      'HUD Financing',
      'FHA Loans',
      'Private Credit',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Lending Products',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Core Bridge Loans',
            description: 'Senior secured bridge loans for income-producing commercial real estate',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HUD/FHA Financing',
            description: 'Government-backed financing for multifamily and healthcare properties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Private Credit Investment',
            description: 'Private credit investment opportunities in commercial real estate',
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://oakrealestatepartners.com${item.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Article Schema for Blog/News posts
interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  author = 'Oak Real Estate Partners',
  image,
  url,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Oak Real Estate Partners',
      logo: {
        '@type': 'ImageObject',
        url: 'https://oakrealestatepartners.com/lovable-uploads/90ee6cd5-c626-412e-a007-8192ed146eba.png',
      },
    },
    image: image || 'https://oakrealestatepartners.com/lovable-uploads/90ee6cd5-c626-412e-a007-8192ed146eba.png',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://oakrealestatepartners.com${url}`,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Person Schema for Leadership pages
interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  url: string;
}

export function PersonSchema({
  name,
  jobTitle,
  description,
  image,
  url,
}: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    image,
    url: `https://oakrealestatepartners.com${url}`,
    worksFor: {
      '@type': 'Organization',
      name: 'Oak Real Estate Partners',
      url: 'https://oakrealestatepartners.com',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// WebSite Schema with SearchAction
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Oak Real Estate Partners',
    url: 'https://oakrealestatepartners.com',
    description: 'Commercial real estate lending and investment solutions',
    publisher: {
      '@type': 'Organization',
      name: 'Oak Real Estate Partners',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
