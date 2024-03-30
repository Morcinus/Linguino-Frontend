export interface ShopItem {
  id: Id;
  name: string;
  imageUrl: string;
  price: number;
  categoryId: Id;

  bought: boolean;
  equipped: boolean;
}
