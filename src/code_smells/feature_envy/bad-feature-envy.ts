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
 * @desc Feature Envy example
 *
 */

/**
 * Represents the physical address.
 * It just holds data, but does no work.
 */
class Address {
  constructor(public street: string, public city: string, public zipCode: string) {}
}

/**
 * BAD: The User class suffers from Feature Envy.
 */
class User {
  constructor(public name: string, public address: Address) {}

  getShippingLabel(): string {
    const street = this.address.street;
    const city = this.address.city;
    const zip = this.address.zipCode;
    
    return `Ship to: ${this.name}\n${street}\n${city}, ${zip}`;
  }
}