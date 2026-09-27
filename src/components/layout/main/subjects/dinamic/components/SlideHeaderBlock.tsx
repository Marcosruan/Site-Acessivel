import type { CSSProperties } from "react";
import type { SlideHeader } from "../../../../../../domain/models/content";
import type { ResolvedTheme } from "../theme";

type Props = {
  header: SlideHeader;
  theme: ResolvedTheme;
};

export function SlideHeaderBlock({ header, theme }: Props) {
  return (
    <header style={styles.wrapper}>
      {header.numeroSecao && (
        <span style={{ ...styles.badge, color: theme.corTextoSecundario }}>
          {header.numeroSecao}
        </span>
      )}

      <div style={styles.eyebrowRow}>
        {header.disciplina && (
          <span style={{ ...styles.eyebrow, color: theme.corAutor }}>
            {header.disciplina}
          </span>
        )}
      </div>

      <h1 style={{ ...styles.titulo, color: theme.corTitulo }}>{header.titulo}</h1>

      {header.subtitulo && (
        <p style={{ ...styles.subtitulo, color: theme.corSubtitulo }}>
          {header.subtitulo}
        </p>
      )}
    </header>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    position: "relative",
    marginBottom: "2rem",
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: "0.95rem",
    fontWeight: 600,
    letterSpacing: "0.02em",
  },
  eyebrowRow: {
    marginBottom: "0.5rem",
  },
  eyebrow: {
    fontSize: "0.8rem",
    fontWeight: 600,
  },
  titulo: {
    fontSize: "1.75rem",
    lineHeight: 1.25,
    fontWeight: 700,
    margin: 0,
    maxWidth: "34ch",
  },
  subtitulo: {
    fontSize: "1.05rem",
    fontWeight: 500,
    marginTop: "0.5rem",
  },
};
