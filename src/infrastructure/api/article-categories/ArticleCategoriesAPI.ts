import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { ArticleCategory } from "./ArticleCategories";

export interface ArticleCategoryParams {}

const ArticleCategoriesAPI = {
  URI: "article-categories",

  useArticleCategories(
    params: ArticleCategoryParams = {}
  ): Modify<
    FetchHook<Array<ArticleCategory>>,
    { articleCategories: Array<ArticleCategory> }
  > {
    const { data, ...rest } = useAPI<Array<ArticleCategory>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { articleCategories: data, ...rest };
  },

  async createArticleCategory(
    articleCategory: ArticleCategory
  ): Promise<ArticleCategory> {
    return API.post(`${this.URI}`, articleCategory);
  },

  async updateArticleCategory(
    articleCategory: Partial<ArticleCategory>
  ): Promise<ArticleCategory> {
    return API.put(`${this.URI}/${articleCategory.id}`, articleCategory);
  },

  async deleteArticleCategory(
    articleCategory: ArticleCategory
  ): Promise<ArticleCategory> {
    return API.delete(`${this.URI}/${articleCategory.id}`);
  },
};

export default ArticleCategoriesAPI;
