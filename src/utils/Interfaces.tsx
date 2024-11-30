export interface ImagePropsInterface {
  url: string;
  alt: string;
}

export interface ProductPropsInterface {
  data: {
    name: string;
    weight: number;
    price: number;
    image: string;
    qty: number;
    sale: number;
  };
}
