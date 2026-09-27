import type { CSSProperties } from "react";
import type { TimelineItem } from "../../../../../../domain/models/content";
import type { ResolvedTheme } from "../theme";

type Props = {
  items: TimelineItem[];
  theme: ResolvedTheme;
};

export function Timeline({ items, theme }: Props) {
  return (
    <div style={styles.wrapper} role="list" aria-label="Linha do tempo">
      <div style={{ ...styles.linha, backgroundColor: theme.corCirculoClaro }} />
      {items.map((item, i) => (
        <div key={i} style={styles.item} role="listitem">
          <div
            style={{
              ...styles.circulo,
              backgroundColor: item.destaque ? theme.corDestaque : theme.corCirculoMedio,
            }}
          />
          <span style={{ ...styles.ano, color: theme.corTitulo }}>{item.ano}</span>
          <span style={{ ...styles.tituloItem, color: theme.corTextoDestaque }}>
            {item.titulo}
          </span>
          {item.descricao && (
            <span style={{ ...styles.descricao, color: theme.corTextoSecundario }}>
              {item.descricao}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    margin: "2rem 0",
  },
  linha: {
    position: "absolute",
    top: "0.4rem",
    left: 0,
    right: 0,
    height: "2px",
    zIndex: 0,
  },
  item: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
    minWidth: 0,
  },
  circulo: {
    width: "0.85rem",
    height: "0.85rem",
    borderRadius: "50%",
    marginBottom: "0.6rem",
  },
  ano: {
    fontSize: "0.95rem",
    fontWeight: 700,
  },
  tituloItem: {
    fontSize: "0.85rem",
    fontWeight: 600,
    marginTop: "0.15rem",
  },
  descricao: {
    fontSize: "0.8rem",
    marginTop: "0.15rem",
    lineHeight: 1.4,
  },
};
