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
    className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-8
      shadow-[0_20px_50px_rgba(0,0,0,0.4)]
      space-y-6
    "
  >
    {/* Full Name */}

    <div>
      <input
        {...register("fullName")}
        placeholder="Full Name"
        className="
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-950
          px-4
          py-4
          text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          duration-300
          focus:border-yellow-400
          focus:ring-2
          focus:ring-yellow-400/20
        "
      />

      {errors.fullName && (
        <p className="mt-2 text-sm text-red-400">
          {errors.fullName.message}
        </p>
      )}
    </div>

    {/* Email */}

    <div>
      <input
        {...register("email")}
        placeholder="Email Address"
        className="
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-950
          px-4
          py-4
          text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          duration-300
          focus:border-yellow-400
          focus:ring-2
          focus:ring-yellow-400/20
        "
      />

      {errors.email && (
        <p className="mt-2 text-sm text-red-400">
          {errors.email.message}
        </p>
      )}
    </div>

    {/* Phone */}

    <div>
      <input
        {...register("phone")}
        placeholder="Phone Number"
        className="
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-950
          px-4
          py-4
          text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          duration-300
          focus:border-yellow-400
          focus:ring-2
          focus:ring-yellow-400/20
        "
      />

      {errors.phone && (
        <p className="mt-2 text-sm text-red-400">
          {errors.phone.message}
        </p>
      )}
    </div>

    {/* Course */}

    <div>
      <select
        {...register("course")}
        className="
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-950
          px-4
          py-4
          text-white
          outline-none
          transition-all
          duration-300
          focus:border-yellow-400
          focus:ring-2
          focus:ring-yellow-400/20
        "
      >
        <option value="">Select Occupation</option>

        <option value="Job">
          Job 
        </option>

        <option value="Student">
          Student
        </option>

        <option value="Teacher">
        Teacher
        </option>

        <option value="Other">
        Other
        </option>
      </select>

      {errors.course && (
        <p className="mt-2 text-sm text-red-400">
          {errors.course.message}
        </p>
      )}
    </div>

    {/* Message */}

    <div>
      <textarea
        rows={5}
        {...register("message")}
        placeholder="Tell us how we can help you..."
        className="
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-950
          px-4
          py-4
          text-white
          placeholder:text-zinc-500
          outline-none
          resize-none
          transition-all
          duration-300
          focus:border-yellow-400
          focus:ring-2
          focus:ring-yellow-400/20
        "
      />

      {errors.message && (
        <p className="mt-2 text-sm text-red-400">
          {errors.message.message}
        </p>
      )}
    </div>

    <Button
      type="submit"
      fullWidth
      disabled={isSubmitting}
      className="
        rounded-xl
        bg-yellow-400
        py-4
        font-semibold
        text-black
        transition-all
        duration-300
        hover:bg-yellow-300
        hover:shadow-[0_10px_30px_rgba(250,204,21,0.25)]
      "
    >
      {isSubmitting ? "Submitting..." : "Submit Enquiry"}
    </Button>
  </form>
);
};

export default ContactForm;