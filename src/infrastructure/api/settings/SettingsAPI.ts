import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";

import { Settings } from "./Settings";

export interface SettingsParams {}

const SettingsAPI = {
  URI: "settings",

  useSettings(
    userId?: ID
  ): Modify<FetchHook<Settings>, { settings: Settings }> {
    const { data, ...rest } = useAPI<Settings>(
      userId ? `${this.URI}/${userId}` : false
    );
    return { settings: data, ...rest };
  },

  async updateSettings(settings: Partial<Settings>): Promise<Settings> {
    return API.put(`${this.URI}/${settings.id}`, settings);
  },
};

export default SettingsAPI;
