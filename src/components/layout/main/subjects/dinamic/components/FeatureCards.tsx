import type { CSSProperties } from "react";
import type { FeatureCard } from "../../../../../../domain/models/content";
import type { ResolvedTheme } from "../theme";

type Props = {
  cards: FeatureCard[];
  theme: ResolvedTheme;
};

export function FeatureCards({ cards, theme }: Props) {
  return (
    <ul style={styles.grid} aria-label="Características">
      {cards.map((card) => (
        <li
          key={card.titulo}
          style={{
            ...styles.card,
            borderTop: `3px solid ${theme.corCirculoMedio}`,
          }}
        >
          <h2 style={{ ...styles.tituloCard, color: theme.corTextoDestaque }}>
            {card.titulo}
          </h2>
          <p style={{ ...styles.textoCard, color: theme.corTextoSecundario }}>
            {card.texto}
          </p>
        </li>
      ))}
    </ul>
  );
}

const styles: Record<string, CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.25rem",
    margin: "1.5rem 0",
    listStyle: "none",
    padding: 0,
  },
  card: {
    paddingTop: "0.75rem",
  },
  tituloCard: {
    fontSize: "1rem",
    fontWeight: 700,
    margin: "0 0 0.5rem 0",
  },
  textoCard: {
    fontSize: "0.88rem",
    lineHeight: 1.55,
    margin: 0,
  },
};
