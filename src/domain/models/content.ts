export type AppArea = "articles" | "home" | "exercises";

export type SlideCores = {
  corFundo?: string;
  corCirculoMedio?: string;
  corCirculoClaro?: string;
  corDestaque?: string;
  corTextoDestaque?: string;
  corTitulo?: string;
  corSubtitulo?: string;
  corAutor?: string;
  corTextoSecundario?: string;
};

export type SlideHeader = {
  disciplina: string;
  parte?: string;
  titulo: string;
  subtitulo?: string;
  autor?: string;
  instituicao?: string;
  sigla?: string;
  instituicaoSigla?: string;
  rodapeEsquerda?: string;
  cores?: SlideCores;
  numeroPagina?: number;
  /** Selo pequeno no canto superior direito, ex.: "1.1" (opcional, novo). */
  numeroSecao?: string;
};

/** Um marco de uma linha do tempo, ex.: 1991 · "Project Green inicia como Oak". */
export type TimelineItem = {
  ano: string;
  titulo: string;
  descricao?: string;
  /** Marca o item como o "presente"/destaque (ex.: "Hoje"), muda o estilo do círculo. */
  destaque?: boolean;
};

/** Caixa de destaque tipo "Curiosidade", "Nota", "Atenção". */
export type Callout = {
  rotulo: string;
  texto: string;
};

/** Um card de um grid de características/tópicos (ex.: "Simples", "Orientada a Objetos"). */
export type FeatureCard = {
  titulo: string;
  texto: string;
};

export type ParagraphBlock = {
  tipo: "paragrafo";
  texto: string;
};

export type SubtitleBlock = {
  tipo: "subtitulo";
  texto: string;
  /** 2 -> <h2> (padrão), 3 -> <h3>. */
  nivel?: 2 | 3;
};

export type ListBlock = {
  tipo: "lista";
  itens: string[];
  /** Lista ordenada (<ol>) em vez de não ordenada (<ul>). */
  ordenada?: boolean;
};

export type QuoteBlock = {
  tipo: "citacao";
  texto: string;
  autor?: string;
};

export type ImageBlock = {
  tipo: "imagem";
  src: string;
  alt?: string;
};

export type TimelineBlock = {
  tipo: "timeline";
  itens: TimelineItem[];
};

export type CardsBlock = {
  tipo: "cards";
  cards: FeatureCard[];
};

export type CalloutBlock = {
  tipo: "callout";
  rotulo: string;
  texto: string;
};

/**
 * Unidade de conteúdo de um artigo. Um array de `ArticleBlock` é renderizado
 * na ordem em que foi declarado, o que permite intercalar parágrafos com
 * subtítulos, listas, imagens, timelines, cards e callouts — quantas vezes
 * for preciso, sem repetição de campos.
 */
export type ArticleBlock =
  | ParagraphBlock
  | SubtitleBlock
  | ListBlock
  | QuoteBlock
  | ImageBlock
  | TimelineBlock
  | CardsBlock
  | CalloutBlock;

export type Article = {
  article: string | null;
  title: string | null;
  author: string | null;
  date: string | null;
  image?: string;
  alt?: string;
  /**
   * Conteúdo do artigo como sequência de blocos. É a forma recomendada e
   * tem prioridade sobre os campos avulsos abaixo, que continuam funcionando
   * para conteúdos mais simples (renderizados sempre nesta ordem).
   */
  blocks?: ArticleBlock[];
  /** @deprecated Prefira `blocks` com blocos `paragrafo`. */
  paragraphs?: string[] | null;
  slideHeader?: SlideHeader;
  /** Linha do tempo opcional, renderizada logo após os parágrafos. */
  timeline?: TimelineItem[];
  /** Caixa de destaque opcional, renderizada após a timeline (ou parágrafos). */
  callout?: Callout;
  /** Grid de características/tópicos em cards (ex.: Simples, Orientada a Objetos...). */
  cards?: FeatureCard[];
};

export type ExerciseQuestion = {
  question: string | null;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  option4: string | null;
  option5: string | null;
  answer: "option1" | "option2" | "option3" | "option4" | "option5" | null;
  explanation?: string;
};

export type ExerciseCollection = {
  exercise: string | null;
  questions: ExerciseQuestion[];
};