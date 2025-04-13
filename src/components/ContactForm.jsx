import React from "react";
import "../styles/components/contactform.scss";
import * as z from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TriangleAlert } from "lucide-react";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  contact_number: z
    .string()
    .min(1, "Phone number is required")
    .refine((val) => isValidPhoneNumber(val), {
      message: "Invalid phone number",
    }),

  company_name: z.string().min(1, "Business or company name is required"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    if (data) {
      toast.success("Form has been submitted successfully!");
      reset();
    }
  };

  return (
    <div className="contact-form-container">
      <section className="heading-section">
        <h1>Contact us</h1>
        <p>Speak with our team to see how we can help your business.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-field">
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              autoComplete="off"
            />
            {errors.name && (
              <p className="error">
                <TriangleAlert />
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="form-field">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              autoComplete="off"
            />
            {errors.email && (
              <p className="error">
                <TriangleAlert />
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="form-field">
            <input
              type="tel"
              placeholder="Your best contact number"
              {...register("contact_number")}
              autoComplete="off"
            />
            {errors.contact_number && (
              <p className="error">
                <TriangleAlert />
                {errors.contact_number.message}
              </p>
            )}
          </div>
          <div className="form-field">
            <textarea
              placeholder="Business or company name"
              {...register("company_name")}
              autoComplete="off"
            />
            {errors.company_name && (
              <p className="error">
                <TriangleAlert />
                {errors.company_name.message}
              </p>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
