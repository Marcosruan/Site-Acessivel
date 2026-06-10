import type { Exercicio } from "../../App";
import { QuestionOption } from "./questionCard/Option";

type ExerciseBodyProps = {
  questionNumber: string
  exercicio: Exercicio;
};

export function ExerciseBody({ questionNumber, exercicio }: ExerciseBodyProps) {
  return (
    <article className="border border-slate-300 bg-white">
      <header className="bg-slate-200 px-4 py-3">
        <h3 className="text-sm font-medium text-slate-700">{questionNumber}</h3>
      </header>

      <div className="p-5">
        <p className="mb-6 text-sm text-slate-700">{exercicio.pergunta}</p>
        <form>
          <fieldset>
            <legend className="sr-only">Escolha uma alternativa</legend>
            <div className="space-y-4">
              <QuestionOption option={exercicio.opcao1} />
              <QuestionOption option={exercicio.opcao2} />
              <QuestionOption option={exercicio.opcao3} />
              <QuestionOption option={exercicio.opcao4} />
              <QuestionOption option={exercicio.opcao5} />
            </div>
          </fieldset>
        </form>
      </div>
    </article>
  );
}
