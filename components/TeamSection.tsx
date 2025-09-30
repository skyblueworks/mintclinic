import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="py-16 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <img
            src="/team-image.webp"
            alt="Team"
            className="w-full h-full lg:w-1/2 max-h-[600px] object-cover rounded-big rounded-tr-none rounded-bl-none"
          />

          {/* Content */}
          <div className="w-full lg:w-1/2 relative">
            <h2 className="text-3xl lg:text-2xl text-primary mb-6 font-light leading-tight">
              Най-големите проблеми не произтичат от ръцете на зъболекарите,{" "}
              <span className="text-primary font-bold">
                а от техните глави.
              </span>
            </h2>

            <p className="text-primary font-dm-sans leading-relaxed mb-8 text-md">
              Затова ние се съсредоточаваме точно в това- да планираме.
              Поддържаме умовете си остри и активно развиваме своите умения,
              посещавайки реномирани следдипломни квалификационни курсове.
            </p>

            <button className="bg-transparent border border-primary text-primary font-extrabold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-200">
              Екип
            </button>

            {/* Decorative Image */}
            <div className="absolute -bottom-0 -right-0 opacity-20 pointer-events-none hidden lg:block">
              <Image
                src="/mint-colored.svg"
                alt="Decorative mint"
                width={120}
                height={120}
                className="w-[120px] transform scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
