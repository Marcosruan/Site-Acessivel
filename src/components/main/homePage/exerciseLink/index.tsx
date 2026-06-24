import type { AppState } from "../../../../App";

type ExerciseProps = {
  exerciseNumber: string;
  title: string;
  description: string;
  setArea: (area: AppState["area"]) => void;
  getExercise: (questao: string) => void;
};

export function ExerciseLink({
  exerciseNumber,
  title,
  description,
  setArea,
  getExercise,
}: ExerciseProps) {
  return (
    <button
      type="button"
      onClick={() => {
        setArea("exercises");
        getExercise(exerciseNumber);
      }}
      className="group bg-white border rounded-md border-[#ADACB1] hover:border-[#0973F0] flex w-full text-left"
    >
      <div className="w-16 flex items-center justify-center rounded-l-md text-2xl text-gray-400 bg-[#064EA4] group-hover:bg-[#0461CF] transition-colors duration-300 self-stretch">
        🖼️
      </div>

      <div className="p-4 flex-1">
        <p className="font-bold text-sm mb-2 text-[#595959]">
          <strong>{title}</strong>
        </p>

        <p className="text-xs text-[#595959]">{description}</p>
      </div>
    </button>
  );
}
