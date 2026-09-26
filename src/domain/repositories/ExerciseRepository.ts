import type { ExerciseCollection } from "../models/content";

export interface IExerciseRepository {
  findAll(): ExerciseCollection[];
  findByName(name: string): ExerciseCollection | undefined;
}