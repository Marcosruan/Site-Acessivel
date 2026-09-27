import type { CSSProperties } from "react";
import type { ResolvedTheme } from "../theme";

type Props = {
  texto: string;
  nivel?: 2 | 3;
  theme: ResolvedTheme;
};

/** Título de seção dentro do corpo do artigo. `nivel` 3 fica menor e mais discreto. */
export function Subtitle({ texto, nivel = 2, theme }: Props) {
  const style = {
    ...styles.texto,
    ...(nivel === 3 ? styles.nivel3 : styles.nivel2),
    color: theme.corTitulo,
  };

  return nivel === 3 ? <h3 style={style}>{texto}</h3> : <h2 style={style}>{texto}</h2>;
}

const styles: Record<string, CSSProperties> = {
  texto: {
    fontWeight: 700,
    lineHeight: 1.3,
    maxWidth: "68ch",
  },
  nivel2: {
    fontSize: "1.35rem",
    margin: "2rem 0 0.75rem 0",
  },
  nivel3: {
    fontSize: "1.1rem",
    margin: "1.5rem 0 0.5rem 0",
  },
};
