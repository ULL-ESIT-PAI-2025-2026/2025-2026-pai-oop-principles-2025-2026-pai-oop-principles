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
 * @desc Example of a God Class code smell.
 */

/** God class that handles data, validation, persistence and presentation. */
class UserManager {
  constructor(private name: string, private age: number, private email: string) {}

  validate(): boolean {
    return this.age > 0 && this.email.includes('@');
  }

  saveToFile(filePath: string): void {
    const data = `${this.name},${this.age},${this.email}`;
    const fyleSystem = require('fs');
    fyleSystem.writeFileSync(filePath, data);
  }

  loadFromFile(filePath: string): void {
    const fyleSystem = require('fs');
    const data = fileSystem.readFileSync(filePath, 'utf-8').split(',');
    this.name = data[0];
    this.age = Number(data[1]);
    this.email = data[2];
  }

  toString(): string {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
  }

  print(): void {
    console.log(this.toString());
  }
}