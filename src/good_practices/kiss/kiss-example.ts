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
 * @desc Example of a KISS-oriented OOP design.
 */

/**
 * Represents a rectangle with only necessary behavior.
 */
export class Rectangle {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    /** Returns the area of the rectangle. */
    public area(): number {
      return this.width * this.height;
    }
  
    /** Returns the perimeter of the rectangle. */
    public perimeter(): number {
      return 2 * (this.width + this.height);
    }
  }