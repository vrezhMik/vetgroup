import { CartItemType } from "@/utils/Types";

class Cart {
  items: CartItemType[];
  count: number;
  constructor() {
    this.items = [];
    this.count = 0;
  }

  addItem(item: any): void {
    this.items.push(item);
    this.count++;
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter((item) => itemId != item.id);
    this.count--;
  }

  total(): number {
    return this.count;
  }
}
