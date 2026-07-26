import type { PlacementStep } from "../../../constants/placementData";

interface Props {
  step: PlacementStep;
}

const PlacementCard = ({ step }: Props) => {
  const Icon = step.icon;

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition group-hover:scale-110">
        <Icon size={30} />
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-900">
        {step.title}
      </h3>

      <p className="leading-7 text-slate-600">
        {step.description}
      </p>

    </div>
  );
};

export default PlacementCard;