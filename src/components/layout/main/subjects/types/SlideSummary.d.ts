import type { CSSProperties } from "react";

export interface SummarySlideTextos {
  eyebrow: string;
  titulo: string;
  itens: string[];
  proximoConteudo?: string;
  sigla?: string;
  disciplina?: string;
  instituicaoSigla?: string;
  parte?: string;
  rodapeEsquerda?: string;
}

export interface SummarySlideFontes {
  familiaTitulo?: string;
  familiaTexto?: string;
  tamanhoTitulo?: string;
  tamanhoEyebrow?: string;
  tamanhoItem?: string;
  tamanhoProximoConteudo?: string;
  tamanhoRodape?: string;
}

export interface SummarySlideCores {
  corFundo?: string;
  corDestaqueSuave?: string;
  corDestaque?: string;
  corTitulo?: string;
  corItem?: string;
  corMarcador?: string;
  corProximoConteudo?: string;
  corRodape?: string;
  corNumeroPagina?: string;
}

export interface SummarySlideProps {
  textos: SummarySlideTextos;
  cores?: SummarySlideCores;
  fontes?: SummarySlideFontes;
  numeroPagina?: number;
  mostrarBlob?: boolean;
  mostrarRodape?: boolean;
  proporcao?: string;
  className?: string;
  style?: CSSProperties;
}
