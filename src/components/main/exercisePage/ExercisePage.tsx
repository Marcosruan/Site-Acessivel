import { useState } from "react";
import type { Exercise } from "../../../App";
import { ExerciseHeader } from "./exerciseHeader";
import { ExerciseBody } from "./exerciseBody";

type ExercisePageProps = {
  title: string;
  description: string;
  exercises: Exercise[];
};

export function ExercisePage({ title, description, exercises }: ExercisePageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleFinish = () => {
    setFinished(true);
  };

  if (finished) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-10 text-center">
        <span className="text-5xl" aria-hidden="true">
          🏁
        </span>
        <h2 className="mt-4 text-2xl font-bold text-slate-800">Exercício concluído!</h2>
        <p className="mt-2 text-slate-600">Você respondeu todas as {exercises.length} questões.</p>
        <button
          onClick={() => {
            setCurrentIndex(0);
            setFinished(false);
          }}
          className="mt-6 px-6 py-2 rounded-md bg-[#043773] text-white text-sm font-medium
            hover:bg-[#032d5e] focus:outline-none focus:ring-2 focus:ring-[#043773] focus:ring-offset-2
            transition-colors"
        >
          Recomeçar
        </button>
      </main>
    );
  }

  const exercise = exercises[currentIndex];

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <ExerciseHeader title={title} description={description} />

      <div className="mb-6" aria-label={`Questão ${currentIndex + 1} de ${exercises.length}`}>
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>
            Questão {currentIndex + 1} de {exercises.length}
          </span>
          <span>{Math.round((currentIndex / exercises.length) * 100)}% concluído</span>
        </div>
        <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#043773] rounded-full transition-all duration-500"
            style={{ width: `${(currentIndex / exercises.length) * 100}%` }}
          />
        </div>
      </div>

      <ExerciseBody
        key={currentIndex}
        questionNumber={`Questão ${currentIndex + 1}`}
        exercise={exercise}
        questionIndex={currentIndex}
        isLastQuestion={currentIndex === exercises.length - 1}
        onNext={handleNext}
        onFinish={handleFinish}
      />
    </main>
  );
}
