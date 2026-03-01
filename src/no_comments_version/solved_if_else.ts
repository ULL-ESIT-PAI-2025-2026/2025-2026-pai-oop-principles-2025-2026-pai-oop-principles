/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Érika Crespo Molero
 * @author César Navarro Santos
 * @author Javier Acosta Portocarrero
 * @since Feb 22 2026
 * @desc DRY code smell solved using a configurable class
 */

class ProductPricing {
  constructor(
    private readonly taxRate: number,
    private readonly discountThreshold: number,
    private readonly bulkDiscount: number,
    private readonly productName: string
  ) {}

  calculatePrice(quantity: number, basePrice: number): number {
    const subtotal = basePrice * quantity;
    const tax = subtotal * this.taxRate;
    const discount = quantity > this.discountThreshold ? this.bulkDiscount : 0;
    const total = subtotal + tax - subtotal * discount;
    console.log(`[${this.productName}] Subtotal: $${subtotal.toFixed(2)}, Tax: $${tax.toFixed(2)}, Discount: ${discount * 100}%`);
    return total;
  }
}

const pricingStrategies: Record<string, ProductPricing> = {
  book: new ProductPricing(0.04, 5, 0.05, 'Book'),
  electronics: new ProductPricing(0.21, 3, 0.10, 'Electronics'),
  clothing: new ProductPricing(0.10, 4, 0.15, 'Clothing'),
  food: new ProductPricing(0.02, 10, 0.08, 'Food'),
  furniture: new ProductPricing(0.15, 2, 0.12, 'Furniture'),
};

function calculateTotalPrice(productType: string, quantity: number, basePrice: number): number {
  const strategy = pricingStrategies[productType];
  if (!strategy) {
    throw new Error(`Unknown product type: ${productType}`);
  }
  return strategy.calculatePrice(quantity, basePrice);
}

function main(): void {
  try {
    console.log('--- DRY solution (configurable class) ---');
    console.log('Total:', calculateTotalPrice('book', 6, 15).toFixed(2));
    console.log('Total:', calculateTotalPrice('electronics', 4, 250).toFixed(2));
    console.log('Total:', calculateTotalPrice('clothing', 5, 40).toFixed(2));
    console.log('Total:', calculateTotalPrice('food', 12, 3).toFixed(2));
    console.log('Total:', calculateTotalPrice('furniture', 3, 120).toFixed(2));
  } catch (error) {
    console.error(error);
  }
}

main();