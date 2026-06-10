import type { Estados } from "../../../../App";

type SectionLinkProps = {
  area: Estados["area"];
  materia: string;
  setArea: (area: Estados["area"]) => void;
  setConteudo: (materia: string) => void;
};

export function SectionLink({
  area,
  materia,
  setArea,
  setConteudo,
}: SectionLinkProps) {
  return (
    <section>
      <a
        className="border border-slate-300 p-4 flex items-center gap-3 hover:bg-gray-50"
        onClick={() => {
          setArea(area);
          setConteudo(materia);
        }}
      >
        <p>🌐</p>
        <p className="text-sm">{materia}</p>
      </a>
    </section>
  );
}
