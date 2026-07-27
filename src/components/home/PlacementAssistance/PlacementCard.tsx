import type { PlacementStep } from "../../../constants/placementData";

interface Props {
  step: PlacementStep;
}

const PlacementCard = ({ step }: Props) => {
  const Icon = step.icon;

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-gradient-to-b
      from-zinc-900
      via-[#111111]
      to-black
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-yellow-400/60
      hover:shadow-[0_0_35px_rgba(250,204,21,0.15)]
    "
    >

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">

        <div
          className="
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-yellow-400/10
          blur-3xl
        "
        />

      </div>

      {/* Icon */}
      <div
        className="
        mb-6
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-yellow-400/15
        border
        border-yellow-400/20
        text-yellow-400
        transition-all
        duration-300
        group-hover:scale-110
        group-hover:bg-yellow-400
        group-hover:text-black
      "
      >
        <Icon size={30} />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-white">
        {step.title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-zinc-400">
        {step.description}
      </p>

    </div>
  );
};

export default PlacementCard;