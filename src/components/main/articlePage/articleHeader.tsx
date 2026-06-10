import type { Conteudo } from "../../../App";

type ArticleHeaderProps = {
  conteudo: Conteudo;
};

export function ArticleHeader({ conteudo }: ArticleHeaderProps) {
  return (
    <article className="border-b border-slate-300 px-7 py-8">
      <p className="mb-1 text-sm text-[#595959]">{conteudo.materia}</p>

      <h2 className="mb-2 text-2xl font-bold text-[#1F1F26]">
        {conteudo.titulo}
      </h2>
      <div className="space-y-1 text-xs text-slate-600">
        <p className="text-[#595959]">Autor: {conteudo.autor}</p>
        <p className="text-[#595959]">Data: {conteudo.data}</p>
      </div>
    </article>
  );
}
