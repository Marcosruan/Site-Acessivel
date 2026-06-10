import type { Estados } from "../../../../App";

type AExerciseProps = {
  text: string;
  setArea: (area: Estados["area"]) => void;
  getExercicio: (questao: string) => void;
};

export function ExerciseLink({ text, setArea, getExercicio }: AExerciseProps) {
  return (
    <a
      onClick={() => {
        setArea("exercícios");
        getExercicio(text);
      }}
      className="group bg-white border rounded-md border-[#ADACB1] hover:border-[#0973F0] flex"
    >
      <div className="w-16 flex items-center justify-center rounded-l-md text-2xl text-gray-400 bg-[#064EA4] group-hover:bg-[#0461CF] transition-colors duration-300">
        🖼️
      </div>

      <div className="p-4">
        <h3 className="font-bold text-sm mb-2">{text}</h3>

        <p className="text-xs text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec cursus
          ex, faucibus blandit tristique, magna ante dictum.
        </p>
      </div>
    </a>
  );
}
