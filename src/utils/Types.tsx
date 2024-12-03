export type CartItemType = {
  id: string;
  name: string;
  description: string;
  weight: number;
  price: number;
  image: string;
  qty: number;
  salePrcentage: number;
  saledPrice: number;
};

export type FilterType = {
  id: string;
  value: string;
};
