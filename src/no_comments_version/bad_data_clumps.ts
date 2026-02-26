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

function registerCustomer(name: string, street: string, city: string, zipCode: string): void {
  if (!street || !city || !zipCode) {
    throw new Error('Incomplete address');
  }
  console.log(`Customer ${name} registered with address: ${street}, ${city}, ${zipCode}`);
}

function createOrder(customerId: number, street: string, city: string,zipCode: string): void {
  if (!street || !city || !zipCode) {
    throw new Error('Incomplete address');
  }
  console.log(`Order for customer ${customerId} shipped to: ${street}, ${city}, ${zipCode}`);
}

function calculateShippingCost(street: string, city: string, zipCode: string, weight: number): number {
  if (!street || !city || !zipCode) {
    throw new Error('Incomplete address');
  }
  console.log(`Cost for: ${street}, ${city}, ${zipCode}`);
  return weight * 0.5; 
}

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