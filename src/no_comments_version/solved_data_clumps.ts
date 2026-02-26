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
 * @desc Data clumps code smell solved
 */

class Address {
  private readonly street: string;
  private readonly city: string;
  private readonly zipCode: string;

  constructor(street: string, city: string, zipCode: string) {
    if (!street || !city || !zipCode) {
      throw new Error('All address fields are required');
    }
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }

  getStreet(): string {
    return this.street;
  }

  getCity(): string {
    return this.city;
  }

  getZipCode(): string {
    return this.zipCode;
  }

  getDisplayAddress(): string {
    return `${this.street}, ${this.city} (${this.zipCode})`;
  }

  getCoordinates(): { lat: number; lng: number } {
    // In a real app, this could call a geocoding service.
    return { lat: 37.7749, lng: -122.4194 }; // Example coordinates
  }
}

function registerCustomer(name: string, email: string, address: Address): void {
  console.log(`Customer ${name} registered with address: ${address.getDisplayAddress()}`);
}

function createOrder(customerId: number, products: string[], address: Address): void {
  console.log(`Order for customer ${customerId} shipped to: ${address.getDisplayAddress()}`);
}

function calculateShippingCost(address: Address, weight: number): number {
  console.log(`Cost for: ${address.getDisplayAddress()}`);
  // Use address coordinates for more precise calculation (example)
  const coords = address.getCoordinates();
  console.log(`  (Using coordinates: ${coords.lat}, ${coords.lng})`);
  return weight * 0.5;
}

function main(): void {
  try {
    const address = new Address('123 Main St', 'Springfield', '12345');
    registerCustomer('John Doe', 'john@example.com', address);
    createOrder(1, ['laptop', 'mouse'], address);
    const cost = calculateShippingCost(address, 2.5);
    console.log(`Total shipping cost: $${cost}`);
  } catch (error) {
    console.error(error);
  }
}

main();