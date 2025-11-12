import { Product } from "../models/Product.js";

export function calculateTax(product: Product): number {
  const taxRate = 0.1;
  return product.price * taxRate;  
}
