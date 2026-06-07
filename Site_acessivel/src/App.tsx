import { useState } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { cabeçalhosDosArtigos } from "./dadosCabeçalhoArtigo";
import "./App.css";

export type Estados = {
  area: "matérias" | "home" | "exercícios";
  conteudo: Conteudo;
};

export type Conteudo = {
  materia: string | null;
  titulo: string | null;
  autor: string | null;
  data: string | null;
};

function App() {
  const [state, setState] = useState<Estados>({
    area: "matérias",
    conteudo: {
      materia: null,
      titulo: null,
      autor: null,
      data: null,
    },
  });

  function setArea(area: Estados["area"]) {
    setState((prev) => ({ ...prev, area }));
  }

  function setNomeMateria(artigo: Conteudo) {
    setState((prev) => {
      return { ...prev, conteudo: artigo };
    });
  }

  function setConteudo(materia: string) {
    const artigo = cabeçalhosDosArtigos.find((item) => item.materia === materia);
    if (artigo) {
      setNomeMateria(artigo)
    }
  }

  return (
    <>
      <Header titulo="Site Acessível" />
      <Main
        area={state.area}
        conteudo={state.conteudo}
        setArea={setArea}
        setConteudo={setConteudo}
      />
      <Footer />
    </>
  );
}

export default App;
