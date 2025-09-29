export default function InfoSection() {
  const infoCards = [
    {
      id: 1,
      title: "Липсващ зъб",
      subtitle: "Да ти липсва зъбче е чаровно... когато си на шест.",
      description:
        "Ако сте на малко повече от шест, то вероятно няма да поникне нов зъб на мястото на стария. Но не се притеснявайте, за вас има надеждна алтернатива с висока успеваемост- денталният имплант. Дупката е затворена незабележимо и то съвсем без болка. :)",
      buttonText: "Дентални Импланти",
    },
    {
      id: 2,
      title: "Натурална естетика",
      subtitle:
        "Някои отенъци на бялото принадлежат само към плочките в банята ви.",
      description:
        "Във всеки от нас има заложен афинитет към натуралната визия. Чрез познаване на природните закономерности, малко артистичен усет и... модерен софтуер, ние успяваме да създадем естествени усмивки, изтъкващи индивидуалната красота на всеки пациент.",
      buttonText: "Digital Smile Design",
    },
    {
      id: 3,
      title: "Страх от зъболекар?",
      subtitle: "С нежна грижа към всеки пациент.",
      description:
        "Не позволявайте на потискащото чувство да ви пречи да имате здрава и красива усмивка. Най-важна, но и най-трудна е първата стъпка и ние го разбираме. Затова заповядайте да пием по чаша чай и да си поговорим, преди дори да сте седнали на зъболекарския стол.",
      buttonText: "Контакт",
    },
  ];

  return (
    <section className="py-16 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 h-auto lg:flex-row">
          {infoCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl rounded-tr-none rounded-bl-none p-6 flex-1 flex flex-col justify-between transition-shadow duration-300 [box-shadow:0px_4px_20px_2px_hsla(var(--mintclinic-mint-dark-hsl)_/_.10)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">
                    {card.title}
                  </h3>
                  <span className="text-primary text-2xl font-light">+</span>
                </div>
                {card.subtitle && (
                  <h4 className="text-lg font-semibold mb-4 text-foreground font-dm-sans">
                    {card.subtitle}
                  </h4>
                )}
                <p className="text-foreground/90 font-dm-sans leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>
              <button className="bg-transparent border border-primary text-primary font-extrabold px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-200 self-start w-full">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
