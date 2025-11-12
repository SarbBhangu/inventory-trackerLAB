import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";

const phone = new PhysicalProduct("A0316", "Phone", 1000, 0.4);
const dumbbell = new PhysicalProduct("A0317", "Dumbbell", 49, 10);
const ebook = new DigitalProduct("A0318", "Fitness Ebook", 29, 20);

const inventory = [phone, dumbbell, ebook];

for (const item of inventory) {
    console.log(item.displayDetails());
    console.log("Final price:", item.getPriceWithTax());
}






