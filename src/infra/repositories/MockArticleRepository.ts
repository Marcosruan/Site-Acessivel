import type { Article } from "../../domain/models/content";
import type { ArticleRepository } from "../../domain/repositories/ArticleRepository";
import { conteudosDosArtigos } from "../mocks/matériasMock";

export class MockArticleRepository implements ArticleRepository {
  findAll(): Article[] {
    return conteudosDosArtigos;
  }

  findByName(name: string): Article | undefined {
    return conteudosDosArtigos.find((article) => article.article === name);
  }
}