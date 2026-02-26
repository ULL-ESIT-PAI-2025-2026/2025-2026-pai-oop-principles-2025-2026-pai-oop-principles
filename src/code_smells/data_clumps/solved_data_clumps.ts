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

/**
 * Class representing a postal address.
 * Encapsulates address fields with private attributes and provides accessors
 * as well as behavior like formatting and validation.
 */
class Address {
  private readonly street: string;
  private readonly city: string;
  private readonly zipCode: string;

  /**
   * Creates an Address instance.
   * @param street - Street of the address.
   * @param city - City of the address.
   * @param zipCode - Zip code of the address.
   * @throws Error if any field is empty.
   */
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

  /**
   * Returns a nicely formatted display version of the address.
   * @returns Formatted string, e.g., "123 Main St, Springfield (12345)".
   */
  getDisplayAddress(): string {
    return `${this.street}, ${this.city} (${this.zipCode})`;
  }

  /**
   * Simulates a more complex operation, like fetching geolocation coordinates.
   * @returns A mock latitude/longitude object.
   */
  getCoordinates(): { lat: number; lng: number } {
    // In a real app, this could call a geocoding service.
    return { lat: 37.7749, lng: -122.4194 }; // Example coordinates
  }
}

/**
 * Registers a new customer in the system.
 * @param name - Customer's full name.
 * @param email - Customer's email address.
 * @param address - Address object with shipping details.
 */
function registerCustomer(name: string, email: string, address: Address): void {
  console.log(`Customer ${name} registered with address: ${address.getDisplayAddress()}`);
}

/**
 * Creates a new order for an existing customer.
 * @param customerId - Unique identifier of the customer.
 * @param products - List of products included in the order.
 * @param address - Address object with shipping details.
 */
function createOrder(customerId: number, products: string[], address: Address): void {
  console.log(`Order for customer ${customerId} shipped to: ${address.getDisplayAddress()}`);
}

/**
 * Calculates shipping cost based on address and package weight.
 * @param address - Address object with shipping details.
 * @param weight - Weight of the package in kilograms.
 * @returns The calculated shipping cost.
 */
function calculateShippingCost(address: Address, weight: number): number {
  console.log(`Cost for: ${address.getDisplayAddress()}`);
  // Use address coordinates for more precise calculation (example)
  const coords = address.getCoordinates();
  console.log(`  (Using coordinates: ${coords.lat}, ${coords.lng})`);
  return weight * 0.5;
}

/**
 * Main function to demonstrate the refactored version.
 */
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