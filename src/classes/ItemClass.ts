import { ProductType } from "@/utils/Types";

export class Item implements ProductType {
  name: string;
  code: string;
  image: { url: string } | null;
  price: number;
  description: string;
  qty: number;
  totalPrice: number;
  __typename: string;
  category: { title: string };

  constructor(item: ProductType, qty: number | null) {
    this.name = item.name;
    this.code = item.code;
    this.price = item.price;
    this.description = item.description;
    this.qty = qty ? qty : 1;
    this.totalPrice = 0;
    this.image = item.image ? item.image : null;
    this.__typename = item.__typename;
    this.category = item.category;
  }

  getId(): string {
    return this.code;
  }

  getDescription(): string {
    return this.description;
  }
  getImage(): string | null {
    return this.image ? this.image.url : null;
  }

  getTitle(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getQty(): number {
    return this.qty;
  }

  setQty(value: number): void {
    this.qty = value;
  }

  setTotal(): void {
    this.totalPrice = this.getPrice() * this.getQty();
  }

  getTotalPrice(): number {
    return this.totalPrice * this.getQty();
  }
  formatPrice(value: number): string {
    if (isNaN(value)) return "0,00";

    const stringPrice = value;
    return stringPrice
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}
