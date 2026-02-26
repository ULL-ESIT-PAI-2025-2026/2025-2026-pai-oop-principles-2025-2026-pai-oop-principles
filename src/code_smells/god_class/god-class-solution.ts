/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Erika Crespo Molero
 * @author César Navarro Santos
 * @author Javier Acosta Portocarrero
 * @since Feb 26 2026
 * @desc Refactored version avoiding the God Class code smell and using encapsulation.
 */

/**
 * Represents user data with encapsulation.
 */
class User {
  private name: string;
  private age: number;
  private email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(newEmail: string): void {
    this.email = newEmail;
  }
}

/**
 * Validates user information.
 */
class UserValidator {
  /** Checks if a user object has valid data. */
  public isValid(user: User): boolean {
    return user.getAge() > 0 && user.getEmail().includes('@');
  }
}

/**
 * Handles loading and saving user data to files.
 */
class UserLoader {
  private fileSystem = require('fs');

  /** Saves a user to the specified file. */
  public save(user: User, filePath: string): void {
    const data = `${user.getName()},${user.getAge()},${user.getEmail()}`;
    this.fileSystem.writeFileSync(filePath, data);
  }

  /** Loads a user from the specified file. */
  public load(filePath: string): User {
    const data = this.fileSystem.readFileSync(filePath, 'utf-8').split(',');
    return new User(data[0], Number(data[1]), data[2]);
  }
}

/**
 * Handles user presentation.
 */
class UserPrinter {
  /** Prints user information to console. */
  public print(user: User): void {
    console.log(
      `Name: ${user.getName()}, Age: ${user.getAge()}, Email: ${user.getEmail()}`
    );
  }
}

// Usage examples: 
function main() {
  const user = new User('Alice', 28, 'alice@example.com');

  const validator = new UserValidator();
  console.log('Is valid:', validator.isValid(user));

  const loader = new UserLoader();
  const filePath = './user.txt';
  loader.save(user, filePath);
  const loadedUser = loader.load(filePath);

  const printer = new UserPrinter();
  printer.print(loadedUser);

  // Example of updating email via setter
  loadedUser.setEmail('alice.new@example.com');
  printer.print(loadedUser);
}

main();