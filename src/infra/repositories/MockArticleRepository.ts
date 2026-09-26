import type { Article } from "../../domain/models/content";
import type { IArticleRepository } from "../../domain/repositories/ArticleRepository";
import { conteudosDosArtigos } from "../mocks/matériasMock";

export class MockArticleRepository implements IArticleRepository {
  findAll(): Article[] {
    return conteudosDosArtigos;
  }

  findByName(name: string): Article | undefined {
    return conteudosDosArtigos.find((article) => article.article === name);
  }
}
