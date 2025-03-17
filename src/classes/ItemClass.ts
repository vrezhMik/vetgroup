import { ProductType } from "@/utils/Types";

// export class Item {
//   private currentItem: ProductType;

//   constructor(item: ProductType) {
//     this.currentItem = item;
//     this.currentItem.qty = 1;
//     this.currentItem.totalPrice = 0;
//   }

//   getId(): string {
//     if (this.isEmpty()) return "";
//     return this.currentItem.code;
//   }

//   getTitle(): string {
//     if (this.isEmpty()) return "";

//     return this.currentItem.name;
//   }

//   getPrice(): number {
//     if (this.isEmpty()) return 0;
//     return this.currentItem.price * this.getQty();
//   }

//   getQty(): number {
//     if (this.isEmpty()) {
//       console.log("Empty Qty");
//       return 1;
//     }
//     return this.currentItem.qty;
//   }

//   setQty(value: number): void {
//     if (this.isEmpty()) return;
//     this.currentItem.qty = value;
//   }

//   isEmpty(): boolean {
//     if (this.currentItem) return false;
//     return true;
//   }

// getDescription(): string {
//   if (this.isEmpty()) return "";
//   return this.currentItem.description;
// }

//   setTotal(): void {
//     if (this.isEmpty()) return;
//     const finalPrice = this.getPrice();
//     this.currentItem.totalPrice = finalPrice * this.getQty();
//   }

//   getTotalPrice(): number {
//     if (this.isEmpty()) return 0;
//     return this.getQty() * this.getPrice();
//   }
//   // getImage(): string {
//   //   if (this.isEmpty()) return "";
//   //   return this.currentItem.image;
//   // }

//   // getSalePercentage(): number {
//   //   if (this.isEmpty()) return 0;
//   //   return this.currentItem.salePrcentage;
//   // }

//   // getSalePrice(): number {
//   //   if (this.isEmpty()) return 0;
//   //   this.setSalePrice();
//   //   return this.currentItem.saledPrice;
//   // }

//   // hasSale(): boolean {
//   //   if (this.isEmpty()) return false;
//   //   return this.currentItem.salePrcentage > 0;
//   // }

//   // setSalePrice(): void {
//   //   if ( this.isEmpty()) return;
//   //   this.currentItem.saledPrice =
//   //     this.currentItem.price -
//   //     (this.currentItem.price * this.currentItem.salePrcentage) / 100;
//   // }

//   // getWeight(): number {
//   //   if (this.isEmpty()) return 0;

//   //   return this.currentItem?.weight;
//   // }
// }
export class Item implements ProductType {
  name: string;
  code: string;
  image: string;
  price: number;
  description: string;
  qty: number;
  totalPrice: number;

  constructor(item: ProductType) {
    this.name = item.name;
    this.code = item.code;
    this.price = item.price;
    this.description = item.description;
    this.qty = 1;
    this.totalPrice = 0;
    this.image = item.image;
  }

  getId(): string {
    return this.code;
  }

  getDescription(): string {
    return this.description;
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
