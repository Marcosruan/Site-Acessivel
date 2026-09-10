import React from "react";
import type { SlideHeaderProps } from '../../types/SlideHeader';

const SlideHeader: React.FC<SlideHeaderProps> = ({
  textos,
  cores = {},
  fontes = {},
  numeroPagina,
  mostrarBadge = true,
  mostrarCirculos = true,
  mostrarRodape = true,
  proporcao = "2001 / 1125",
  className,
  style,
}) => {
  const {
    disciplina,
    parte,
    titulo,
    subtitulo,
    autor,
    instituicao,
    sigla,
    instituicaoSigla,
    rodapeEsquerda,
  } = textos;

  const {
    corFundo = "#022248",
    corCirculoMedio = "#043773",
    corCirculoClaro = "#064EA4",
    corDestaque = "#2187FF",
    corTextoDestaque = "#FFFFFF",
    corTitulo = "#FFFFFF",
    corSubtitulo = "#B9CCE8",
    corAutor = "#FFFFFF",
    corTextoSecundario = "#8FA6C8",
  } = cores;

  const {
    familiaTitulo = "'PT Serif', Georgia, serif",
    familiaTexto = "'Inter', 'Segoe UI', sans-serif",
    tamanhoTitulo = "2.9rem",
    tamanhoSubtitulo = "1.15rem",
    tamanhoEyebrow = "1rem",
    tamanhoAutor = "1.05rem",
    tamanhoInstituicao = "0.95rem",
    tamanhoRodape = "0.75rem",
    tamanhoBadge = "1.9rem",
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
        zIndex: 0,
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
      {mostrarCirculos && (
        <>
          <div
            style={{
              position: "absolute",
              width: "42%",
              aspectRatio: 1,
              top: "-18%",
              right: "-8%",
              borderRadius: "50%",
              backgroundColor: corCirculoMedio,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "30%",
              aspectRatio: 1,
              top: "-12%",
              right: "-6%",
              borderRadius: "50%",
              backgroundColor: corCirculoClaro,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "22%",
              aspectRatio: 1,
              bottom: "-14%",
              right: "-3%",
              borderRadius: "50%",
              backgroundColor: corCirculoClaro,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "13%",
              aspectRatio: 1,
              bottom: "-9%",
              right: "1%",
              borderRadius: "50%",
              backgroundColor: corCirculoMedio,
            }}
          />
        </>
      )}

      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "6.5% 7%",
          boxSizing: "border-box",
        }}
      >
        {mostrarBadge && numeroPagina !== undefined && (
          <div
            style={{
              width: "6.3%",
              aspectRatio: 1,
              minWidth: "40px",
              minHeight: "40px",
              borderRadius: "50%",
              backgroundColor: corDestaque,
              color: corTextoDestaque,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: tamanhoBadge,
              marginBottom: "6%",
            }}
          >
            {numeroPagina}
          </div>
        )}

        <p
          style={{
            color: corDestaque,
            fontWeight: 700,
            fontSize: tamanhoEyebrow,
            letterSpacing: "0.04em",
            margin: "0 0 1.1rem",
          }}
        >
          {disciplina}
          {parte ? ` · ${parte}` : ""}
        </p>

        <h1
          style={{
            fontFamily: familiaTitulo,
            fontWeight: 700,
            color: corTitulo,
            fontSize: tamanhoTitulo,
            lineHeight: 1.2,
            maxWidth: "80%",
            margin: "0 0 1rem",
          }}
        >
          {titulo}
        </h1>

        {subtitulo && (
          <p
            style={{
              color: corSubtitulo,
              fontSize: tamanhoSubtitulo,
              fontWeight: 400,
              maxWidth: "65%",
              margin: 0,
            }}
          >
            {subtitulo}
          </p>
        )}

        <div style={{ flex: 1 }} />

        {(autor || instituicao) && (
          <>
            <div
              style={{
                width: "90px",
                height: "2.5px",
                backgroundColor: corDestaque,
                marginBottom: "1.1rem",
              }}
            />
            {autor && (
              <p
                style={{
                  color: corAutor,
                  fontWeight: 700,
                  fontSize: tamanhoAutor,
                  margin: "0 0 0.3rem",
                }}
              >
                {autor}
              </p>
            )}
            {instituicao && (
              <p
                style={{
                  color: corTextoSecundario,
                  fontSize: tamanhoInstituicao,
                  margin: "0 0 1.4rem",
                }}
              >
                {instituicao}
              </p>
            )}
          </>
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
                color: corTextoSecundario,
                fontSize: tamanhoRodape,
                fontWeight: 600,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              {rodapeTexto}
            </span>
            {numeroPagina !== undefined && (
              <span
                style={{
                  color: corSubtitulo,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {numeroPagina}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideHeader;
