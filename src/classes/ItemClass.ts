import { CartItemType } from "@/utils/Types";

export class Item {
  private currentItem: CartItemType | null;

  constructor(item: CartItemType | null) {
    this.currentItem = item;
  }

  getTitle(): string | null {
    return this.currentItem?.name || null;
  }

  getWeight(): number | null {
    return this.currentItem?.weight || null;
  }

  getPrice(): number | null {
    return this.currentItem?.price || null;
  }

  getDescription(): string | null {
    return this.currentItem?.description || null;
  }

  getImage(): string | null {
    return this.currentItem?.image || null;
  }
}
