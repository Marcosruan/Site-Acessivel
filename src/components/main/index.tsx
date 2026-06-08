import { SectionExercicio } from "../section/sectionExercicio";
import { AExercise } from "../exerciseATag";

import { SectionHome } from "../section/sectionHome";
import { Article } from "../article";
import type { Conteudo, Estados } from "../../App";

type MainProps = {
  area: Estados["area"];
  conteudo: Conteudo;
  setArea: (area: Estados["area"]) => void;
  setConteudo: (materia: string) => void;
};

export function Main({ area, conteudo, setArea, setConteudo }: MainProps) {
  if (area === "matérias") {
    return (
      <main className="p-8">
        <Article conteudo={conteudo} />
      </main>
    );
  } else if (area == "exercícios") {
    return (
      <main className="p-8">
        <SectionExercicio />
      </main>
    );
  }
  return (
    <main className="p-8">
      <section>
        {" "}
        <h2 className="text-center text-gray-700 mb-8">Matéria</h2>
        <SectionHome setArea={setArea} setConteudo={setConteudo} />
      </section>
      <section className="mt-16">
        <h2 className="text-center text-gray-700 mb-6">Exercícios</h2>

        <article className="grid md:grid-cols-2 gap-6">

          <AExercise text="Exercício 1" setArea={setArea} />
          <AExercise text="Exercício 2" setArea={setArea} />

        </article>
      </section>
    </main>
  );
}
