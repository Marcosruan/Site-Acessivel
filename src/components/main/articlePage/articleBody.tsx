import type { Content } from "../../../App";

type ArticleBodyProps = {
  content: Content;
};

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="px-7 py-8">
      <p className="mb-8 leading-7 text-[#595959]">
        {content.paragraphs?.at(0)}
      </p>

      <figure className="mb-8" aria-labelledby="legenda-imagem">
        {content.image ? (
          <img
            src={content.image}
            alt={content.alt ?? "Imagem do artigo"}
            className="h-52 w-full object-cover"
          />
        ) : (
          <div
            className="flex h-52 items-center justify-center bg-slate-200"
            role="img"
            aria-label="Espaço demonstrativo da imagem do artigo"
          >
            <span className="text-5xl text-slate-400" aria-hidden="true">
              🖼️
            </span>
          </div>
        )}
      </figure>
      {content.paragraphs?.map((parag, index) => {
        if (index === 0) {
          return null;
        }
        return <p className="leading-7 text-[#595959]">{parag}</p>;
      })}
    </div>
  );
}
