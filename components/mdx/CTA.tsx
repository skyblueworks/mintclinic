import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface CTAProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonUrl: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function CTA({
  title,
  description,
  buttonText,
  buttonUrl,
  variant = "primary",
  size = "md",
}: CTAProps) {
  const sizeClasses = {
    sm: "py-8 px-6",
    md: "py-12 px-8",
    lg: "py-16 px-12",
  };

  const buttonVariants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-green-600 text-white hover:bg-green-700",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  const backgroundVariants = {
    primary: "bg-gradient-to-r from-blue-50 to-blue-100",
    secondary: "bg-gradient-to-r from-green-50 to-green-100",
    outline: "bg-gradient-to-r from-gray-50 to-gray-100",
  };

  return (
    <div
      className={`${backgroundVariants[variant]} ${sizeClasses[size]} my-8 rounded-2xl text-center`}
    >
      <div className="mx-auto max-w-2xl">
        <h3 className="mb-4 text-2xl font-bold text-gray-900">{title}</h3>

        {description && (
          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            {description}
          </p>
        )}

        <Link
          href={buttonUrl}
          className={`inline-flex transform items-center gap-2 rounded-full px-8 py-4 font-semibold transition-all duration-200 hover:scale-105 ${buttonVariants[variant]} `}
        >
          {buttonText}
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
