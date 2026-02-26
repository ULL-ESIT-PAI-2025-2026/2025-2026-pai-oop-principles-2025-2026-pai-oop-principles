/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * @author Érika Crespo Molero
 * @author César Navarro Santos
 * @author Javier Acosta Portocarrero
 * @since Feb 22 2026
 * @desc Bringing private out of the class (Module-scoped helpers)
 */

/**
 * Calculates the total amount including tax.
 * * @param amount The base price.
 * @param taxRate The tax percentage
 * @returns The final price.
 */
function calculateTax(amount: number, taxRate: number): number {
  return amount + (amount * taxRate);
}

/**
 * Formats a raw number into a currency string.
 * * @param amount The number to format.
 * @returns A formatted string like "10.5€".
 */
function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

/**
 * Represents a shopping cart that handles user items.
 */
export class ShoppingCart {
  private items: number[] = [];
  
  addItem(price: number): void {
    this.items.push(price);
  }

  getReceipt(taxRate: number): string {
    const subtotal = 20; // Some logic here
    const finalPrice = calculateTax(subtotal, taxRate);
    return `Receipt Total: ${formatCurrency(finalPrice)}`;
  }
}