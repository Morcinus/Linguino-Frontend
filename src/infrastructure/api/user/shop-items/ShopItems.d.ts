export interface ShopItem {
  id: ID;
  name: string;
  imageURL: string;
  price: number;
  categoryId: ID;

  bought: boolean;
  equipped: boolean;
}
