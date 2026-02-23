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
 * @desc Shows how the public access modifier works.
 */

/**
 * Represents a simple user with publicly accessible data.
 */
class User {
  /**
   * User name.
   * Public by default (just for the example), accessible 
   * both inside and outside the class.
   */
  name: string;
    
  /**
   * Creates a new User instance.
   * @param name The name of the user.
   */
  constructor(name: string) {
    // Accessed from inside the class.
    this.name = name;
  }
  
  /**
   * Public method that returns a greeting message.
   * @return A greeting string.
   */
  public greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}
  
/**
  * Entry point of the program.
  * Demonstrates access to public class members.
  */
function main() {
  // Public members can be accessed from outside the class.
  const user = new User('Alice');
  console.log(user.name);     // Allowed
  console.log(user.greet());  // Also allowed
}

main();