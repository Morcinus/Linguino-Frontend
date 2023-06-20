import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { BaseTemplate } from "./BaseTemplates";

export interface BaseTemplateParams {}

const BaseTemplatesAPI = {
  URI: "base-templates",

  useBaseTemplate(
    id: ID
  ): Modify<FetchHook<BaseTemplate>, { baseTemplate: BaseTemplate }> {
    const { data, ...rest } = useAPI<BaseTemplate>(`${this.URI}/${id}`);
    return { baseTemplate: data, ...rest };
  },

  useBaseTemplates(
    params: BaseTemplateParams = {}
  ): Modify<
    FetchHook<Array<BaseTemplate>>,
    { baseTemplates: Array<BaseTemplate> }
  > {
    const { data, ...rest } = useAPI<Array<BaseTemplate>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { baseTemplates: data, ...rest };
  },

  async createBaseTemplate(
    baseTemplate: Omit<BaseTemplate, "id">
  ): Promise<BaseTemplate> {
    return API.post(`${this.URI}`, baseTemplate);
  },

  async getBaseTemplate(id: ID): Promise<BaseTemplate> {
    return API.get(`${this.URI}/${id}`);
  },

  async getBaseTemplates(
    params: BaseTemplateParams = {}
  ): Promise<Array<BaseTemplate>> {
    return API.get(`${this.URI}?${parseQueryParams(params)}`);
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
