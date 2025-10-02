import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

interface TestimonialProps {
  quote: string;
  author: string;
  authorImage?: string;
  treatment?: string;
  rating?: number;
}

export function Testimonial({
  quote,
  author,
  authorImage,
  treatment,
  rating = 5,
}: TestimonialProps) {
  return (
    <div className="my-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
      <div className="mb-4 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-400" : "text-gray-200"
            }`}
          />
        ))}
      </div>

      <blockquote className="mb-6 text-lg italic leading-relaxed text-gray-700">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-4">
        {authorImage && (
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
            <Image
              src={authorImage}
              alt={author}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        )}

        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          {treatment && (
            <div className="text-sm text-gray-500">{treatment}</div>
          )}
        </div>
      </div>
    </div>
  );
}
