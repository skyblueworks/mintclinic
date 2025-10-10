type Locale = "bg" | "en";

interface NotificationEmailData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

interface ConfirmationEmailData {
  name: string;
}

export function generateNotificationEmail(
  data: NotificationEmailData,
  locale: Locale,
): { subject: string; text: string } {
  const subject =
    locale === "bg"
      ? `Ново запитване от ${data.name}`
      : `New inquiry from ${data.name}`;

  const text = `
${locale === "bg" ? "Ново контактно запитване" : "New Contact Inquiry"}

${locale === "bg" ? "Име" : "Name"}: ${data.name}
${locale === "bg" ? "Имейл" : "Email"}: ${data.email}
${data.phone ? `${locale === "bg" ? "Телефон" : "Phone"}: ${data.phone}` : ""}
${data.message ? `\n${locale === "bg" ? "Съобщение" : "Message"}:\n${data.message}` : ""}

---
${locale === "bg" ? "Изпратено от контактната форма на" : "Sent from the contact form at"} mintclinic.com
  `.trim();

  return { subject, text };
}

export function generateConfirmationEmail(
  data: ConfirmationEmailData,
  locale: Locale,
): { subject: string; text: string } {
  const subject =
    locale === "bg"
      ? "Благодарим за вашето запитване - Mint Clinic"
      : "Thank you for your inquiry - Mint Clinic";

  const text =
    locale === "bg"
      ? `
Здравейте ${data.name},

Благодарим ви, че се свързахте с Mint Clinic!

Получихме вашето запитване и ще се свържем с вас възможно най-скоро.

Нашият екип обикновено отговаря в рамките на 24 часа през работните дни.

Ако имате спешен въпрос, моля свържете се с нас директно:
Телефон: +359 2 123 4567
Имейл: info@mintclinic.com

С най-добри пожелания,
Екипът на Mint Clinic

---
Mint Clinic - Вашата усмивка е нашата мисия
mintclinic.com
      `.trim()
      : `
Hello ${data.name},

Thank you for contacting Mint Clinic!

We have received your inquiry and will get back to you as soon as possible.

Our team typically responds within 24 hours on business days.

If you have an urgent question, please contact us directly:
Phone: +359 2 123 4567
Email: info@mintclinic.com

Best regards,
The Mint Clinic Team

---
Mint Clinic - Your smile is our mission
mintclinic.com
      `.trim();

  return { subject, text };
}
