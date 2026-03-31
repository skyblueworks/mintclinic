"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
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
  const [isClamped, setIsClamped] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setIsClamped(el.scrollHeight > el.clientHeight + 2);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  return (
    <div>
      <p
        ref={ref}
        className={`font-dm-sans leading-relaxed text-gray-600 transition-all ${className} ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {text}
      </p>
      {(isClamped || expanded) && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 text-sm font-medium text-primary/60 hover:text-primary"
        >
          {expanded ? readLessLabel : readMoreLabel}
        </button>
      )}
    </div>
  );
}
