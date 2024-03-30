export interface ShopItem {
  id: Id;
  name: string;
  imageURL: string;
  price: number;
  categoryId: Id;

  bought: boolean;
  equipped: boolean;
}
