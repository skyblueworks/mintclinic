import { Button } from "@/components/ui/button";
import LocalizedLink from "@/components/LocalizedLink";
import { Phone } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  variant?: "default" | "outline";
  children?: React.ReactNode;
}

/**
 * CTAButton - Styled call-to-action button for service pages
 * Pre-configured with phone number and attractive styling
 */
export function CTAButton({
  href = "tel:+359888436838",
  variant = "default",
  children = "Запази час",
}: CTAButtonProps) {
  const isExternal = href?.startsWith("http");
  const isPhone = href?.startsWith("tel:");

  const buttonClasses =
    variant === "default"
      ? "shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      : "";

  if (isExternal) {
    return (
      <Button variant={variant} size="lg" className={buttonClasses} asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {isPhone && <Phone className="mr-2 h-5 w-5" />}
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button variant={variant} size="lg" className={buttonClasses} asChild>
      <LocalizedLink href={href}>
        {isPhone && <Phone className="mr-2 h-5 w-5" />}
        {children}
      </LocalizedLink>
    </Button>
  );
}
