"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  description?: string;
}

export function BeforeAfter({
  beforeImage,
  afterImage,
  description,
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <div className="my-8">
      {description && (
        <p className="mb-4 text-center italic text-gray-600">{description}</p>
      )}

      <div
        className="relative aspect-[4/3] w-full cursor-col-resize select-none overflow-hidden rounded-lg"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
      >
        {/* After Image (base layer) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt="After treatment"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute right-4 top-4 rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white">
            След
          </div>
        </div>

        {/* Before Image (clipped layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <Image
            src={beforeImage}
            alt="Before treatment"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-sm font-medium text-white">
            Преди
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute bottom-0 top-0 w-1 cursor-col-resize bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-gray-300 bg-white shadow-lg">
            <div className="h-4 w-1 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>

      <p className="mt-2 text-center text-sm text-gray-500">
        Плъзнете за сравнение
      </p>
    </div>
  );
}
