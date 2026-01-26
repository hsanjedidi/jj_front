"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const reservationSchema = z.object({
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phoneNumber: z.string().min(8, "Numéro trop court"),
  isVip: z.boolean(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      isVip: false,
    },
  });

  const isVip = watch("isVip");

  const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-950 p-4 font-sans">
      <div
        className={cn(
          "w-full max-w-5xl rounded-2xl overflow-hidden transition-all duration-700 ease-in-out border shadow-2xl",
          // INVERSION : Standard (Gold à droite, Black à gauche) | VIP (Black à droite, Gold à gauche)
          !isVip
            ? "bg-gradient-to-r from-black from-50% to-[#b08243] to-50% border-[#b08243]/30"
            : "bg-gradient-to-r from-[#b08243] from-50% to-black to-50% border-white/20",
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* --- SECTION FORMULAIRE --- */}
          <div className="p-8 md:p-12 transition-colors duration-700">
            <h2
              className={cn(
                "text-4xl font-serif mb-8 transition-colors duration-700",
                isVip ? "text-black" : "text-[#b08243]",
              )}
            >
              Reservation
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-4">
                {[
                  { name: "firstName" as const, label: "First Name" },
                  { name: "lastName" as const, label: "Last Name" },
                  { name: "email" as const, label: "Email", type: "email" },
                  { name: "phoneNumber" as const, label: "Phone Number" },
                ].map((input) => (
                  <div key={input.name} className="flex flex-col gap-1">
                    <label
                      className={cn(
                        "text-sm font-medium transition-colors duration-700",
                        isVip ? "text-black/80" : "text-white/70",
                      )}
                    >
                      {input.label}
                    </label>
                    <Controller
                      name={input.name}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type={input.type || "text"}
                          className={cn(
                            "rounded-md h-12 px-4 outline-none transition-all duration-700 border-none",
                            // Style dynamique de l'input selon le fond
                            isVip
                              ? "bg-black/10 text-black placeholder:text-black/40 focus:ring-1 focus:ring-black/20"
                              : "bg-white/5 text-white placeholder:text-white/30 focus:ring-1 focus:ring-white/20",
                          )}
                          placeholder={input.label}
                        />
                      )}
                    />
                    {errors[input.name] && (
                      <span className="text-red-500 text-[10px] font-bold uppercase">
                        {errors[input.name]?.message}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* --- TOGGLE SWITCH --- */}
              <div className="pt-6">
                <div
                  className="relative grid grid-cols-2 w-48 p-1 rounded-full cursor-pointer bg-black/80 border border-white/10"
                  onClick={() => setValue("isVip", !isVip)}
                >
                  <span
                    className={cn(
                      "z-10 text-[10px] uppercase tracking-widest font-black text-center py-2.5 transition-colors duration-500",
                      !isVip ? "text-black" : "text-gray-400",
                    )}
                  >
                    Standard
                  </span>
                  <span
                    className={cn(
                      "z-10 text-[10px] uppercase tracking-widest font-black text-center py-2.5 transition-colors duration-500",
                      isVip ? "text-black" : "text-gray-400",
                    )}
                  >
                    VIP
                  </span>
                  <div
                    className={cn(
                      "absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-br from-[#f6e7b1] via-[#d4af37] to-[#b08243] transition-transform duration-500",
                      isVip && "translate-x-[calc(100%+4px)]",
                    )}
                  />
                </div>
              </div>

              <button
                className={cn(
                  "w-full py-4 rounded-md font-bold uppercase tracking-widest text-xs transition-all duration-700 mt-4 border",
                  isVip
                    ? "bg-black text-[#d4af37] border-black"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20",
                )}
              >
                Confirm Reservation
              </button>
            </form>
          </div>

          {/* --- SECTION IMAGE (DROITE) --- */}
          <div className="relative min-h-[500px] overflow-hidden bg-black">
            <img
              src="/ourImages/reservation/contact1.jpg"
              alt="Standard"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-all duration-1000",
                isVip ? "opacity-0 scale-110" : "opacity-100 scale-100",
              )}
            />
            <div
              className={cn(
                "absolute inset-0 transition-all duration-1000",
                !isVip
                  ? "opacity-0 translate-x-full"
                  : "opacity-100 translate-x-0",
              )}
            >
              <img
                src="/ourImages/reservation/vip.avif"
                alt="VIP"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
