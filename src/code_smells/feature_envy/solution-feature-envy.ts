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
 * @desc Solution to Feature Envy
 *
 */

/**
 * GOOD: The Address class now manages its own data.
 */
class Address {
  constructor(private street: string, private city: string, private zipCode: string) {}

  getFormattedAddress(): string {
    return `${this.street}\n${this.city}, ${this.zipCode}`;
  }
}

/**
 * GOOD: The User class no longer envies the Address class.
 */
class User {
  constructor(private name: string, private address: Address) {}

  getShippingLabel(): string {
    return `Ship to: ${this.name}\n${this.address.getFormattedAddress()}`;
  }
}