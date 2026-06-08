import { SectionExercicio } from "../section/sectionExercicio";

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

          <a onClick={() => setArea("exercícios")} className="border border-slate-300 flex bg-gray-50">
            <div
              className="w-16 flex items-center justify-center border-r border-slate-300 text-2xl text-gray-400">
              🖼️
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-sm mb-2">
                Exercício 1
              </h3>

              <p className="text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Donec cursus ex, faucibus blandit tristique, magna ante dictum.
              </p>
            </div>
          </a>

          <a onClick={() => setArea("exercícios")} className="border border-slate-300 flex bg-gray-50">
            <div
              className="w-16 flex items-center justify-center border-r border-slate-300 text-2xl text-gray-400">
              🖼️
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-sm mb-2">
                Exercício 2
              </h3>

              <p className="text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Donec cursus ex, faucibus blandit tristique, magna ante dictum.
              </p>
            </div>
          </a>

        </article>
      </section>
    </main>
  );
}
