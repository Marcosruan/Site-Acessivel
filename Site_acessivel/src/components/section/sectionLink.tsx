import type { Estados } from "../../App";

type SectionLinkProps = {
  area: Estados["area"];
  materia: string;
  setArea: (area: Estados["area"]) => void;
  setConteudo: (materia: string) => void;
}

export function SectionLink({area, materia, setArea, setConteudo}: SectionLinkProps) {
  return (
    <section>
      <a onClick={() => {
        setArea(area)
        setConteudo(materia)
      }}>
        <img src="" alt="" />
        <p></p>
      </a>
    </section>
  );
}
