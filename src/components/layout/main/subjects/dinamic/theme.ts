import type { SlideCores } from "../../../../../domain/models/content";

export type ResolvedTheme = Required<SlideCores>;

/**
 * Defaults do tema. A referência visual (café indonésio / xícara fumegante
 * do símbolo do Java) fica mais natural que um azul genérico de linguagem
 * de programação — mas todo o resto é 100% sobrescrevível pelo campo
 * `slideHeader.cores` do conteúdo, por página.
 */
export const defaultTheme: ResolvedTheme = {
  corFundo: "#FBF7F1",
  corCirculoMedio: "#8B5E3C",
  corCirculoClaro: "#E4D2B8",
  corDestaque: "#C0632B",
  corTextoDestaque: "#5B3A22",
  corTitulo: "#2B1B0E",
  corSubtitulo: "#6B4A2E",
  corAutor: "#8B5E3C",
  corTextoSecundario: "#4A3222",
};

export function resolveTheme(cores?: SlideCores): ResolvedTheme {
  return { ...defaultTheme, ...cores };
}
