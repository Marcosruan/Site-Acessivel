import type { CSSProperties } from "react";
import type { ResolvedTheme } from "../theme";

type Props = {
  items: string[];
  ordenada?: boolean;
  theme: ResolvedTheme;
};

/** Lista de itens (<ul> por padrão, <ol> quando `ordenada`). */
export function ArticleList({ items, ordenada = false, theme }: Props) {
  if (items.length === 0) return null;

  const content = items.map((item, i) => (
    <li key={i} style={{ ...styles.item, color: theme.corTextoSecundario }}>
      {item}
    </li>
  ));

  return ordenada ? (
    <ol style={styles.lista}>{content}</ol>
  ) : (
    <ul style={styles.lista}>{content}</ul>
  );
}

const styles: Record<string, CSSProperties> = {
  lista: {
    maxWidth: "68ch",
    margin: "0 0 1.25rem 0",
    paddingLeft: "1.4rem",
  },
  item: {
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: "0.4rem",
  },
};
