import { Clock3, GraduationCap, ArrowRight, IndianRupee } from "lucide-react";
import type { UniversityProgram } from "@/constants/universityPrograms";

interface UniversityProgramCardProps {
  program: UniversityProgram;
}

const UniversityProgramCard = ({ program }: UniversityProgramCardProps) => {
  return (
    <div
      className="
        group
        flex
        h-full
        min-w-[320px]
        max-w-[360px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-yellow-500/40
        hover:shadow-[0_20px_60px_rgba(234,179,8,0.18)]
      "
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/20 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-yellow-500 px-4 py-1 text-xs font-semibold text-black shadow-lg">
          {program.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-yellow-400">
          <GraduationCap size={18} />
          <span className="text-sm font-medium">
            {program.university}
          </span>
        </div>

        <h3 className="mb-5 text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-yellow-400">
          {program.title}
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
            <div className="flex items-center gap-2 text-zinc-400">
              <Clock3 size={16} />
              Duration
            </div>

            <span className="font-semibold text-white">
              {program.duration}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
            <div className="flex items-center gap-2 text-zinc-400">
              <IndianRupee size={16} />
              Fees
            </div>

            <span className="font-semibold text-white">
              {program.fees}
            </span>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <button
            onClick={() => window.open(program.detailsUrl, "_blank")}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-yellow-500
              px-5
              py-3
              font-semibold
              text-black
              transition-all
              duration-300
              hover:bg-yellow-400
            "
          >
            View Details

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniversityProgramCard;