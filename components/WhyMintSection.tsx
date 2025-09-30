import Image from "next/image";

export default function WhyMintSection() {
  const reasons = [
    {
      id: 1,
      title: "Сигурност",
      description:
        "Работата се извършва по издържани международни протоколи. Последователността на леченията гарантира, че няма да остане необърнат камък по пътя от точка А, до желаната от вас точка В. Така ще можете да се радвате на новата си усмивка за много години напред.",
    },
    {
      id: 2,
      title: "Лично отношение",
      description:
        "Ние ви познаваме, познавате ни и вие. Минт не е част от корпоративна верига, а е малка клиника в сърцето на столицата. За нас личното отношение и комфорта на пациентите са есенциални, което е подчертано от уютния интериор. Откритата комуникация и доверието са в основата на успешното лечение и ние държим на това.",
    },
    {
      id: 3,
      title: "Високо качество",
      description:
        "Успехът е успех, само когато издържи теста на времето. Не само зъболекаря, но и материалите са от съществено значение за постигането на дълготрайни резултати. Ние в Минт се запасяваме само с продукти от доказани производители, за да няма неприятни изненади 🙂.",
    },
  ];

  return (
    <section className="py-8 lg:py-16 bg-white relative md:px-6 isolate">
      <div className="max-w-7xl mx-auto">
        <div className="md:hidden absolute top-[215px] right-8 opacity-20 pointer-events-none z-10">
          <Image
            src="/mint.svg"
            alt="Decorative mints"
            width={100}
            height={100}
            className="w-[100px]"
          />
        </div>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="hidden md:block w-full md:w-1/3 sticky top-16">
            <h2 className="text-5xl font-bold text-primary top-32">
              Защо MINT
            </h2>
          </div>
          <div className="w-full md:w-2/3 gap-12 flex flex-col bg-primary rounded-big rounded-tr-none rounded-bl-none p-12 py-[6rem] text-white relative">
            <h2 className="md:hidden text-4xl text-center mb-8 -mt-8 lg:text-6xl font-bold text-white">
              Защо MINT
            </h2>
            {reasons.map((reason) => (
              <div key={reason.id} className="flex flex-col gap-4">
                <div className="flex-shrink-0 text-6xl font-bold">
                  {reason.id}.
                </div>
                <h4 className="text-2xl font-bold">{reason.title}</h4>
                <p className="text-white font-dm-sans leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="hidden md:block absolute bottom-16 left-0 opacity-20 pointer-events-none -z-10">
        <Image
          src="/mint-colored.svg"
          alt="Decorative mints"
          width={240}
          height={182}
          className="w-2/3 h-auto"
        />
      </div>
    </section>
  );
}
