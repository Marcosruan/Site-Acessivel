import type {
  CalloutBlock,
  CardsBlock,
  ImageBlock,
  ListBlock,
  ParagraphBlock,
  QuoteBlock,
  SubtitleBlock,
  TimelineBlock,
  FeatureCard,
  TimelineItem,
} from "../models/content";

/**
 * Atalhos para montar `Article.blocks` sem repetir a forma dos objetos.
 * São usados principalmente nos arquivos de conteúdo (`src/infra/data`),
 * onde o que importa é a ordem de leitura do texto.
 *
 * @example
 * blocks: [
 *   ...paragrafos("Primeiro parágrafo.", "Segundo parágrafo."),
 *   subtitulo("Características"),
 *   ...destaque("Curiosidade", "O nome Java vem do café indonésio."),
 * ]
 */

/** Converte N textos em N blocos `paragrafo`, quantos forem necessários. */
export function paragrafos(...textos: string[]): ParagraphBlock[] {
  return textos
    .filter((texto) => texto.trim().length > 0)
    .map((texto) => ({ tipo: "paragrafo", texto }));
}

export function subtitulo(texto: string, nivel?: 2 | 3): SubtitleBlock {
  return { tipo: "subtitulo", texto, nivel };
}

export function lista(itens: string[], ordenada?: boolean): ListBlock {
  return { tipo: "lista", itens, ordenada };
}

export function citacao(texto: string, autor?: string): QuoteBlock {
  return { tipo: "citacao", texto, autor };
}

export function imagem(src: string, alt?: string): ImageBlock {
  return { tipo: "imagem", src, alt };
}

export function linhaDoTempo(itens: TimelineItem[]): TimelineBlock {
  return { tipo: "timeline", itens };
}

export function cartoes(cards: FeatureCard[]): CardsBlock {
  return { tipo: "cards", cards };
}

export function destaque(rotulo: string, texto: string): CalloutBlock {
  return { tipo: "callout", rotulo, texto };
}
