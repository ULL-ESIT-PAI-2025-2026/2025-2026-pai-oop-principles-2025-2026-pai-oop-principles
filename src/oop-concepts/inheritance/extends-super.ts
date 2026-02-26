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
 * @desc Inhiterance example using animals
 *
 */

/**
 * Represents a generic animal.
 * Serves as a base class for creating more specific types of animals.
 */
class Animal {
  constructor(protected age: number) {}
}

/**
 * Represents a dog, which is a specific type of Animal.
 */
class Dog extends Animal {
  constructor(age: number, private breed: string) {
    super(age);
  }
}