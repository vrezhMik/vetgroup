export type CartItemType = {
  id: string | null;
  name: string | null;
  description: string | null;
  weight: number | null;
  price: number | null;
  image: string | null;
  qty: number | null;
  sale: number | null;
};

export type FilterType = {
  id: string;
  value: string;
};
