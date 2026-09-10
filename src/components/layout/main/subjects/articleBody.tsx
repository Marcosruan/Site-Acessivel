import type { Content } from "../../../../App";
import SlideHeader from "./components/layout/SlideHeader";

type ArticleBodyProps = {
  content: Content;
};

export function ArticleBody({ content }: ArticleBodyProps) {
  const slideHeader = content.slideHeader ?? {
    disciplina: content.article ?? "Artigo",
    titulo: content.title ?? "",
    subtitulo: content.date ?? undefined,
    autor: content.author ?? undefined,
  };

  return (
    <>
      <SlideHeader
        textos={slideHeader}
        cores={slideHeader.cores}
        numeroPagina={slideHeader.numeroPagina}
      />

      <div className="px-7 py-8">
        {content.image && (
          <figure className="mb-8">
            <img
              src={content.image}
              alt={content.alt ?? "Imagem do artigo"}
              className="h-52 w-full object-cover"
            />
          </figure>
        )}

        <div className="space-y-4">
          {content.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="leading-7 text-[#595959]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
