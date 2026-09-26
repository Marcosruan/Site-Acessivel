import type { ExerciseCollection } from "../../domain/models/content";
import type { ExerciseRepository } from "../../domain/repositories/ExerciseRepository";
import { questionarioMock } from "../mocks/questionátiosMock";

export class MockExerciseRepository implements ExerciseRepository {
  findAll(): ExerciseCollection[] {
    return questionarioMock;
  }

  findByName(name: string): ExerciseCollection | undefined {
    return questionarioMock.find((exercise) => exercise.exercise === name);
  }
}