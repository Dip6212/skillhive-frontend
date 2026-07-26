import ContactForm from "../../contact/ContactForm/ContactForm";

interface Props {
  onSuccess: () => void;
}

const LeadForm = ({
  onSuccess,
}: Props) => {
  return (
    <>
      <div className="text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          FREE Career Guidance
        </span>

        <h2 className="mt-5 text-4xl font-bold">
          Book Your Free Counselling
        </h2>

        <p className="mt-4 mb-8 text-slate-600">
          Talk with our career experts and get a personalized roadmap.
        </p>

      </div>

      <ContactForm
        onSuccess={onSuccess}
      />

    </>
  );
};

export default LeadForm;