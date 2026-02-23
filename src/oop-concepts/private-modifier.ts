/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Erika Crespo Molero
 * @author César Navarro Santos
 * @author Javier Acosta Portocarrero
 * @since Feb 22 2026
 * @desc Shows how the private access modifier works.
 */

/**
 * Represents a simple user with private data.
 */
class PrivateUser {
  /**
   * User name.
   * Accessible only inside the class.
   */
  private name: string;

  /**
   * Creates a new User instance.
   * @param name The name of the user.
   */
  constructor(name: string) {
    // Accessed from inside the class.
    this.name = name;
  }

  /**
   * Public method that provides controlled access
   * to the private property.
   * @return A greeting string.
   */
  public greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

/**
  * Entry point of the program.
  * Demonstrates access to private class members.
  */
function main() {
  // Public methods can be accessed from outside the class.
  const user = new PrivateUser('Alice');
  // console.log(user.name); // Not allowed: private access
  console.log(user.greet()); // Allowed
}

main();