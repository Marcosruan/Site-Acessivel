import { useState } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { conteudosDosArtigos } from "./mocks/matériasMock";
import "./App.css";
import { questionarioMock } from "./mocks/questionátiosMock";
import { AccessibilityControls } from "./components/A11y/AccessibilityControls";

export type Estados = {
  area: "matérias" | "home" | "exercícios";
  conteudo: Conteudo;
  exercicio: Exercicio;
};

export type Exercicio = {
  pergunta: string | null;
  opcao1: string | null;
  opcao2: string | null;
  opcao3: string | null;
  opcao4: string | null;
  opcao5: string | null;
};

export type Conteudo = {
  materia: string | null;
  titulo: string | null;
  autor: string | null;
  data: string | null;
  textos: string[] | null;
};

function App() {
  const [state, setState] = useState<Estados>({
    area: "home",
    conteudo: {
      materia: null,
      titulo: null,
      autor: null,
      data: null,
      textos: null,
    },
    exercicio: {
      pergunta: null,
      opcao1: null,
      opcao2: null,
      opcao3: null,
      opcao4: null,
      opcao5: null,
    },
  });

  function setArea(area: Estados["area"]) {
    setState((prev) => ({ ...prev, area }));
  }

  function setMateria(artigo: Conteudo) {
    setState((prev) => {
      return { ...prev, conteudo: artigo };
    });
  }

  function setConteudo(materia: string) {
    const artigo = conteudosDosArtigos.find((item) => item.materia === materia);
    if (artigo) {
      setMateria(artigo);
    }
  }

  function setExercicio(exercicio: Exercicio) {
    setState((prev) => {
      return { ...prev, exercicio };
    });
  }

  function getExercicio(questao: string) {
    const exercicio = questionarioMock.find((item) => item.questao === questao);
    if (exercicio) {
      setExercicio(exercicio);
    }
  }

  return (
    <>
      <Header area="home" setArea={setArea} titulo="Site Acessível" />
      <AccessibilityControls />
      <Main
        area={state.area}
        conteudo={state.conteudo}
        setArea={setArea}
        setConteudo={setConteudo}
        exercicio={state.exercicio}
        getExercicio={getExercicio}
      />
      <Footer setArea={setArea} />
    </>
  );
}

export default App;
