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
      className="border border-slate-300 flex bg-gray-50"
    >
      <div className="w-16 flex items-center justify-center border-r border-slate-300 text-2xl text-gray-400">
        🖼️
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm mb-2">{text}</h3>

        <p className="text-xs text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec cursus
          ex, faucibus blandit tristique, magna ante dictum.
        </p>
      </div>
    </a>
  );
}
