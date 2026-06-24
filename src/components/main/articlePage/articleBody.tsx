import type { Content } from "../../../App";

type ArticleBodyProps = {
  content: Content;
};

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="px-7 py-8">
      <p className="mb-8 leading-7 text-[#595959]">{content.paragraphs?.at(0)}</p>

      <figure className="mb-8" aria-labelledby="legenda-imagem">
        <div className="flex h-52 items-center justify-center bg-slate-200" role="img" aria-label="Espaço demonstrativo da imagem do artigo">
          <span className="text-5xl text-slate-400" aria-hidden="true">🖼️</span>
        </div>

        <figcaption id="legenda-imagem" className="text-sm text-slate-500 mt-2 italic text-center">
          {"Legenda explicativa da imagem acima."}
        </figcaption>
      </figure>

      <p className="leading-7 text-[#595959]">{content.paragraphs?.at(1)}</p>
    </div>
  );
}