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
 * @desc Demonstrates encapsulation and abstraction with a rectangle example.
 */

/** Represents a rectangle. */
class Rectangle {
  // Internal state (width and height) is encapsulated and not directly accessible from outside.
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  // External Interface:
  getArea(): number {
    return this.calculateArea();
  }

  getPerimeter(): number {
    return this.calculatePerimeter();
  }

  // Internal Interface:
  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function main(): void {
  const rectangle = new Rectangle(5, 3);
  console.log(rectangle.getArea());
  console.log(rectangle.getPerimeter());
  // rectangle.width; Not accessible
  // rectangle.calculateArea(); Not accessible
}

main();