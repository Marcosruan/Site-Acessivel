import type { Estados } from "../../App";
import { SectionLink } from "../section/sectionMatérias";

type SectionHomeProps = {
  setArea: (area: Estados["area"]) => void;
  setConteudo: (materia: string) => void;
};

export function SectionHome({ setArea, setConteudo }: SectionHomeProps) {
  return (
    <section className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
      <SectionLink
        area={"matérias"}
        materia="Matéria 1"
        setArea={setArea}
        setConteudo={setConteudo}
      />
      <SectionLink
        area={"matérias"}
        materia="Matéria 2"
        setArea={setArea}
        setConteudo={setConteudo}
      />
      <SectionLink
        area={"matérias"}
        materia="Matéria 3"
        setArea={setArea}
        setConteudo={setConteudo}
      />
      <SectionLink
        area={"matérias"}
        materia="Matéria 4"
        setArea={setArea}
        setConteudo={setConteudo}
      />
      <SectionLink
        area={"matérias"}
        materia="Matéria 5"
        setArea={setArea}
        setConteudo={setConteudo}
      />
      <SectionLink
        area={"matérias"}
        materia="Matéria 6"
        setArea={setArea}
        setConteudo={setConteudo}
      />
      <SectionLink
        area={"matérias"}
        materia="Matéria 7"
        setArea={setArea}
        setConteudo={setConteudo}
      />
      <SectionLink
        area={"matérias"}
        materia="Matéria 8"
        setArea={setArea}
        setConteudo={setConteudo}
      />
      <SectionLink
        area={"matérias"}
        materia="Matéria 9"
        setArea={setArea}
        setConteudo={setConteudo}
      />
    </section>
  );
}
