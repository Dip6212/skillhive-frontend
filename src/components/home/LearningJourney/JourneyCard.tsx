import type { JourneyStep } from "../../../constants/journeyData";

interface Props {
  step: JourneyStep;
}

const JourneyCard = ({ step }: Props) => {
  const Icon = step.icon;

  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
        <Icon size={30} />
      </div>

      <span className="text-sm font-semibold text-blue-600">
        STEP {step.id}
      </span>

      <h3 className="mt-2 text-2xl font-bold text-slate-900">
        {step.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {step.description}
      </p>

    </div>
  );
};

export default JourneyCard;