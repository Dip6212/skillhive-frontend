import { CheckCircle2 } from "lucide-react";

interface Props {
    modules: string[];
}

const CurriculumList = ({ modules }: Props) => {
    return (
        <div className="grid gap-5 md:grid-cols-2">

            {modules.map((module) => (

                <div
                    key={module}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                    <CheckCircle2
                        className="text-green-500"
                    />

                    {module}

                </div>

            ))}

        </div>
    );
};

export default CurriculumList;