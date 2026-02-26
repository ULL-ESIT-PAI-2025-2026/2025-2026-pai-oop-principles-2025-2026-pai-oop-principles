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
 * @desc Shows how the protected access modifier works.
 */

/**
 * Represents a base user with protected data.
 */
class ProtectedUser {
  /**
   * User name.
   * Accessible inside the class and its subclasses.
   */
  protected name: string;
  
  /**
   * Creates a new User instance.
   * @param name The name of the user.
   */
  constructor(name: string) {
    // Accessed from inside the class.
    this.name = name;
  }
}
  
/**
 * Represents an admin user.
 */
class Admin extends ProtectedUser {
  /**
   * Creates a new Admin instance (not a necessary constructor but makes 
   * the example easier to understand).
   * @param name The name of the admin.
   */
  constructor(name: string) {
    super(name);
  }
  
  /**
   * Public method that accesses a protected property
   * from the parent class.
   * @return A string identifying the admin.
   */
  public getRole(): string {
    return `Admin: ${this.name}`;
  }
}
  
/**
  * Entry point of the program.
  * Demonstrates access to protected class members.
  */
function main() {
  // Protected members are accessible through subclass methods.
  const admin = new Admin('Bob');
  // console.log(admin.name); // Not allowed: protected access
  console.log(admin.getRole()); // Allowed
}
  
main();