import type { CSSProperties } from "react";
import type { Article } from "../../../../../../domain/models/content";
import { resolveTheme } from "../theme";
import { SlideHeaderBlock } from "../components/SlideHeaderBlock";
import { ArticleContent } from "../components/ContentBlocks";
import { SlideFooter } from "../components/SlideFooter";

type Props = {
  page: Article;
};

/**
 * Layout usado sempre que `page.slideHeader` existe — é o modo que
 * reproduz a página de aula (selo de seção, título, timeline, caixa de
 * curiosidade e rodapé institucional paginado).
 */
export function SlidePage({ page }: Props) {
  const header = page.slideHeader!;
  const theme = resolveTheme(header.cores);

  return (
    <section
      style={{ ...styles.slide, backgroundColor: theme.corFundo }}
      aria-label={header.titulo}
    >
      <SlideHeaderBlock header={header} theme={theme} />

      <ArticleContent page={page} theme={theme} />

      <SlideFooter header={header} theme={theme} />
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  slide: {
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    padding: "2.5rem 3rem",
    boxSizing: "border-box",
    fontFamily:
      '"Source Sans 3", "Segoe UI", system-ui, -apple-system, sans-serif',
    display: "flex",
    flexDirection: "column",
  },
};
