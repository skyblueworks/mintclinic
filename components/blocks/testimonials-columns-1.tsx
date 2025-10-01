"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FiExternalLink } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: any;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 bg-background pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(
                ({ text, image, name, role, reviewUrl, stars }, i: number) => (
                  <div
                    className="relative w-full max-w-md rounded-3xl rounded-bl-none rounded-tr-none border border-primary/10 p-6 shadow-lg shadow-primary/10"
                    key={i}
                  >
                    {/* Star Rating with Link Icon */}
                    {stars && (
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, starIndex) => (
                            <FaStar
                              key={starIndex}
                              size={14}
                              className={
                                starIndex < stars
                                  ? "text-yellow-400"
                                  : "text-gray-200"
                              }
                            />
                          ))}
                          <span className="ml-1 text-sm font-medium text-primary/60">
                            {stars}/5
                          </span>
                        </div>
                        {reviewUrl && (
                          <a
                            href={reviewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 text-primary/60 transition-colors hover:text-primary"
                            title="View on Google Reviews"
                          >
                            <FiExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    )}

                    <div>{text}</div>
                    <div className="mt-5 flex items-center gap-3">
                      {image.startsWith("http") ? (
                        <img
                          width={40}
                          height={40}
                          src={image}
                          alt={name}
                          className="h-10 w-10 rounded-full"
                        />
                      ) : (
                        <Image
                          width={40}
                          height={40}
                          src={image}
                          alt={name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      )}
                      <div className="flex flex-col gap-0.5">
                        <div className="font-medium leading-5 tracking-tight">
                          {name}
                        </div>
                        <div className="text-sm leading-5 tracking-tight opacity-60">
                          {role}
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
