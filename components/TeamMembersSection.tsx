"use client";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  href?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Д-р Александър Алексов",
    role: "Водещ зъболекар и собственик",
    image: "/dr-aleksov.webp",
    href: "/team/dr-aleksov",
  },
  {
    name: "Д-р Ивета Доганова",
    role: "Зъболекар",
    image: "/dr-doganova.webp",
    href: "/team/dr-doganova",
  },
];

interface TeamMembersSectionProps {
  data: {
    title: { bg: string; en: string };
    titleBold: { bg: string; en: string };
  };
  locale: "bg" | "en";
  className?: string;
}

export default function TeamMembersSection({
  data,
  locale,
  className,
}: TeamMembersSectionProps) {
  return (
    <motion.section
      className={cn("bg-white py-16 lg:py-24", className)}
      {...fadeInMotionProps}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-light leading-tight text-primary lg:text-4xl">
          {data.title[locale]}{" "}
          <span className="font-bold">{data.titleBold[locale]}</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {member.href ? (
                <a
                  href={member.href}
                  className="flex flex-col items-center text-center transition-opacity hover:opacity-80"
                >
                  <div className="mb-6 overflow-hidden rounded-3xl rounded-bl-none rounded-tr-none">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={682}
                      height={1024}
                      className="h-[50vh] w-full max-w-[400px] object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="font-sans text-lg font-light text-foreground">
                    {member.role}
                  </p>
                </a>
              ) : (
                <>
                  <div className="mb-6 overflow-hidden rounded-3xl rounded-bl-none rounded-tr-none">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={682}
                      height={1024}
                      className="h-[50vh] w-full max-w-[400px] object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="font-sans text-lg font-light text-foreground">
                    {member.role}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
