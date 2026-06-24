import { ExerciseLink } from "./homePage/exerciseLink";
import { SectionHome } from "./homePage/sectionHome";
import { ArticleHeader } from "./articlePage/articleHeader";
import type { AppState, Content, ExerciseList } from "../../App";
import { ArticleBody } from "./articlePage/articleBody";
import { ExercisePage } from "./exercisePage/ExercisePage";

type MainProps = {
  area: AppState["area"];
  content: Content;
  setArea: (area: AppState["area"]) => void;
  setContent: (materia: string) => void;
  exercise: ExerciseList;
  getExercise: (questao: string) => void;
};

export function Main({
  area,
  content,
  setArea,
  setContent,
  exercise,
  getExercise,
}: MainProps) {
  if (area === "articles") {
    return (
      <main className="p-8">
        <article className="bg-white rounded-lg shadow-sm">
          <ArticleHeader content={content} />
          <ArticleBody content={content} />
        </article>
      </main>
    );
  }

  if (area === "exercises") {
    return (
      <ExercisePage title="" description="" exercises={exercise.questions} />
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
        <SectionHome setArea={setArea} setContent={setContent} />
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
              getExercise={getExercise}
            />
          </li>
          <li>
            <ExerciseLink
              text="Exercício 2"
              setArea={setArea}
              getExercise={getExercise}
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
