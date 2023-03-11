import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { BaseTemplate } from "./BaseTemplates";

export interface BaseTemplateParams {}

const BaseTemplatesAPI = {
  URI: "base-templates",

  useBaseTemplates(
    params: BaseTemplateParams
  ): Modify<
    FetchHook<Array<BaseTemplate>>,
    { baseTemplates: Array<BaseTemplate> }
  > {
    const { data, ...rest } = useAPI<Array<BaseTemplate>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { baseTemplates: data, ...rest };
  },

  async createBaseTemplate(baseTemplate: BaseTemplate): Promise<BaseTemplate> {
    return API.post(`${this.URI}`, baseTemplate);
  },

  async updateBaseTemplate(
    baseTemplate: Partial<BaseTemplate>
  ): Promise<BaseTemplate> {
    return API.put(`${this.URI}/${baseTemplate.id}`, baseTemplate);
  },

  async deleteBaseTemplate(baseTemplate: BaseTemplate): Promise<BaseTemplate> {
    return API.delete(`${this.URI}/${baseTemplate.id}`);
  },
};

export default BaseTemplatesAPI;
