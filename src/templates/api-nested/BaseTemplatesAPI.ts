import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { BaseTemplate } from "./BaseTemplates";

export interface BaseTemplateParams {}

const BaseTemplatesAPI = {
  URI: (base0TemplateId: ID) =>
    `base-0-templates/${base0TemplateId}/base-templates`,

  useBaseTemplate(
    base0TemplateId: ID,
    id: ID
  ): Modify<FetchHook<BaseTemplate>, { baseTemplate: BaseTemplate }> {
    const { data, ...rest } = useAPI<BaseTemplate>(
      `${this.URI(base0TemplateId)}/${id}`
    );
    return { baseTemplate: data, ...rest };
  },

  useBaseTemplates(
    base0TemplateId: ID,
    params: BaseTemplateParams = {}
  ): Modify<
    FetchHook<Array<BaseTemplate>>,
    { baseTemplates: Array<BaseTemplate> }
  > {
    const { data, ...rest } = useAPI<Array<BaseTemplate>>(
      `${this.URI(base0TemplateId)}?${parseQueryParams(params)}`
    );
    return { baseTemplates: data, ...rest };
  },

  async createBaseTemplate(
    base0TemplateId: ID,
    baseTemplate: Omit<BaseTemplate, "id">
  ): Promise<BaseTemplate> {
    return API.post(`${this.URI(base0TemplateId)}`, baseTemplate);
  },

  async updateBaseTemplate(
    base0TemplateId: ID,
    baseTemplate: Partial<BaseTemplate>
  ): Promise<BaseTemplate> {
    return API.put(
      `${this.URI(base0TemplateId)}/${baseTemplate.id}`,
      baseTemplate
    );
  },

  async deleteBaseTemplate(
    base0TemplateId: ID,
    baseTemplate: BaseTemplate
  ): Promise<BaseTemplate> {
    return API.delete(`${this.URI(base0TemplateId)}/${baseTemplate.id}`);
  },
};

export default BaseTemplatesAPI;
