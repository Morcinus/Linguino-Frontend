import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { ShopItem } from "./ShopItems";

export interface ShopItemParams {
  categoryId?: ID;
}

const ShopItemsAPI = {
  URI: "shop-items",

  useShopItems(
    params: ShopItemParams
  ): Modify<FetchHook<Array<ShopItem>>, { shopItems: Array<ShopItem> }> {
    const { data, ...rest } = useAPI<Array<ShopItem>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { shopItems: data, ...rest };
  },

  async updateShopItem(shopItem: Partial<ShopItem>): Promise<ShopItem> {
    return API.put(`${this.URI}/${shopItem.id}`, shopItem);
  },
};

export default ShopItemsAPI;
