import { SUPPORTED_LOCALES } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
  }));
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const isBg = locale === "bg";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">
          {isBg ? "Политика за поверителност" : "Privacy Policy"}
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          {isBg ? (
            <>
              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  1. Събиране на информация
                </h2>
                <p className="text-gray-700">
                  Mint Clinic събира лична информация, която ни предоставяте
                  доброволно при записване на час, регистрация или комуникация с
                  нас. Това може да включва:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Име и фамилия</li>
                  <li>Телефонен номер</li>
                  <li>Имейл адрес</li>
                  <li>Медицинска информация (при необходимост)</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  2. Използване на информацията
                </h2>
                <p className="text-gray-700">
                  Събраната информация се използва за:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Записване и управление на часове</li>
                  <li>Предоставяне на дентални услуги</li>
                  <li>Комуникация относно вашето лечение</li>
                  <li>
                    Изпращане на напомняния и актуализации (с ваше съгласие)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  3. Защита на данните
                </h2>
                <p className="text-gray-700">
                  Ние прилагаме подходящи технически и организационни мерки за
                  защита на вашата лична информация срещу неоторизиран достъп,
                  загуба или злоупотреба.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  4. Споделяне на информация
                </h2>
                <p className="text-gray-700">
                  Mint Clinic не продава, не обменя и не предоставя вашата лична
                  информация на трети страни, освен когато това е необходимо за
                  предоставяне на услугата или изисквано от закона.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">5. Вашите права</h2>
                <p className="text-gray-700">Имате право да:</p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Получите достъп до вашата лична информация</li>
                  <li>Поискате корекция на неточни данни</li>
                  <li>Поискате изтриване на вашите данни</li>
                  <li>Оттеглите съгласието си за обработка на данни</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">6. Cookies</h2>
                <p className="text-gray-700">
                  Нашият уебсайт може да използва cookies за подобряване на
                  потребителското изживяване и анализ на трафика.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">7. Контакт</h2>
                <p className="text-gray-700">
                  За въпроси относно тази политика за поверителност, моля
                  свържете се с нас на:
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
                  1. Information Collection
                </h2>
                <p className="text-gray-700">
                  Mint Clinic collects personal information that you voluntarily
                  provide when booking an appointment, registering, or
                  communicating with us. This may include:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>First and last name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Medical information (when necessary)</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  2. Use of Information
                </h2>
                <p className="text-gray-700">
                  The collected information is used for:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Booking and managing appointments</li>
                  <li>Providing dental services</li>
                  <li>Communication regarding your treatment</li>
                  <li>Sending reminders and updates (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  3. Data Protection
                </h2>
                <p className="text-gray-700">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, loss, or misuse.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  4. Information Sharing
                </h2>
                <p className="text-gray-700">
                  Mint Clinic does not sell, trade, or provide your personal
                  information to third parties, except when necessary to provide
                  the service or required by law.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">5. Your Rights</h2>
                <p className="text-gray-700">You have the right to:</p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw your consent for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">6. Cookies</h2>
                <p className="text-gray-700">
                  Our website may use cookies to improve user experience and
                  analyze traffic.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">7. Contact</h2>
                <p className="text-gray-700">
                  For questions about this privacy policy, please contact us at:
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
