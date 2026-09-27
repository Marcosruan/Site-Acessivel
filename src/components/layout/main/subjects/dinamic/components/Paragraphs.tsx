import type { CSSProperties } from "react";
import type { ResolvedTheme } from "../theme";

type ParagraphProps = {
  texto: string;
  theme: ResolvedTheme;
};

export function Paragraph({ texto, theme }: ParagraphProps) {
  return <p style={{ ...styles.paragrafo, color: theme.corTextoSecundario }}>{texto}</p>;
}

type ParagraphsProps = {
  paragraphs: string[];
  theme: ResolvedTheme;
};

export function Paragraphs({ paragraphs, theme }: ParagraphsProps) {
  return (
    <div style={styles.wrapper}>
      {paragraphs.map((texto, i) => (
        <Paragraph key={i} texto={texto} theme={theme} />
      ))}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    maxWidth: "68ch",
  },
  paragrafo: {
    fontSize: "1rem",
    lineHeight: 1.6,
    margin: "0 0 1rem 0",
  },
};
