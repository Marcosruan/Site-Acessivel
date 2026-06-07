import { SectionExercicio } from "../section/sectionExercicio";
import { SectionLink } from "../section/sectionLink";
import { ArticleHeader } from "../article/articleHeader";
import { ArticleBody } from "../article/articleBody";
import type { Conteudo, Estados } from "../../App";

type MainProps = {
  area: Estados["area"];
  conteudo: Conteudo;
};

export function Main({ area , conteudo}: MainProps) {
  if (area === "matérias") {
    return (
      <main>
        <ArticleHeader conteudo={conteudo} />
        <ArticleBody />
      </main>
    );
  } else if (area == "home") {
    return (
      <main>
        <SectionExercicio />
      </main>
    );
  }
  return (
    <main>
      <SectionLink />
    </main>
  );
}
