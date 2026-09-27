import type { ArticleBlock, Article } from "../../../../../../domain/models/content";
import type { ResolvedTheme } from "../theme";
import { Paragraph, Paragraphs } from "./Paragraphs";
import { Subtitle } from "./Subtitle";
import { ArticleList } from "./ArticleList";
import { BlockQuote } from "./BlockQuote";
import { Timeline } from "./Timeline";
import { FeatureCards } from "./FeatureCards";
import { CalloutBox } from "./CalloutBox";
import { ArticleImage } from "./ArticleImage";

type ContentBlockProps = {
  block: ArticleBlock;
  theme: ResolvedTheme;
};

/** Desenha um único bloco de conteúdo, conforme o seu `tipo`. */
export function ContentBlock({ block, theme }: ContentBlockProps) {
  switch (block.tipo) {
    case "paragrafo":
      return <Paragraph texto={block.texto} theme={theme} />;
    case "subtitulo":
      return <Subtitle texto={block.texto} nivel={block.nivel} theme={theme} />;
    case "lista":
      return <ArticleList items={block.itens} ordenada={block.ordenada} theme={theme} />;
    case "citacao":
      return <BlockQuote texto={block.texto} autor={block.autor} theme={theme} />;
    case "imagem":
      return <ArticleImage src={block.src} alt={block.alt} />;
    case "timeline":
      return <Timeline items={block.itens} theme={theme} />;
    case "cards":
      return <FeatureCards cards={block.cards} theme={theme} />;
    case "callout":
      return <CalloutBox callout={block} theme={theme} />;
  }
}

type ContentBlocksProps = {
  blocks: ArticleBlock[];
  theme: ResolvedTheme;
};

/** Desenha uma sequência de blocos na ordem em que foram declarados. */
export function ContentBlocks({ blocks, theme }: ContentBlocksProps) {
  return (
    <>
      {blocks.map((block, i) => (
        <ContentBlock key={i} block={block} theme={theme} />
      ))}
    </>
  );
}

type ArticleContentProps = {
  page: Article;
  theme: ResolvedTheme;
};

/**
 * Corpo do artigo: capa + conteúdo. Compartilhado por `ArticlePage` e
 * `SlidePage`, para que os dois layouts desenhem o mesmo conteúdo.
 *
 * Se a página declarar `blocks`, eles são renderizados na ordem dada e os
 * campos avulsos (`paragraphs`, `timeline`, `cards`, `callout`) são ignorados.
 * Sem `blocks`, cai no formato antigo de ordem fixa.
 */
export function ArticleContent({ page, theme }: ArticleContentProps) {
  if (page.blocks && page.blocks.length > 0) {
    return (
      <>
        {page.image && <ArticleImage src={page.image} alt={page.alt} />}
        <ContentBlocks blocks={page.blocks} theme={theme} />
      </>
    );
  }

  return (
    <>
      {page.image && <ArticleImage src={page.image} alt={page.alt} />}

      {page.paragraphs && page.paragraphs.length > 0 && (
        <Paragraphs paragraphs={page.paragraphs} theme={theme} />
      )}

      {page.timeline && page.timeline.length > 0 && (
        <Timeline items={page.timeline} theme={theme} />
      )}

      {page.cards && page.cards.length > 0 && (
        <FeatureCards cards={page.cards} theme={theme} />
      )}

      {page.callout && <CalloutBox callout={page.callout} theme={theme} />}
    </>
  );
}
