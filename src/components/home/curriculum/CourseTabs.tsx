interface Props {
  courses: ("BASIC" | "ADVANCE" | "PRO")[];

  selected: "BASIC" | "ADVANCE" | "PRO";

  onSelect: (value: "BASIC" | "ADVANCE" | "PRO") => void;
}

const CourseTabs = ({
  courses,
  selected,
  onSelect,
}: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {courses.map((course) => (
        <button
          key={course}
          onClick={() => onSelect(course)}
          className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
            selected === course
              ? "bg-blue-600 text-white shadow-lg"
              : "border border-slate-200 bg-white hover:bg-slate-100"
          }`}
        >
          {course}
        </button>
      ))}
    </div>
  );
};

export default CourseTabs;