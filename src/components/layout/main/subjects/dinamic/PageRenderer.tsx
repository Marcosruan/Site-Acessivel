import type { Article } from "../../../../../domain/models/content";
import { SlidePage } from "./layouts/SlidePage";
import { ArticlePage } from "./layouts/ArticlePage";

export type PageData = Article;

type PageRendererProps = {
  page: PageData;
};

/**
 * Motor de renderização de páginas.
 *
 * Recebe um único objeto `Article` (uma "página") e decide sozinho
 * qual layout e quais componentes usar:
 *
 * - Se `page.slideHeader` estiver presente  -> layout de slide didático
 *   (SlidePage: selo de seção, título, timeline, callout, rodapé paginado).
 * - Caso contrário                          -> layout de artigo comum
 *   (ArticlePage: título, autor, data, imagem, parágrafos).
 *
 * Isso é o que permite passar um deck inteiro (array de páginas com
 * formatos diferentes) e cada uma "saber" como se desenhar.
 */
export function PageRenderer({ page }: PageRendererProps) {
  if (page.slideHeader) {
    return <SlidePage page={page} />;
  }
  return <ArticlePage page={page} />;
}

type DeckRendererProps = {
  pages: PageData[];
  separatePages?: boolean;
};

/**
 * Renderiza uma coleção de páginas (ex.: um deck de aula inteiro) na ordem
 * em que aparecem no array. Cada página é roteada individualmente pelo
 * PageRenderer, então um deck pode misturar slides e artigos livremente.
 */
export function DeckRenderer({ pages, separatePages = true }: DeckRendererProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: separatePages ? "2rem" : 0 }}>
      {pages.map((page, i) => (
        <PageRenderer key={i} page={page} />
      ))}
    </div>
  );
}
