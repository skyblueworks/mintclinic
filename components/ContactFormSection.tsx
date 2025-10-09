"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(1, "Моля, въведете вашето име"),
  email: z.string().email("Моля, въведете валиден имейл"),
  phone: z
    .string()
    .regex(/^[0-9()#+*\-=.]*$/, "Моля, въведете валиден телефонен номер")
    .optional()
    .or(z.literal("")),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // TODO: Replace with actual form submission logic
      console.log("Form data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitMessage({
        type: "success",
        text: "Вашето съобщение беше изпратено успешно!",
      });
      reset();
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Възникна грешка при изпращането. Моля, опитайте отново.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="bg-white px-6 py-12 lg:px-8 lg:py-20"
      {...fadeInMotionProps}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div>
            <h2 className="mb-8 text-3xl font-semibold text-primary lg:text-4xl">
              Свържете се с нас!
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name Field */}
              <div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Име"
                  className="w-full rounded-full border border-primary/30 px-6 py-3.5 font-dm-sans text-base transition-colors placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                {errors.name && (
                  <p className="mt-2 px-6 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Имейл"
                  className="w-full rounded-full border border-primary/30 px-6 py-3.5 font-dm-sans text-base transition-colors placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                {errors.email && (
                  <p className="mt-2 px-6 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Телефон"
                  className="w-full rounded-full border border-primary/30 px-6 py-3.5 font-dm-sans text-base transition-colors placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                {errors.phone && (
                  <p className="mt-2 px-6 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Съобщение"
                  className="w-full rounded-3xl border border-primary/30 px-6 py-3.5 font-dm-sans text-base transition-colors placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                {errors.message && (
                  <p className="mt-2 px-6 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="self-center tracking-wider lg:self-start"
                size="lg"
              >
                {isSubmitting ? "Изпращане..." : "Изпращане"}
              </Button>

              {/* Submit Message */}
              {submitMessage && (
                <div
                  className={`rounded-2xl p-4 text-sm ${
                    submitMessage.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>

          {/* Right Column - Image */}
          <div>
            <h2 className="mb-8 text-3xl font-semibold text-primary lg:text-4xl">
              Къде сме
            </h2>

            <div className="overflow-hidden rounded-3xl rounded-bl-none rounded-tr-none">
              <Image
                src="https://mintclinic.com/wp-content/uploads/2024/10/image00045.webp" // TODO: Change with hosted image
                alt="Mint Clinic - Exterior"
                width={600}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
