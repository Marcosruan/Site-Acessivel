import type { CSSProperties } from "react";

export interface SlideHeaderTextos {
  disciplina: string;
  parte?: string;
  titulo: string;
  subtitulo?: string;
  autor?: string;
  instituicao?: string;
  sigla?: string;
  instituicaoSigla?: string;
  rodapeEsquerda?: string;
}

export interface SlideHeaderFontes {
  familiaTitulo?: string;
  familiaTexto?: string;
  tamanhoTitulo?: string;
  tamanhoSubtitulo?: string;
  tamanhoEyebrow?: string;
  tamanhoAutor?: string;
  tamanhoInstituicao?: string;
  tamanhoRodape?: string;
  tamanhoBadge?: string;
}

export interface SlideHeaderCores {
  corFundo?: string;
  corCirculoMedio?: string;
  corCirculoClaro?: string;
  corDestaque?: string;
  corTextoDestaque?: string;
  corTitulo?: string;
  corSubtitulo?: string;
  corAutor?: string;
  corTextoSecundario?: string;
}

export interface SlideHeaderProps {
  textos: SlideHeaderTextos;
  cores?: SlideHeaderCores;
  fontes?: SlideHeaderFontes;
  numeroPagina?: number;
  mostrarBadge?: boolean;
  mostrarCirculos?: boolean;
  mostrarRodape?: boolean;
  proporcao?: string;
  className?: string;
  style?: CSSProperties;
}
