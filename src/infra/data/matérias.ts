import type { Article } from "../../domain/models/content";
import { cartoes, destaque, linhaDoTempo, paragrafos, subtitulo } from "../../domain/helpers/blocks";

export const conteudosDosArtigos: Article[] = [
  {
    article: "Introdução à Linguagem Java",
    title: null,
    author: null,
    date: null,
    blocks: [
      ...paragrafos(
        "Java é uma linguagem de programação orientada a objetos, de propósito geral e fortemente tipada, criada originalmente para ser independente da plataforma em que executa. Seu desenvolvimento começou em 1991, na Sun Microsystems, dentro do chamado \"Project Green\", liderado pelo engenheiro James Gosling.",
        "A linguagem nasceu com o nome \"Oak\" (carvalho), pensada para controlar eletrodomésticos e dispositivos embarcados. Com a explosão da internet em meados dos anos 90, foi reformulada e relançada em 1995 sob o nome \"Java\", voltada para aplicações web (applets). Em 2010, a Oracle adquiriu a Sun Microsystems e passou a ser responsável pela linguagem.",
      ),
      linhaDoTempo([
        { ano: "1991", titulo: "Project Green", descricao: "inicia como \"Oak\"" },
        { ano: "1995", titulo: "Relançamento", descricao: "como \"Java\"" },
        { ano: "2010", titulo: "Oracle adquire", descricao: "a Sun Microsystems" },
        {
          ano: "Hoje",
          titulo: "Uma das linguagens",
          descricao: "mais usadas do mundo",
          destaque: true,
        },
      ]),
      destaque(
        "Curiosidade",
        "O nome \"Java\" é uma referência informal ao café indonésio (Java coffee) — por isso o símbolo oficial da linguagem é uma xícara de café fumegante.",
      ),
      subtitulo("Características"),
            ...paragrafos(
        "Quando a Sun apresentou o Java, destacou um conjunto de características que explicam sua rápida adoção. Vejamos as três primeiras.",
      ),
      cartoes([
        {
          titulo: "Simples",
          texto: "Sintaxe inspirada em C/C++, mas sem recursos complexos como ponteiros explícitos e herança múltipla de classes — mais fácil de aprender e de manter.",
        },
        {
          titulo: "Orientada a Objetos",
          texto: "Praticamente tudo em Java é organizado em classes e objetos, o que favorece a reutilização de código e a organização de sistemas grandes.",
        },
        {
          titulo: "Independente de Plataforma",
          texto: "O código compilado (bytecode) roda em qualquer sistema operacional que tenha uma JVM instalada — o famoso \"write once, run anywhere\".",
        },
      ]),
    ],
    slideHeader: {
      disciplina: "JAVA — LINGUAGEM DE PROGRAMAÇÃO II",
      parte: "PARTE 1",
      titulo: "Introdução à Linguagem Java",
      subtitulo: "O que é Java? Um pouco de história e características",
      instituicaoSigla: "UEPB",
      numeroSecao: "1.1",
      numeroPagina: 3,
      cores: {
        corFundo: "#FBF7F1",
        corCirculoMedio: "#8B5E3C",
        corCirculoClaro: "#E4D2B8",
        corDestaque: "#C0632B",
        corTextoDestaque: "#5B3A22",
        corTitulo: "#2B1B0E",
        corSubtitulo: "#6B4A2E",
        corAutor: "#8B5E3C",
        corTextoSecundario: "#4A3222",
      },
    },
  },
];
