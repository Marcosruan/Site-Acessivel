import type { CSSProperties } from "react";

export interface ReferencesSlideTextos {
  selo: string;
  eyebrow: string;
  titulo: string;
  itens: string[];
  sigla?: string;
  disciplina?: string;
  instituicaoSigla?: string;
  parte?: string;
  rodapeEsquerda?: string;
}

export interface ReferencesSlideFontes {
  familiaTitulo?: string;
  familiaTexto?: string;
  tamanhoTitulo?: string;
  tamanhoEyebrow?: string;
  tamanhoItem?: string;
  tamanhoRodape?: string;
  tamanhoSelo?: string;
}

export interface ReferencesSlideCores {
  corFundo?: string;
  corDestaque?: string;
  corTextoSelo?: string;
  corTitulo?: string;
  corItem?: string;
  corDivisoria?: string;
  corRodape?: string;
}

export interface ReferencesSlideProps {
  textos: ReferencesSlideTextos;
  cores?: ReferencesSlideCores;
  fontes?: ReferencesSlideFontes;
  numeroPagina?: number;
  mostrarRodape?: boolean;
  proporcao?: string;
  className?: string;
  style?: CSSProperties;
}
