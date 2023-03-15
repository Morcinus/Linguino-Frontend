import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Article } from "./Articles";

export interface ArticleParams {}

const ArticlesAPI = {
  URI: "articles",

  useArticles(
    params: ArticleParams = {}
  ): Modify<FetchHook<Array<Article>>, { articles: Array<Article> }> {
    const { data, ...rest } = useAPI<Array<Article>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { articles: data, ...rest };
  },

  useArticle(articleId: ID): Modify<FetchHook<Article>, { article: Article }> {
    const { data, ...rest } = useAPI<Article>(`${this.URI}/${articleId}`);
    return { article: data, ...rest };
  },

  async createArticle(article: Article): Promise<Article> {
    return API.post(`${this.URI}`, article);
  },

  async updateArticle(article: Partial<Article>): Promise<Article> {
    return API.put(`${this.URI}/${article.id}`, article);
  },

  async deleteArticle(article: Article): Promise<Article> {
    return API.delete(`${this.URI}/${article.id}`);
  },
};

export default ArticlesAPI;
