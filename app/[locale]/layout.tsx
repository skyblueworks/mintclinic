export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    name: "Mint Clinic",
    url: "https://mintclinic.com",
    telephone: "+359888436838",
    email: "info@mintclinic.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Д-р Стефан Сарафов 20",
      addressLocality: "София",
      addressCountry: "BG",
    },
    sameAs: [
      "https://www.facebook.com/mintclinic.bg/",
      "https://www.instagram.com/_mintclinic_",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
