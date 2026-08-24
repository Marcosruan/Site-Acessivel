import type { Content } from "../../../../App";

type ArticleHeaderProps = {
  content: Content;
};

export function ArticleHeader({ content }: ArticleHeaderProps) {
  return (
    <header className="border-b border-slate-300 px-7 py-8">
      <p className="mb-1 text-sm text-[#595959]">{content.article}</p>

      <h2 className="mb-2 text-2xl font-bold text-[#1F1F26]">
        {content.title}
      </h2>

      <div className="space-y-1 text-xs text-slate-600">
        <p className="text-[#595959]">Autor: {content.author}</p>
        <p className="text-[#595959]">Data: {content.date}</p>
      </div>
    </header>
  );
}
