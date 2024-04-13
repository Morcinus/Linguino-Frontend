import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Settings } from "./Settings";

export interface SettingsParams {}

const SettingsAPI = {
  URI: "user/settings",

  useSettings(
    params: SettingsParams = {}
  ): Modify<FetchHook<Settings>, { settings: Settings }> {
    const { data, ...rest } = useAPI<Settings>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { settings: data, ...rest };
  },

  async updateSettings(settings: Partial<Settings>): Promise<Settings> {
    return API.patch(`${this.URI}`, settings);
  },
};

export default SettingsAPI;
