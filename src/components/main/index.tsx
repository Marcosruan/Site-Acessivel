import { ExerciseLink } from "./homePage/exerciseLink";
import { SectionHome } from "./homePage/sectionHome";
import { ArticleHeader } from "./articlePage/articleHeader";
import type { Conteudo, Estados, Exercicio } from "../../App";
import { ExerciseHeader } from "./exercisePage/exerciseHeader";
import { ExerciseBody } from "../main/exercisePage/exerciseBody";
import { ArticleBody } from "./articlePage/articleBody";

type MainProps = {
  area: Estados["area"];
  conteudo: Conteudo;
  setArea: (area: Estados["area"]) => void;
  setConteudo: (materia: string) => void;
  exercicio: Exercicio;
  getExercicio: (questao: string) => void;
};

export function Main({
  area,
  conteudo,
  setArea,
  setConteudo,
  exercicio,
  getExercicio,
}: MainProps) {
  if (area === "matérias") {
    return (
      <main className="p-8">
        <article className="bg-white rounded-lg shadow-sm">
          <ArticleHeader conteudo={conteudo} />
          <ArticleBody conteudo={conteudo} />
        </article>
      </main>
    );
  } else if (area === "exercícios") {
    return (
      <main className="px-6 py-8">
        <ExerciseHeader />
        <ExerciseBody questionNumber="Questão 1" exercicio={exercicio} />
      </main>
    );
  }

  return (
    <main className="p-8">
      <section aria-labelledby="titulo-materias">
        <h2
          id="titulo-materias"
          className="text-center font-inter font-bold text-black text-2xl mb-4"
        >
          Matérias
        </h2>
        <p className="text-center text-[#595959] mb-8">
          A seguir veja as matérias disponíveis. <strong>Clique</strong> em uma
          delas para saber mais sobre.
        </p>
        <SectionHome setArea={setArea} setConteudo={setConteudo} />
      </section>

      <section className="mt-16" aria-labelledby="titulo-exercicios">
        <h2
          id="titulo-exercicios"
          className="text-center font-inter font-bold text-black text-2xl mb-6"
        >
          Exercícios
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 list-none p-0">
          <li>
            <ExerciseLink
              text="Exercício 1"
              setArea={setArea}
              getExercicio={getExercicio}
            />
          </li>
          <li>
            <ExerciseLink
              text="Exercício 2"
              setArea={setArea}
              getExercicio={getExercicio}
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
