export type AppArea = "articles" | "home" | "exercises";

export type Article = {
  article: string | null;
  title: string | null;
  author: string | null;
  date: string | null;
  image?: string;
  alt?: string;
  paragraphs: string[] | null;
  slideHeader?: {
    disciplina: string;
    parte?: string;
    titulo: string;
    subtitulo?: string;
    autor?: string;
    instituicao?: string;
    sigla?: string;
    instituicaoSigla?: string;
    rodapeEsquerda?: string;
    cores?: {
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
    numeroPagina?: number;
  };
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