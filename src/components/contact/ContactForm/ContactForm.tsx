import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../ui/Button/Button";

import {
  contactSchema,
  type ContactFormData,
} from "../../../validations/contactSchema";
import { createEnquiry } from "@/services/enquiryService";

interface ContactFormProps {
    onSuccess?: () => void;
  }
  const ContactForm = ({
    onSuccess,
  }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {

    try {

        await createEnquiry(data);

        alert("Enquiry submitted successfully!");

        onSuccess?.();

    } catch (error) {

        console.error(error);

        alert("Something went wrong.");

    }

};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div>
        <input
          {...register("fullName")}
          placeholder="Full Name"
          className="w-full rounded-xl border p-4"
        />

        {errors.fullName && (
          <p className="mt-2 text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Email Address"
          className="w-full rounded-xl border p-4"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <input
          {...register("phone")}
          placeholder="Phone Number"
          className="w-full rounded-xl border p-4"
        />

        {errors.phone && (
          <p className="mt-2 text-sm text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <select
          {...register("course")}
          className="w-full rounded-xl border p-4"
        >
          <option value="">Select Course</option>

          <option value="Java Full Stack">
            Java Full Stack
          </option>

          <option value="Cloud & DevOps">
            Cloud & DevOps
          </option>

          <option value="AI & Machine Learning">
            AI & Machine Learning
          </option>

          <option value="Data Analytics">
            Data Analytics
          </option>
        </select>

        {errors.course && (
          <p className="mt-2 text-sm text-red-500">
            {errors.course.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          rows={5}
          {...register("message")}
          placeholder="Message"
          className="w-full rounded-xl border p-4"
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Submitting..."
          : "Submit Enquiry"}
      </Button>
    </form>
  );
};

export default ContactForm;