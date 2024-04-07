import ogImageSrc from "@/images/social.png";

export const SITE = {
  title: "Danfe Solutions",
  tagline: "Top-quality Website Building",
  description: "Premium website development and professional design services tailored to meet your requirements. ",
  description_short: "Develop premium websites with us",
  url: "https://danfe.pages.dev",
  author: "Danfe",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Website Development Services`,
  description: "Premium website development and professional design services tailored to meet your requirements.",
  image: ogImageSrc,
};
