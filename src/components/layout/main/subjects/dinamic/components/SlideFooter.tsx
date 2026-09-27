import type { CSSProperties } from "react";
import type { SlideHeader } from "../../../../../../domain/models/content";
import type { ResolvedTheme } from "../theme";

type Props = {
  header: SlideHeader;
  theme: ResolvedTheme;
};

export function SlideFooter({ header, theme }: Props) {
  const partes = [
    header.rodapeEsquerda ?? header.disciplina,
    header.instituicaoSigla ?? header.sigla ?? header.instituicao,
    header.parte,
  ].filter(Boolean);

  if (partes.length === 0 && header.numeroPagina === undefined) return null;

  return (
    <footer style={{ ...styles.wrapper, borderTop: `1px solid ${theme.corCirculoClaro}` }}>
      <span style={{ ...styles.texto, color: theme.corTextoSecundario }}>
        {partes.join(" · ")}
      </span>
      {header.numeroPagina !== undefined && (
        <span style={{ ...styles.pagina, color: theme.corTextoSecundario }}>
          {header.numeroPagina}
        </span>
      )}
    </footer>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    marginTop: "2rem",
    paddingTop: "0.75rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  texto: {
    fontSize: "0.75rem",
  },
  pagina: {
    fontSize: "0.75rem",
    fontWeight: 600,
  },
};
