import type { IExerciseRepository } from "../../domain/repositories/ExerciseRepository";

export function listExercises(repository: IExerciseRepository) {
  return repository.findAll();
}

export function findExercise(repository: IExerciseRepository, name: string) {
  return repository.findByName(name);
}