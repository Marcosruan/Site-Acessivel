import type { ExerciseCollection } from "../../domain/models/content";
import type { IExerciseRepository } from "../../domain/repositories/ExerciseRepository";
import { questionarioMock } from "../mocks/questionátiosMock";

export class MockExerciseRepository implements IExerciseRepository {
  findAll(): ExerciseCollection[] {
    return questionarioMock;
  }

  findByName(name: string): ExerciseCollection | undefined {
    return questionarioMock.find((exercise) => exercise.exercise === name);
  }
}
