import { useState, useEffect, useRef } from "react";
import type { Exercise } from "../../../App";
import { QuestionOption } from "../exercisePage/questionCard/Option";

type ExerciseBodyProps = {
  questionNumber: string;
  exercise: Exercise;
  questionIndex: number;
  isLastQuestion: boolean;
  onNext: () => void;
  onFinish: () => void;
};

const OPTIONS = ["option1", "option2", "option3", "option4", "option5"] as const;

export function ExerciseBody({
  questionNumber,
  exercise,
  questionIndex,
  isLastQuestion,
  onNext,
  onFinish,
}: ExerciseBodyProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasShownKeyboardHint, setHasShownKeyboardHint] = useState(false);
  const actionButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isCorrect !== null) {
      actionButtonRef.current?.focus();
    }
  }, [isCorrect]);

  const revealed = isCorrect !== null;

  const handleCheck = () => {
    if (!selected) return;
    setIsCorrect(selected === exercise.answer);
  };

  return (
    <section className="border rounded-md border-slate-300 bg-white">
      <header className="bg-[#043773] rounded-t-md px-4 py-3">
        <h3 className="text-sm font-medium text-white">{questionNumber}</h3>
      </header>

      <div className="p-5">
        <p className="mb-6 text-sm text-slate-700">{exercise.question}</p>

        {hasShownKeyboardHint && !revealed && (
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="mb-4 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900"
          >
            <span className="mt-0.5 text-blue-600" aria-hidden="true">
              i
            </span>
            <p>
              Use as setas do teclado para navegar entre as opções.
            </p>
          </div>
        )}

        <fieldset>
          <legend className="sr-only">Escolha uma alternativa</legend>
          <div className="space-y-3">
            {OPTIONS.map((key) => {
              const value = exercise[key];
              if (!value) return null;
              return (
                <QuestionOption
                  key={key}
                  value={key}
                  questionName={`questao-${questionIndex}`}
                  option={value}
                  isSelected={selected === key}
                  isCorrect={isCorrect}
                  isRightAnswer={revealed && exercise.answer === key}
                  onChange={setSelected}
                  onFocus={() => {
                    if (!hasShownKeyboardHint) {
                      setHasShownKeyboardHint(true);
                    }
                  }}
                />
              );
            })}
          </div>
        </fieldset>

        {revealed && (
          <div
            role="status"
            aria-live="polite"
            className={`mt-5 flex items-start gap-3 rounded-lg px-4 py-3 text-sm ${
              isCorrect
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            <span className="text-lg leading-none" aria-hidden="true">
              {isCorrect ? "✅" : "❌"}
            </span>
            <div>
              <p className="font-semibold">
                {isCorrect ? "Resposta correta!" : "Resposta incorreta."}
              </p>
              {!isCorrect && exercise.explanation && (
                <p className="mt-1 text-slate-600">{exercise.explanation}</p>
              )}
            </div>
          </div>
        )}

        <div className="mt-5 flex gap-3">
          {!revealed ? (
            <button
              ref={actionButtonRef}
              onClick={handleCheck}
              disabled={!selected}
              className="px-5 py-2 rounded-md bg-[#043773] text-white text-sm font-medium
                disabled:opacity-40 disabled:cursor-not-allowed
                hover:bg-[#032d5e] focus:outline-none focus:ring-2 focus:ring-[#043773] focus:ring-offset-2
                transition-colors"
            >
              Verificar resposta
            </button>
          ) : (
            <>
              {isLastQuestion ? (
                <button
                  ref={actionButtonRef}
                  onClick={onFinish}
                  className="px-5 py-2 rounded-md bg-[#043773] text-white text-sm font-medium
                    hover:bg-[#032d5e] focus:outline-none focus:ring-2 focus:ring-[#043773] focus:ring-offset-2
                    transition-colors"
                >
                  Finalizar exercício
                </button>
              ) : (
                <button
                  ref={actionButtonRef}
                  onClick={onNext}
                  className="px-5 py-2 rounded-md bg-[#043773] text-white text-sm font-medium
                    hover:bg-[#032d5e] focus:outline-none focus:ring-2 focus:ring-[#043773] focus:ring-offset-2
                    transition-colors"
                >
                  Próxima questão →
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
