import type { Article } from "../models/content";

export interface IArticleRepository {
  findAll(): Article[];
  findByName(name: string): Article | undefined;
}