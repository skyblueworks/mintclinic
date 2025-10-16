type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const isBg = locale === "bg";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">
          {isBg ? "Общи условия" : "Terms & Conditions"}
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          {isBg ? (
            <>
              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  1. Приемане на условията
                </h2>
                <p className="text-gray-700">
                  Като използвате услугите на Mint Clinic, вие се съгласявате с
                  настоящите общи условия. Ако не сте съгласни с тези условия,
                  моля не използвайте нашите услуги.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  2. Записване на час
                </h2>
                <p className="text-gray-700">
                  Пациентите могат да записват час онлайн, по телефон или лично
                  в клиниката. Записаният час трябва да бъде потвърден от нашия
                  екип.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>
                    При отмяна или промяна на час, моля уведомете ни поне 24
                    часа предварително
                  </li>
                  <li>
                    При неявяване без предупреждение, клиниката си запазва
                    правото да откаже бъдещи записвания
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  3. Плащания и цени
                </h2>
                <p className="text-gray-700">
                  Всички цени са посочени в български левове (BGN) и включват
                  ДДС, освен ако не е упоменато друго.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Приемат се плащания в брой и с карта</li>
                  <li>
                    За някои процедури може да се изисква капаро при записване
                  </li>
                  <li>
                    Цените могат да се променят без предизвестие, но ще бъдат
                    обявени предварително
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  4. Медицинска информация
                </h2>
                <p className="text-gray-700">
                  Пациентите са длъжни да предоставят точна и пълна медицинска
                  информация. Mint Clinic не носи отговорност за усложнения,
                  възникнали в резултат на непредоставена или неточна информация
                  от страна на пациента.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  5. Гаранции и отговорности
                </h2>
                <p className="text-gray-700">
                  Mint Clinic предоставя гаранции за определени процедури и
                  материали съгласно действащото законодателство. Гаранцията не
                  покрива щети, причинени от:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Неспазване на препоръките на лекаря</li>
                  <li>Лоша орална хигиена</li>
                  <li>Травми или инциденти извън контрола на клиниката</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  6. Интелектуална собственост
                </h2>
                <p className="text-gray-700">
                  Всички материали, изображения и съдържание на уебсайта са
                  собственост на Mint Clinic и са защитени от законите за
                  авторско право.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  7. Изменения на условията
                </h2>
                <p className="text-gray-700">
                  Mint Clinic си запазва правото да променя тези общи условия по
                  всяко време. Актуалната версия винаги ще бъде достъпна на
                  нашия уебсайт.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">8. Контакт</h2>
                <p className="text-gray-700">
                  За въпроси относно тези общи условия, моля свържете се с нас
                  на:
                </p>
                <p className="text-gray-700">
                  Имейл:{" "}
                  <a
                    href="mailto:info@mintclinic.com"
                    className="text-primary hover:underline"
                  >
                    info@mintclinic.com
                  </a>
                  <br />
                  Телефон:{" "}
                  <a
                    href="tel:+359888436838"
                    className="text-primary hover:underline"
                  >
                    +359 888 436 838
                  </a>
                  <br />
                  Адрес: ул. Д-р Стефан Сарафов 20, София
                </p>
              </section>

              <section>
                <p className="text-sm text-gray-600">
                  Последна актуализация:{" "}
                  {new Date().toLocaleDateString("bg-BG")}
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700">
                  By using Mint Clinic&apos;s services, you agree to these terms
                  and conditions. If you do not agree with these terms, please
                  do not use our services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  2. Appointment Booking
                </h2>
                <p className="text-gray-700">
                  Patients can book appointments online, by phone, or in person
                  at the clinic. The booked appointment must be confirmed by our
                  team.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>
                    To cancel or reschedule an appointment, please notify us at
                    least 24 hours in advance
                  </li>
                  <li>
                    No-shows without prior notice may result in the clinic
                    refusing future bookings
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  3. Payments and Prices
                </h2>
                <p className="text-gray-700">
                  All prices are stated in Bulgarian Lev (BGN) and include VAT
                  unless otherwise stated.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>We accept cash and card payments</li>
                  <li>Some procedures may require a deposit upon booking</li>
                  <li>
                    Prices may change without notice, but will be announced in
                    advance
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  4. Medical Information
                </h2>
                <p className="text-gray-700">
                  Patients are required to provide accurate and complete medical
                  information. Mint Clinic is not responsible for complications
                  arising from missing or inaccurate information provided by the
                  patient.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  5. Warranties and Liabilities
                </h2>
                <p className="text-gray-700">
                  Mint Clinic provides warranties for certain procedures and
                  materials in accordance with applicable law. The warranty does
                  not cover damage caused by:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Non-compliance with doctor&apos;s recommendations</li>
                  <li>Poor oral hygiene</li>
                  <li>Trauma or incidents beyond the clinic&apos;s control</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  6. Intellectual Property
                </h2>
                <p className="text-gray-700">
                  All materials, images, and content on the website are the
                  property of Mint Clinic and are protected by copyright laws.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  7. Changes to Terms
                </h2>
                <p className="text-gray-700">
                  Mint Clinic reserves the right to modify these terms and
                  conditions at any time. The current version will always be
                  available on our website.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">8. Contact</h2>
                <p className="text-gray-700">
                  For questions about these terms and conditions, please contact
                  us at:
                </p>
                <p className="text-gray-700">
                  Email:{" "}
                  <a
                    href="mailto:info@mintclinic.com"
                    className="text-primary hover:underline"
                  >
                    info@mintclinic.com
                  </a>
                  <br />
                  Phone:{" "}
                  <a
                    href="tel:+359888436838"
                    className="text-primary hover:underline"
                  >
                    +359 888 436 838
                  </a>
                  <br />
                  Address: 20 Dr. Stefan Sarafov St., Sofia
                </p>
              </section>

              <section>
                <p className="text-sm text-gray-600">
                  Last updated: {new Date().toLocaleDateString("en-US")}
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
