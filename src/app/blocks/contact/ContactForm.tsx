"use client";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/app/components/ui/phone-input";

const reservationSchema = z
  .object({
    firstName: z
      .string({ error: "First Name is required" })
      .min(2, "First Name must be at least 2 characters"),
    lastName: z
      .string({ error: "Last Name is required" })
      .min(2, "Last Name must be at least 2 characters"),
    email: z.email("Invalid email address"),
    phoneNumber: z
      .string({ error: "Phone number is required" })
      .min(8, "Phone number must be at least 8 digits"),
    nbrGuests: z.object({
      men: z.number().min(0),
      women: z.number().min(0),
    }),
    isVip: z.boolean().default(false),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date",
    }),
  })
  .refine((data) => data.nbrGuests.men + data.nbrGuests.women > 0, {
    message: "At least one guest must be selected",
    path: ["nbrGuests"],
  });

type ReservationFormData = z.infer<typeof reservationSchema>;
const ContactForm = () => {
  const initialForm: ReservationFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nbrGuests: { men: 0, women: 0 },
    isVip: false,
    date: new Date().toISOString(),
  };
  const form = useForm({
    resolver: zodResolver(reservationSchema),
    defaultValues: initialForm,
  });

  const { setValue, watch } = form;
  const isVip = watch("isVip");

  const menGuests = watch("nbrGuests").men;
  const womenGuests = watch("nbrGuests").women;
  const totalGuests = menGuests + womenGuests;

  const onSubmit = (data: ReservationFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <div
        className={cn(
          " w-1/2 border-2  border-[#b08243] mx-auto bg-background  rounded-xl overflow-hidden transition-colors duration-500 ease-in-out ",
          isVip && "border-white bg-primary ",
        )}
      >
        <div className="w-full h-full flex flex-col-reverse md:grid md:grid-cols-2 ">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FieldGroup>
              <div className="flex flex-col space-y-4 p-4">
                <h2>Reservation</h2>
                <Controller
                  name="firstName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={`firstName-input`}>
                        First Name
                      </FieldLabel>
                      <Input
                        {...field}
                        id={`firstName-input`}
                        aria-invalid={fieldState.invalid}
                        placeholder="First Name"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="lastName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={`lastName-input`}>
                        Last Name
                      </FieldLabel>
                      <Input
                        {...field}
                        id={`lastName-input`}
                        aria-invalid={fieldState.invalid}
                        placeholder="Last Name"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={`email-input`}>Email</FieldLabel>
                      <Input
                        {...field}
                        id={`email-input`}
                        aria-invalid={fieldState.invalid}
                        placeholder="Email"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="phoneNumber"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={`phoneNumber-input`}>
                        Phone Number
                      </FieldLabel>
                      <PhoneInput
                        {...field}
                        value={field.value ?? undefined}
                        defaultCountry="BH"
                        id={`phoneNumber-input`}
                        aria-invalid={fieldState.invalid}
                        placeholder="Phone Number"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
               
                <div
                  className="relative gap-2 grid grid-cols-2 border w-48 py-2 px-4 cursor-pointer"
                  onClick={() => {
                    setValue("isVip", !isVip);
                  }}
                >
                  <label
                    htmlFor="NonVip"
                    className="text-center bg-transparent z-10"
                  >
                    Standard
                  </label>
                  <label
                    htmlFor="vip"
                    className="text-center bg-transparent z-10"
                  >
                    Vip
                  </label>
                  <div
                    className={cn(
                      " absolute h-full w-1/2 bg-black transition-all duration-300 ease-out",
                        isVip && "translate-x-full"
                    )}
                  />
                </div>
              </div>
            </FieldGroup>
          </form>

          <div className=" h-20 md:h-full overflow-hidden ">
            <div className=" relative h-full w-full flex items-center justify-center ">
              <img
                src="/ourImages/reservation/reserved.jpg"
                alt=""
                className={cn(
                  " absolute   w-full h-full transition-transform ease-in-out duration-500 object-cover",
                  isVip && "  -translate-x-full ",
                )}
              />
              <img
                src="/ourImages/reservation/vip-table.jpg"
                alt=""
                className={cn(
                  " absolute   w-full h-full transition-transform ease-in-out duration-500 object-cover",
                  !isVip && "  translate-x-full ",
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
