import type { CSSProperties } from "react";
import type { Callout } from "../../../../../../domain/models/content";
import type { ResolvedTheme } from "../theme";

type Props = {
  callout: Callout;
  theme: ResolvedTheme;
};

export function CalloutBox({ callout, theme }: Props) {
  return (
    <aside
      style={{
        ...styles.wrapper,
        borderLeft: `3px solid ${theme.corDestaque}`,
        backgroundColor: theme.corCirculoClaro + "40",
      }}
      aria-label={callout.rotulo}
    >
      <span style={{ ...styles.rotulo, color: theme.corDestaque }}>{callout.rotulo}</span>
      <p style={{ ...styles.texto, color: theme.corTextoSecundario }}>{callout.texto}</p>
    </aside>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    padding: "0.9rem 1.1rem",
    borderRadius: "0.25rem",
    margin: "1.5rem 0",
  },
  rotulo: {
    display: "block",
    fontSize: "0.85rem",
    fontWeight: 700,
    marginBottom: "0.35rem",
  },
  texto: {
    fontSize: "0.9rem",
    lineHeight: 1.55,
    margin: 0,
  },
};
