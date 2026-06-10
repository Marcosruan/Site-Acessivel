import type { Conteudo } from "../../../App";

type ArticleBodyProps = {
  conteudo: Conteudo;
};

export function ArticleBody({ conteudo }: ArticleBodyProps) {
  return (
    <section className="px-7 py-8">
      <p className="mb-8 leading-7 text-[#595959]">{conteudo.textos?.at(0)}</p>

      <figure className="mb-8">
        <div className="flex h-52 items-center justify-center bg-slate-200">
          <span className="text-5xl text-slate-400">🖼️</span>
        </div>

        <figcaption className="sr-only">
          Imagem ilustrativa do artigo
        </figcaption>
      </figure>

      <p className="leading-7 text-[#595959]">{conteudo.textos?.at(1)}</p>
    </section>
  );
}
