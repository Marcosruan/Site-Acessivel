import React from "react";
import type { ReferencesSlideProps } from '../../types/SlideReferences';

const ReferencesSlide: React.FC<ReferencesSlideProps> = ({
  textos,
  cores = {},
  fontes = {},
  numeroPagina,
  mostrarRodape = true,
  proporcao = "2001 / 1125",
  className,
  style,
}) => {
  const {
    selo,
    eyebrow,
    titulo,
    itens,
    sigla,
    disciplina,
    instituicaoSigla,
    parte,
    rodapeEsquerda,
  } = textos;

  const {
    corFundo = "#F5F7FA",
    corDestaque = "#022248",
    corTextoSelo = "#FFFFFF",
    corTitulo = "#17202B",
    corItem = "#545B64",
    corDivisoria = "#DCE3ED",
    corRodape = "#717F90",
  } = cores;

  const {
    familiaTitulo = "'PT Serif', Georgia, serif",
    familiaTexto = "'Inter', 'Segoe UI', sans-serif",
    tamanhoTitulo = "2rem",
    tamanhoEyebrow = "0.85rem",
    tamanhoItem = "1.05rem",
    tamanhoRodape = "0.75rem",
    tamanhoSelo = "1.6rem",
  } = fontes;

  const rodapeTexto =
    rodapeEsquerda ??
    [
      sigla,
      [disciplina?.toUpperCase(), instituicaoSigla].filter(Boolean).join(" · "),
      parte,
    ]
      .filter(Boolean)
      .join(sigla ? " — " : " · ");

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: proporcao,
        background: corFundo,
        borderRadius: "4px",
        fontFamily: familiaTexto,
        boxSizing: "border-box",
        padding: "5.3% 7%",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "1.4rem" }}>
        <div
          style={{
            width: "68px",
            height: "68px",
            borderRadius: "12px",
            backgroundColor: corDestaque,
            color: corTextoSelo,
            fontWeight: 700,
            fontSize: tamanhoSelo,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {selo}
        </div>
        <div>
          <p
            style={{
              color: corDestaque,
              fontWeight: 700,
              fontSize: tamanhoEyebrow,
              letterSpacing: "0.06em",
              margin: "0 0 0.35rem",
            }}
          >
            {eyebrow}
          </p>
          <h1
            style={{
              fontFamily: familiaTitulo,
              fontWeight: 700,
              color: corTitulo,
              fontSize: tamanhoTitulo,
              margin: 0,
            }}
          >
            {titulo}
          </h1>
        </div>
      </div>

      <hr style={{ border: "none", borderTop: `1px solid ${corDivisoria}`, margin: "0 0 2.2rem" }} />

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "2rem" }}>
        {itens.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", color: corItem, fontSize: tamanhoItem, lineHeight: 1.5 }}>
            <span
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                backgroundColor: corDestaque,
                marginTop: "0.55em",
                flexShrink: 0,
              }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div style={{ flex: 1 }} />

      {mostrarRodape && (rodapeTexto || numeroPagina !== undefined) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${corDivisoria}`,
            paddingTop: "0.9rem",
            marginTop: "1.5rem",
          }}
        >
          <span
            style={{
              color: corRodape,
              fontSize: tamanhoRodape,
              fontWeight: 600,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            {rodapeTexto}
          </span>
          {numeroPagina !== undefined && (
            <span style={{ color: corRodape, fontSize: "0.85rem", fontWeight: 600 }}>
              {numeroPagina}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ReferencesSlide;
