import type { CSSProperties } from "react";
import type { Article } from "../../../../../../domain/models/content";
import { resolveTheme } from "../theme";
import { ArticleContent } from "../components/ContentBlocks";

type Props = {
  page: Article;
};

/**
 * Layout usado quando `page.slideHeader` NÃO existe — conteúdo em
 * formato de artigo comum (título, autor, data, imagem, parágrafos).
 */
export function ArticlePage({ page }: Props) {
  const theme = resolveTheme();

  return (
    <article style={styles.wrapper}>
      {page.title && <h1 style={styles.titulo}>{page.title}</h1>}

      {(page.author || page.date) && (
        <p style={styles.meta}>
          {[page.author, page.date].filter(Boolean).join(" · ")}
        </p>
      )}

      <ArticleContent page={page} theme={theme} />
    </article>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    width: "100%",
    maxWidth: "720px",
    margin: "0 auto",
    padding: "2.5rem 1.5rem",
    fontFamily:
      '"Source Sans 3", "Segoe UI", system-ui, -apple-system, sans-serif',
  },
  titulo: {
    fontSize: "2rem",
    fontWeight: 700,
    margin: "0 0 0.5rem 0",
    lineHeight: 1.2,
  },
  meta: {
    fontSize: "0.85rem",
    color: "#6b6b6b",
    marginBottom: "1.5rem",
  },
};
