"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "bg";
  const isBg = locale === "bg";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h2 className="mb-4 text-2xl font-bold">
          {isBg ? "Нещо се обърка!" : "Something went wrong!"}
        </h2>
        <p className="mb-2 text-muted-foreground">
          {isBg
            ? "Възникна грешка при показването на тази страница."
            : "An error occurred while rendering this page."}
        </p>
        {process.env.NODE_ENV === "development" && (
          <div>
            {error.message && (
              <pre className="mb-2 overflow-auto rounded bg-muted p-4 text-left text-sm text-muted-foreground">
                {error.message}
              </pre>
            )}
            {error.stack && (
              <pre className="mt-4 overflow-auto rounded bg-muted p-4 text-left text-sm">
                {error.stack}
              </pre>
            )}
          </div>
        )}
        <Button onClick={reset} className="mt-6">
          {isBg ? "Опитай отново" : "Try again"}
        </Button>
      </div>
    </div>
  );
}
