import type { Conteudo } from "../../../App";

type ArticleHeaderProps = {
  conteudo: Conteudo;
};

export function ArticleHeader({ conteudo }: ArticleHeaderProps) {
  return (
    <article className="border-b border-slate-300 px-7 py-8">
      <p className="mb-2 text-sm text-slate-500">{conteudo.materia}</p>

      <h2 className="mb-4 text-5xl font-bold text-slate-700">
        {conteudo.titulo}
      </h2>
      <div className="space-y-1 text-sm text-slate-600">
        <p>{conteudo.autor}</p>
        <p>{conteudo.data}</p>
      </div>
    </article>
  );
}
