import type { IArticleRepository } from "../../domain/repositories/ArticleRepository";

export function listArticles(repository: IArticleRepository) {
  return repository.findAll();
}

export function findArticle(repository: IArticleRepository, name: string) {
  return repository.findByName(name);
}