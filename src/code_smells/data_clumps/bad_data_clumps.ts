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
 * @desc Data clumps code smell
 */

/**
 * Registers a new customer in the system.
 * @param name - Customer's full name.
 * @param street - Street of the shipping address.
 * @param city - City of the shipping address.
 * @param zipCode - Zip code of the shipping address.
 */
function registerCustomer(name: string, street: string, city: string, zipCode: string): void {
  if (!street || !city || !zipCode) {
    throw new Error('Incomplete address');
  }
  console.log(`Customer ${name} registered with address: ${street}, ${city}, ${zipCode}`);
}

/**
 * Creates a new order for an existing customer.
 * @param customerId - Unique identifier of the customer.
 * @param street - Street of the shipping address.
 * @param city - City of the shipping address.
 * @param zipCode - Zip code of the shipping address.
 */
function createOrder(customerId: number, street: string, city: string,zipCode: string): void {
  if (!street || !city || !zipCode) {
    throw new Error('Incomplete address');
  }
  console.log(`Order for customer ${customerId} shipped to: ${street}, ${city}, ${zipCode}`);
}

/**
 * Calculates shipping cost based on address and package weight.
 * @param street - Street of the shipping address.
 * @param city - City of the shipping address.
 * @param zipCode - Zip code of the shipping address.
 * @param weight - Weight of the package in kilograms.
 * @returns The calculated shipping cost.
 */
function calculateShippingCost(street: string, city: string, zipCode: string, weight: number): number {
  if (!street || !city || !zipCode) {
    throw new Error('Incomplete address');
  }
  console.log(`Cost for: ${street}, ${city}, ${zipCode}`);
  return weight * 0.5; 
}

/**
 * Main function to demonstrate the code smell.
 */
function main(): void {
  try {
    registerCustomer('John Doe', 'john@example.com', '123 Main St', 'Springfield', '12345');
    createOrder(1, ['laptop', 'mouse'], '123 Main St', 'Springfield', '12345');
    const cost = calculateShippingCost('123 Main St', 'Springfield', '12345', 2.5);
    console.log(`Shipping cost: $${cost}`);
  } catch (error) {
    console.error(error);
  }
}

main();