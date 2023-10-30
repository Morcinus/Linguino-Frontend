import { Modify } from "domain/models/utils/modify";
import { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Article } from "./Articles";

export interface ArticleParams {
  categoryId?: ID;
}

const ArticlesAPI = {
  URI: (courseId: ID) => `courses/${courseId}/articles`,

  useArticles(
    courseId: ID,
    params: ArticleParams = {}
  ): Modify<FetchHook<Array<Article>>, { articles: Array<Article> }> {
    const { data, ...rest } = useAPI<Array<Article>>(
      `${this.URI(courseId)}?${parseQueryParams(params)}`
    );
    return { articles: data, ...rest };
  },

  useArticle(
    courseId: ID,
    articleId: ID
  ): Modify<FetchHook<Article>, { article: Article }> {
    const { data, ...rest } = useAPI<Article>(
      `${this.URI(courseId)}/${articleId}`
    );
    return { article: data, ...rest };
  },
};

export default ArticlesAPI;
