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
 * Pre-configured with Dr. Aleksov's SuperDoc booking page
 */
export function CTAButton({
  href = "https://superdoc.bg/lekar/aleksandar-aleksov",
  variant = "default",
  children = "Запази час",
}: CTAButtonProps) {
  const isExternal = href?.startsWith("http");
  const isPhone = href?.startsWith("tel:");

  const buttonClasses =
    variant === "default"
      ? "shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      : "";

  // Use regular anchor tag for external links and phone links
  if (isExternal || isPhone) {
    return (
      <Button variant={variant} size="lg" className={buttonClasses} asChild>
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {isPhone && <Phone className="mr-2 h-5 w-5" />}
          {children}
        </a>
      </Button>
    );
  }

  // Use LocalizedLink only for internal links
  return (
    <Button variant={variant} size="lg" className={buttonClasses} asChild>
      <LocalizedLink href={href}>{children}</LocalizedLink>
    </Button>
  );
}
