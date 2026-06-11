import type { Estados } from "../../../App";
import { SectionLink } from "../homePage/articleLink";

type SectionHomeProps = {
  setArea: (area: Estados["area"]) => void;
  setConteudo: (materia: string) => void;
};

export function SectionHome({ setArea, setConteudo }: SectionHomeProps) {
  const materias = Array.from({ length: 9 }, (_, i) => `Matéria ${i + 1}`);

  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto list-none p-0">
      {materias.map((materia) => (
        <li key={materia}>
          <SectionLink
            area="matérias"
            materia={materia}
            setArea={setArea}
            setConteudo={setConteudo}
          />
        </li>
      ))}
    </ul>
  );
}