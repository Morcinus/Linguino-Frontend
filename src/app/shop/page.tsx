// prettier-ignore
"use client"

import { shopCategories } from "config/config";
import { useTranslation } from "i18n/client";
import { optimisticMutationOption } from "infrastructure/api/API";
import errorCodes from "infrastructure/api/error-codes";
import { ShopItem } from "infrastructure/api/user/shop-items/ShopItems";
import ShopItemsAPI from "infrastructure/api/user/shop-items/ShopItemsAPI";
import useErrorHandler from "infrastructure/services/ErrorHandler";
import icons from "styles/icons";

import { useState } from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import SimpleCard from "components/atoms/cards/SimpleCard/SimpleCard";
import Popup, { IPopup } from "components/atoms/Popup/Popup";
import TabBarPanel from "components/atoms/TabBarPanel/TabBarPanel";
import CardGrid from "components/layouts/CardGrid/CardGrid";

export interface IShopPage {}

const ShopPage: React.FC<IShopPage> = () => {
  const [value, setValue] = useState(shopCategories[0].id);
  const { shopItems, mutate } = ShopItemsAPI.useShopItems({
    categoryId: value,
  });
  const { t } = useTranslation("cs", "common");
  const { t: tError } = useTranslation("cs", "error-codes");
  const [popup, setPopup] = useState<IPopup | null>(null);
  const { setError } = useErrorHandler();

  const handleBuy = (itemId: ID) => {
    const updatedArray = shopItems.map((item) => {
      if (item.id === itemId) return { ...item, bought: true };
      else return item;
    });

    mutate(async () => {
      try {
        await ShopItemsAPI.buyItem(itemId);
      } catch (err) {
        if (err === errorCodes.notEnoughMoney) {
          setError(tError("notEnoughMoney"));
        }
        return Promise.reject(err);
      }

      return updatedArray;
    }, optimisticMutationOption<Array<ShopItem>>(updatedArray));
  };

  const handleItemEquipChange = (itemId: ID, equipped: boolean) => {
    const updatedArray = shopItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, equipped };
      } else {
        if (equipped === true) {
          return { ...item, equipped: false };
        } else return item;
      }
    });

    mutate(async () => {
      try {
        if (equipped) {
          await ShopItemsAPI.equipItem(itemId);
        } else {
          await ShopItemsAPI.unequipItem(itemId);
        }
      } catch (err) {
        return Promise.reject(err);
      }

      return updatedArray;
    }, optimisticMutationOption<Array<ShopItem>>(updatedArray));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="subtitle1">{t("categories")}</Typography>
      {popup && <Popup {...popup} open={true} onClose={() => setPopup(null)} />}
      <TabBarPanel
        onChange={(value) => setValue(value)}
        tabs={shopCategories}
        panelContent={
          shopItems && (
            <CardGrid
              cards={shopItems
                .sort((a, b) => a.price - b.price)
                .map((item) => {
                  return {
                    component: SimpleCard,
                    props: {
                      header:
                        item.equipped === true
                          ? t("shop.equipped")
                          : item.bought
                          ? t("shop.bought")
                          : item.price,
                      headerIcon: !item.bought ? icons.coins : undefined,
                      imageURL: item.imageURL,
                      highlightCard: item.equipped,
                      onClick: () => {
                        const buyPopupProps = {
                          displayCloseButton: true,
                          subheader: `${item.price}`,
                          imageURL: item.imageURL,
                          primaryAction: {
                            text: t("shop.buy"),
                            onClick: () => {
                              handleBuy(item.id);
                              setPopup(null);
                            },
                          },
                        };

                        const equipPopupProps = {
                          displayCloseButton: true,
                          imageURL: item.imageURL,
                          primaryAction: {
                            text: t("shop.equip"),
                            onClick: () => {
                              handleItemEquipChange(item.id, true);
                              setPopup(null);
                            },
                          },
                        };

                        const unequipPopupProps = {
                          displayCloseButton: true,
                          imageURL: item.imageURL,
                          primaryAction: {
                            text: t("shop.unequip"),
                            onClick: () => {
                              handleItemEquipChange(item.id, false);
                              setPopup(null);
                            },
                          },
                        };

                        setPopup(
                          item.equipped === true
                            ? unequipPopupProps
                            : item.bought === true
                            ? equipPopupProps
                            : buyPopupProps
                        );
                      },
                    },
                  };
                })}
            />
          )
        }
        value={value}
      />
    </Box>
  );
};

export default ShopPage;
