import { useState } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import "./App.css";

function App() {
  const [state, setState] = useState(
    {opcao: "matérias"}
  );

  return (
    <>
      <Header titulo="Site Acessível" />
      <Main opcao={state.opcao} />
      <Footer />
    </>
  );
}

export default App;
