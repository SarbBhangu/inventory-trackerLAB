import { Product } from "./Product.js";

export class PhysicalProduct extends Product {
    weight: number;

    constructor(sku:string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    override getPriceWithTax(): number {
        const taxRate = 0.10;
        return this.price + this.price * taxRate;
    }

    get formattedWeight(): string {
    return `${this.weight} kg`
    }

    override displayDetails(): string {
    return `${super.displayDetails()} | Weight: ${this.formattedWeight}`;
  }
}