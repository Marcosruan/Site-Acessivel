import { useState } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { conteudosDosArtigos } from "./mocks/matériasMock";
import "./App.css";
import { questionarioMock } from "./mocks/questionátiosMock";
import { AccessibilityControls } from "./components/A11y/AccessibilityControls";

export type AppState = {
  area: "articles" | "home" | "exercises";
  content: Content;
  exercises: ExerciseList;
};

export type ExerciseList = {
  exercise: string | null;
  questions: Exercise[];
};

export type Exercise = {
  question: string | null;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  option4: string | null;
  option5: string | null;
  answer: "option1" | "option2" | "option3" | "option4" | "option5" | null;
  explanation?: string;
};

export type Content = {
  article: string | null;
  title: string | null;
  author: string | null;
  date: string | null;
  image?: string
  alt?: string
  paragraphs: string[] | null;
};

function App() {
  const [state, setState] = useState<AppState>({
    area: "home",
    content: {
      article: null,
      title: null,
      author: null,
      date: null,
      paragraphs: null,
    },
    exercises: {
      exercise: null,
      questions: [
        {
          question: null,
          option1: null,
          option2: null,
          option3: null,
          option4: null,
          option5: null,
          answer: null,
        },
      ],
    },
  });

  function setArea(area: AppState["area"]) {
    setState((prev) => ({ ...prev, area }));
  }

  function setContent(article: Content) {
    setState((prev) => {
      return { ...prev, content: article };
    });
  }

  function setContentByArticle(articleName: string | null) {
    const article = conteudosDosArtigos.find(
      (item) => item.article === articleName,
    );
    if (article) {
      setContent(article as unknown as Content);
    }
  }

  function setExercise(exercises: ExerciseList) {
    setState((prev) => {
      return { ...prev, exercises };
    });
  }

  function getExercise(exerciseName: string) {
    const exercise = questionarioMock.find(
      (item) => item.exercise === exerciseName,
    );
    if (exercise) {
      setExercise(exercise as unknown as ExerciseList);
    }
  }

  return (
    <>
      <Header area="home" setArea={setArea} title="Site Acessível" />
      <AccessibilityControls />
      <Main
        area={state.area}
        content={state.content}
        setArea={setArea}
        setContent={setContentByArticle}
        exercise={state.exercises}
        getExercise={getExercise}
      />
      <Footer setArea={setArea} />
    </>
  );
}

export default App;
