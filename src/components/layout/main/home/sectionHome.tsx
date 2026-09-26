import type { AppArea, Article } from "../../../../domain/models/content";
import { SectionLink } from "./articleLink";

type SectionHomeProps = {
  articles: Article[];
  setArea: (area: AppArea) => void;
  setContent: (article: string | null) => void;
};

export function SectionHome({ articles, setArea, setContent }: SectionHomeProps) {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto list-none p-0">
      {articles.map((article, index) => (
        <li key={article.article ?? article.title ?? index}>
          <SectionLink
            area="articles"
            article={article.article}
            setArea={setArea}
            setContent={setContent}
          />
        </li>
      ))}
    </ul>
  );
}
