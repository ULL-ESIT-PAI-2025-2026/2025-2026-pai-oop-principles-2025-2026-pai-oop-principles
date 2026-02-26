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
 * @desc Polymorphism Example
 *
 */

/**
 * Base abstract class representing a generic geometric Shape.
 * It only serves as a blueprint for specific shapes.
 */
abstract class Shape {
  constructor(protected name: string) {}
  
  public abstract calculateArea(): number;

  public getName(): string {
    return this.name;
  }
}

/**
 * Represents a specific Circle entity.
 */
class Circle extends Shape {
  constructor(private radius: number) {
    super('Circle');
  }

  public override calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

/**
 * Represents a specific Rectangle entity.
 */
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super('Rectangle');
  }

  public override calculateArea(): number {
    return this.width * this.height;
  }
}

/**
 * Main function to demonstrate Polymorphism.
 */
function main(): void {
  const myShapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Circle(10)
  ];
  console.log("Calculating Areas Polymorphically");
  for (const shape of myShapes) {
    console.log(`The area of the ${shape.getName()} is ${shape.calculateArea().toFixed(2)}`);
  }
}

main();