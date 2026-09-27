import type { CSSProperties } from "react";
import type { ResolvedTheme } from "../theme";

type Props = {
  texto: string;
  autor?: string;
  theme: ResolvedTheme;
};

/** Citação em destaque, com autoria opcional. */
export function BlockQuote({ texto, autor, theme }: Props) {
  return (
    <blockquote
      style={{
        ...styles.wrapper,
        borderLeft: `3px solid ${theme.corCirculoMedio}`,
        color: theme.corTextoSecundario,
      }}
    >
      <p style={styles.texto}>{texto}</p>
      {autor && (
        <cite style={{ ...styles.autor, color: theme.corTextoDestaque }}>— {autor}</cite>
      )}
    </blockquote>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    margin: "1.5rem 0",
    padding: "0.25rem 0 0.25rem 1.1rem",
  },
  texto: {
    fontSize: "1.05rem",
    fontStyle: "italic",
    lineHeight: 1.55,
    margin: 0,
  },
  autor: {
    display: "block",
    fontSize: "0.85rem",
    fontStyle: "normal",
    marginTop: "0.5rem",
  },
};
