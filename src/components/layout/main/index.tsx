import { ExerciseLink } from "./home/exerciseLink";
import { SectionHome } from "./home/sectionHome";
import type {
  AppArea,
  Article,
  ExerciseCollection,
} from "../../../domain/models/content";
import { PageRenderer } from "./subjects/dinamic";
import { ExercisePage } from "./exercises/ExercisePage";

type MainProps = {
  area: AppArea;
  articles: Article[];
  content: Article | null;
  setArea: (area: AppArea) => void;
  setContent: (materia: string | null) => void;
  exercises: ExerciseCollection[];
  exercise: ExerciseCollection | null;
  getExercise: (questao: string) => void;
};

export function Main({
  area,
  articles,
  content,
  setArea,
  setContent,
  exercises,
  exercise,
  getExercise,
}: MainProps) {
  if (area === "articles" && content) {
    return (
      <main className="p-8">
        <PageRenderer page={content} />
      </main>
    );
  }

  if (area === "exercises" && exercise) {
    return (
      <ExercisePage
        key={exercise.exercise}
        title={exercise.exercise ?? "Exercício"}
        description="Responda às questões para concluir este exercício."
        exercises={exercise.questions}
      />
    );
  }

  const exerciseDetails: Record<string, { title: string; description: string }> = {
    "Exercício 1": {
      title: "Acessibilidade",
      description: "Exercícios relativos à matéria sobre acessibilidade.",
    },
    "Exercício 2": {
      title: "Rede de Computadores",
      description: "Exercícios sobre redes de computadores.",
    },
  };

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
        <SectionHome
          articles={articles}
          setArea={setArea}
          setContent={setContent}
        />
      </section>

      <section className="mt-16" aria-labelledby="titulo-exercicios">
        <h2
          id="titulo-exercicios"
          className="text-center font-inter font-bold text-black text-2xl mb-6"
        >
          Exercícios
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 list-none p-0">
          {exercises.map(({ exercise: exerciseName }) => {
            if (!exerciseName) return null;
            const details = exerciseDetails[exerciseName] ?? {
              title: exerciseName,
              description: "Responda às questões deste exercício.",
            };

            return (
              <li key={exerciseName}>
                <ExerciseLink
                  exerciseNumber={exerciseName}
                  title={details.title}
                  description={details.description}
                  setArea={setArea}
                  getExercise={getExercise}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
