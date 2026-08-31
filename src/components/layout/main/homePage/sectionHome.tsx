import type { AppState } from "../../../../App";
import { SectionLink } from "./articleLink";
import { conteudosDosArtigos } from "../../../../data/mocks/matériasMock";

type SectionHomeProps = {
  setArea: (area: AppState["area"]) => void;
  setContent: (article: string | null) => void;
};

export function SectionHome({ setArea, setContent }: SectionHomeProps) {
  const articles = conteudosDosArtigos.map((materia) => materia.article);

  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto list-none p-0">
      {articles.map((article) => (
        <li key={article}>
          <SectionLink
            area="articles"
            article={article}
            setArea={setArea}
            setContent={setContent}
          />
        </li>
      ))}
    </ul>
  );
}
