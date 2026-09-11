import React from "react";
import type { SummarySlideProps } from '../../types/SlideSummary';

const SummarySlide: React.FC<SummarySlideProps> = ({
  textos,
  cores = {},
  fontes = {},
  numeroPagina,
  mostrarBlob = true,
  mostrarRodape = true,
  proporcao = "2001 / 1125",
  className,
  style,
}) => {
  const {
    eyebrow,
    titulo,
    itens,
    proximoConteudo,
    sigla,
    disciplina,
    instituicaoSigla,
    parte,
    rodapeEsquerda,
  } = textos;

  const {
    corFundo = "#022248",
    corDestaqueSuave = "#043773",
    corDestaque = "#2187FF",
    corTitulo = "#FFFFFF",
    corItem = "#E3ECFA",
    corMarcador = "#C7D9F2",
    corProximoConteudo = "#C7D9F2",
    corRodape = "#8FA6C8",
    corNumeroPagina = "#B9CCE8",
  } = cores;

  const {
    familiaTitulo = "'PT Serif', Georgia, serif",
    familiaTexto = "'Inter', 'Segoe UI', sans-serif",
    tamanhoTitulo = "2.6rem",
    tamanhoEyebrow = "1rem",
    tamanhoItem = "1.1rem",
    tamanhoProximoConteudo = "1.05rem",
    tamanhoRodape = "0.75rem",
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
        overflow: "hidden",
        borderRadius: "4px",
        fontFamily: familiaTexto,
        boxSizing: "border-box",
        ...style,
      }}
    >
      {mostrarBlob && (
        <div
          style={{
            position: "absolute",
            width: "46%",
            aspectRatio: 1,
            left: "-18%",
            bottom: "-22%",
            borderRadius: "50%",
            backgroundColor: corDestaqueSuave,
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "7% 7.5%",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            color: corDestaque,
            fontWeight: 700,
            fontSize: tamanhoEyebrow,
            letterSpacing: "0.06em",
            margin: "0 0 1.2rem",
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
            margin: "0 0 1.6rem",
          }}
        >
          {titulo}
        </h1>

        <ul
          style={{
            listStyle: "none",
            margin: "0 0 1.8rem",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {itens.map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                color: corItem,
                fontSize: tamanhoItem,
                lineHeight: 1.45,
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: corMarcador,
                  marginTop: "0.55em",
                  flexShrink: 0,
                }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div style={{ flex: 1 }} />

        {proximoConteudo && (
          <div
            style={{
              backgroundColor: corDestaqueSuave,
              borderRadius: "14px",
              padding: "1.15rem 1.8rem",
              color: corProximoConteudo,
              fontStyle: "italic",
              fontSize: tamanhoProximoConteudo,
              marginBottom: "1.6rem",
              maxWidth: "94%",
            }}
          >
            {proximoConteudo}
          </div>
        )}

        {mostrarRodape && (rodapeTexto || numeroPagina !== undefined) && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              paddingTop: "0.9rem",
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
              <span style={{ color: corNumeroPagina, fontSize: "0.85rem", fontWeight: 600 }}>
                {numeroPagina}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SummarySlide;
