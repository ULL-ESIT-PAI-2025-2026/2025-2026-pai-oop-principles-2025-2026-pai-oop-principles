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
 * @desc Don't use this in static methods
 */

/**
 * Represents a shoe store with static storage.
 */
class ShoeStore {
  /** Static storage for the store. */
  static storage: Storage = new Storage(/* ... */);

  /**
   * Checks if a shoe is available in the store's storage.
   * @param shoe - The shoe to check.
   * @returns `true` if the shoe exists in storage, `false` otherwise.
   */
  static isAvailable(shoe: Shoe): boolean {
    // Incorrect: using 'this' in a static method.
    // It depends on the class from which it is called.
    return this.storage.has(shoe.id);
  }
}

/**
 * Empty store that inherits from ShoeStore and overrides storage.
 */
class EmptyShoeStore extends ShoeStore {
  /** Empty storage (overrides the base class storage). */
  static storage: Storage = new EmptyStorage();
}
