import type { ExerciseList } from "../App";

type Questionario = ExerciseList

export const questionarioMock = [
  {
    exercise: "Exercício 1",
    questions: [
      {    
      question: "Quem sou eu?",
      option1: "Ruan",
      option2: "Jessica",
      option3: "Donec cursus.",
      option4: "Carlos.",
      option5: "Nenhum.",
      answer: "option1",
      explanation: "É lógico que eu sou Ruan krl",
      }
    ]
  },
] satisfies Questionario[];
