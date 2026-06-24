import type { ExerciseList } from "../App";

type Questionario = ExerciseList

export const questionarioMock = [
  {
    exercise: "Exercício 1",
    questions: [
      {    
      question: "Texto da pergunta",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      option5: "",
      answer: "option1",
      explanation: "",
      },
    ]
  },
] satisfies Questionario[];
