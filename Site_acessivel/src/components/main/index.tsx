import { Section } from "../section";
import { Article } from "../article";

type MainProps = {
  opcao: "matérias" | "seções"
}

export function Main({opcao}: MainProps) {
  if (opcao === "matérias") {
    return (
      <main>
        <Article/ >
        <Article/ >
      </main>
    )
  }
  return (
    <main>
      <Section />
      <Section />
    </main>
  );
}
