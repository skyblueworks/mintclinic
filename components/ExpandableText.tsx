"use client";
import { useState } from "react";

type Props = {
  text: string;
  clampLines?: number;
  readMoreLabel: string;
  readLessLabel: string;
  className?: string;
};

export default function ExpandableText({
  text,
  readMoreLabel,
  readLessLabel,
  className = "",
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p
        className={`font-dm-sans leading-relaxed text-gray-600 transition-all ${className} ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {text}
      </p>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-1 text-sm font-medium text-primary/60 hover:text-primary"
      >
        {expanded ? readLessLabel : readMoreLabel}
      </button>
    </div>
  );
}
