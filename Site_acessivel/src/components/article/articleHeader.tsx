import type { Conteudo } from "../../App";

type ArticleHeaderProps = {
  conteudo: Conteudo;
};

export function ArticleHeader({conteudo}: ArticleHeaderProps) {
  return (
    <article>
      <p>{conteudo.materia}</p>
      <h2>{conteudo.titulo}</h2>
      <p>{conteudo.autor}</p>
      <p>{conteudo.data}</p>
      <hr />
    </article>
  );
}
