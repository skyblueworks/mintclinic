import { cn } from "@/lib/utils";

interface TitleSectionProps {
  title: string;
  description?: string;
  className?: string;
}

export default function TitleSection({
  title,
  description,
  className,
}: TitleSectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col gap-4 bg-white px-6 pb-12 pt-16 text-center lg:pb-16 lg:pt-32",
        className,
      )}
    >
      <h1 className="text-4xl font-light text-primary lg:text-5xl">{title}</h1>
      {description && (
        <p className="mx-auto max-w-2xl font-dm-sans text-lg leading-relaxed text-primary/80">
          {description}
        </p>
      )}
    </section>
  );
}
