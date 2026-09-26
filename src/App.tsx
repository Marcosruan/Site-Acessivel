import { useState } from "react";
import { Header } from "./components/layout/header";
import { Main } from "./components/layout/main";
import { Footer } from "./components/layout/footer";
import "./App.css";
import { AccessibilityControls } from "./components/common/A11y/AccessibilityControls";
import type {
  AppArea,
  Article,
  ExerciseCollection,
} from "./domain/models/content";
import { findArticle, listArticles } from "./application/use-cases/articles";
import { findExercise, listExercises } from "./application/use-cases/exercises";
import { MockArticleRepository } from "./infra/repositories/MockArticleRepository";
import { MockExerciseRepository } from "./infra/repositories/MockExerciseRepository";

const articleRepository = new MockArticleRepository();
const exerciseRepository = new MockExerciseRepository();

function App() {
  const [area, setArea] = useState<AppArea>("home");
  const [content, setContent] = useState<Article | null>(null);
  const [exercise, setExercise] = useState<ExerciseCollection | null>(null);

  const articles = listArticles(articleRepository);
  const exercises = listExercises(exerciseRepository);

  function changeArea(nextArea: AppArea) {
    setArea(nextArea);
  }

  function selectArticle(articleName: string | null) {
    if (!articleName) return;
    const article = findArticle(articleRepository, articleName);
    if (article) setContent(article);
  }

  function selectExercise(exerciseName: string) {
    const selectedExercise = findExercise(exerciseRepository, exerciseName);
    if (selectedExercise) setExercise(selectedExercise);
  }

  return (
    <>
      <Header area={area} setArea={changeArea} title="Site Acessível" />
      <AccessibilityControls />
      <Main
        area={area}
        articles={articles}
        content={content}
        setArea={changeArea}
        setContent={selectArticle}
        exercises={exercises}
        exercise={exercise}
        getExercise={selectExercise}
      />
      <Footer setArea={changeArea} />
    </>
  );
}

export default App;
