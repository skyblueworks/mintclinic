/**
 * GROQ queries for fetching page content from Sanity
 * Use these in your page components to fetch translated content
 */

export const homePageQuery = `*[_type == "homePage"][0]{
  title,
  hero {
    title,
    titleBold,
    subtitle,
    "backgroundImage": backgroundImage.asset->url,
    ctaButton {
      text,
      url
    }
  },
  whoWeAre {
    label,
    title,
    titleSuffix,
    description,
    buttonAbout,
    buttonGallery,
    videoUrl
  },
  testimonialsSection {
    title,
    titleBold,
    subtitle,
    testimonials[] {
      quote,
      author,
      treatment,
      rating,
      "authorImage": authorImage.asset->url
    }
  },
  infoSection {
    title,
    titleBold,
    cards[] {
      title,
      subtitle,
      description,
      buttonText,
      buttonUrl
    }
  },
  whyMintSection {
    title,
    reasons[] {
      title,
      description
    }
  },
  teamPreviewSection {
    quote,
    quoteBold,
    description,
    buttonText,
    "imageUrl": imageUrl.asset->url
  },
  faqSection {
    title,
    titleBold,
    items[] {
      question,
      answer
    }
  },
  locationSection {
    title,
    mapEmbedUrl
  },
  metaDescription
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  title,
  aboutSection {
    title,
    content
  },
  teamMembersSection {
    title,
    titleBold
  },
  gallerySection {
    title,
    images[] {
      "url": asset->url,
      "alt": alt,
      "metadata": asset->metadata
    }
  },
  whyMintSection {
    title,
    reasons[] {
      title,
      description
    }
  },
  seo {
    metaDescription,
    "ogImage": ogImage.asset->url
  }
}`;

export const contactPageQuery = `*[_type == "contactPage"][0]{
  title,
  contactInfo {
    address,
    phone,
    email,
    mapUrl,
    mapEmbedUrl
  },
  contactForm {
    title,
    fields {
      name,
      email,
      phone,
      message
    },
    submitButton,
    submittingButton,
    validation {
      nameRequired,
      emailInvalid,
      phoneInvalid
    },
    messages {
      success,
      error
    }
  },
  mapSection {
    title,
    "clinicImage": clinicImage.asset->url
  },
  locationSection {
    title
  },
  seo {
    metaDescription,
    "ogImage": ogImage.asset->url
  }
}`;

// Helper function to get localized value
export function getLocalizedValue<T>(
  obj: { bg: T; en: T } | undefined,
  locale: "bg" | "en",
  fallback?: T,
): T {
  if (!obj) return fallback as T;
  return obj[locale] || obj.bg || (fallback as T);
}

// Type definitions for page data
export interface HomePage {
  title: { bg: string; en: string };
  hero: {
    title: { bg: string; en: string };
    titleBold: { bg: string; en: string };
    subtitle: { bg: string; en: string };
    backgroundImage?: string;
    ctaButton: {
      text: { bg: string; en: string };
      url: string;
    };
  };
  whoWeAre: {
    label: { bg: string; en: string };
    title: { bg: string; en: string };
    titleSuffix: { bg: string; en: string };
    description: { bg: string; en: string };
    buttonAbout: { bg: string; en: string };
    buttonGallery: { bg: string; en: string };
    videoUrl: string;
  };
  testimonialsSection: {
    title: { bg: string; en: string };
    titleBold: { bg: string; en: string };
    subtitle: { bg: string; en: string };
    testimonials?: Array<{
      quote: { bg: string; en: string };
      author: { bg: string; en: string };
      treatment: { bg: string; en: string };
      rating: number;
      authorImage?: string;
    }>;
  };
  infoSection: {
    title: { bg: string; en: string };
    titleBold: { bg: string; en: string };
    cards: Array<{
      title: { bg: string; en: string };
      subtitle: { bg: string; en: string };
      description: { bg: string; en: string };
      buttonText: { bg: string; en: string };
      buttonUrl?: string;
    }>;
  };
  whyMintSection: {
    title: { bg: string; en: string };
    reasons: Array<{
      title: { bg: string; en: string };
      description: { bg: string; en: string };
    }>;
  };
  teamPreviewSection: {
    quote: { bg: string; en: string };
    quoteBold: { bg: string; en: string };
    description: { bg: string; en: string };
    buttonText: { bg: string; en: string };
    imageUrl?: string;
  };
  faqSection: {
    title: { bg: string; en: string };
    titleBold: { bg: string; en: string };
    items: Array<{
      question: { bg: string; en: string };
      answer: { bg: string; en: string };
    }>;
  };
  locationSection: {
    title: { bg: string; en: string };
    mapEmbedUrl: string;
  };
  metaDescription?: { bg: string; en: string };
}

export interface AboutPage {
  title: { bg: string; en: string };
  aboutSection: {
    title: { bg: string; en: string };
    content: { bg: string; en: string };
  };
  teamMembersSection: {
    title: { bg: string; en: string };
    titleBold: { bg: string; en: string };
  };
  gallerySection: {
    title: { bg: string; en: string };
    images: Array<{
      url: string;
      alt: { bg: string; en: string };
      metadata: any;
    }>;
  };
  whyMintSection: {
    title: { bg: string; en: string };
    reasons: Array<{
      title: { bg: string; en: string };
      description: { bg: string; en: string };
    }>;
  };
  seo?: {
    metaDescription: { bg: string; en: string };
    ogImage?: string;
  };
}

export interface ContactPage {
  title: { bg: string; en: string };
  contactInfo: {
    address: { bg: string; en: string };
    phone: string;
    email: string;
    mapUrl: string;
    mapEmbedUrl: string;
  };
  contactForm: {
    title: { bg: string; en: string };
    fields: {
      name: { bg: string; en: string };
      email: { bg: string; en: string };
      phone: { bg: string; en: string };
      message: { bg: string; en: string };
    };
    submitButton: { bg: string; en: string };
    submittingButton: { bg: string; en: string };
    validation: {
      nameRequired: { bg: string; en: string };
      emailInvalid: { bg: string; en: string };
      phoneInvalid: { bg: string; en: string };
    };
    messages: {
      success: { bg: string; en: string };
      error: { bg: string; en: string };
    };
  };
  mapSection: {
    title: { bg: string; en: string };
    clinicImage?: string;
  };
  locationSection: {
    title: { bg: string; en: string };
  };
  seo?: {
    metaDescription: { bg: string; en: string };
    ogImage?: string;
  };
}
