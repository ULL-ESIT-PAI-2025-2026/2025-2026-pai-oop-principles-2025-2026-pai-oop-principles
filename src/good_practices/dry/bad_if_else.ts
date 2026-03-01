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
 * @desc DRY code smell violation - long chain of repetitive if-else blocks
 */

/**
 * Calculates total price based on product type, quantity and base price.
 * Each product type has its own tax rate and bulk discount logic,
 * but the structure is repeated in every branch.
 *
 * @param productType - Type of product ('book', 'electronics', 'clothing', 'food', 'furniture').
 * @param quantity - Number of units.
 * @param basePrice - Price per unit.
 * @returns Total price after tax and discount.
 * @throws Error for unknown product type.
 */
function calculateTotalPrice(productType: string, quantity: number, basePrice: number): number {
  const subtotal = basePrice * quantity;
  let taxRate: number;
  let discountThreshold: number;
  let bulkDiscount: number;
  let total: number;
  if (productType === 'book') {
    taxRate = 0.04;
    discountThreshold = 5;
    bulkDiscount = 0.05;
    const tax = subtotal * taxRate;
    const discount = quantity > discountThreshold ? bulkDiscount : 0;
    total = subtotal + tax - subtotal * discount;
    console.log(`[Book] Subtotal: $${subtotal.toFixed(2)}, Tax: $${tax.toFixed(2)}, Discount: ${discount * 100}%`);
  } else if (productType === 'electronics') {
    taxRate = 0.21;
    discountThreshold = 3;
    bulkDiscount = 0.10;
    const tax = subtotal * taxRate;
    const discount = quantity > discountThreshold ? bulkDiscount : 0;
    total = subtotal + tax - subtotal * discount;
    console.log(`[Electronics] Subtotal: $${subtotal.toFixed(2)}, Tax: $${tax.toFixed(2)}, Discount: ${discount * 100}%`);
  } else if (productType === 'clothing') {
    taxRate = 0.10;
    discountThreshold = 4;
    bulkDiscount = 0.15;
    const tax = subtotal * taxRate;
    const discount = quantity > discountThreshold ? bulkDiscount : 0;
    total = subtotal + tax - subtotal * discount;
    console.log(`[Clothing] Subtotal: $${subtotal.toFixed(2)}, Tax: $${tax.toFixed(2)}, Discount: ${discount * 100}%`);
  } else if (productType === 'food') {
    taxRate = 0.02;
    discountThreshold = 10;
    bulkDiscount = 0.08;
    const tax = subtotal * taxRate;
    const discount = quantity > discountThreshold ? bulkDiscount : 0;
    total = subtotal + tax - subtotal * discount;
    console.log(`[Food] Subtotal: $${subtotal.toFixed(2)}, Tax: $${tax.toFixed(2)}, Discount: ${discount * 100}%`);
  } else if (productType === 'furniture') {
    taxRate = 0.15;
    discountThreshold = 2;
    bulkDiscount = 0.12;
    const tax = subtotal * taxRate;
    const discount = quantity > discountThreshold ? bulkDiscount : 0;
    total = subtotal + tax - subtotal * discount;
    console.log(`[Furniture] Subtotal: $${subtotal.toFixed(2)}, Tax: $${tax.toFixed(2)}, Discount: ${discount * 100}%`);
  } else {
    throw new Error(`Unknown product type: ${productType}`);
  }
  return total;
}

/**
 * Main function demonstrating the violation of DRY.
 */
function main(): void {
  try {
    console.log('--- Violation of DRY (many else-if) ---');
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