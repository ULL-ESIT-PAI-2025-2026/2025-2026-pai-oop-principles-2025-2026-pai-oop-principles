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
 * @desc Example of a non-KISS design with unnecessary complexity.
 */

/**
 * Represents a shape that tries to handle every possible concern.
 * This class violates KISS and SRP.
 */
export class ComplexShape {
    private width: number;
    private height: number;
    private color: string;
    private creationDate: Date;
  
    constructor(width: number, height: number, color: string) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.creationDate = new Date();
    }
  
    /** Calculates the area of the shape. */
    public calculateArea(): number {
      return this.width * this.height;
    }
  
    /** Calculates the perimeter of the shape. */
    public calculatePerimeter(): number {
      return 2 * (this.width + this.height);
    }
  
    /** Changes the color of the shape. */
    public changeColor(color: string): void {
      this.color = color;
    }
  
    /** Scales the shape dimensions. */
    public scale(factor: number): void {
      this.width *= factor;
      this.height *= factor;
    }
  
    /** Returns creation metadata. */
    public getMetadata(): string {
      return `Created at ${this.creationDate.toISOString()}`;
    }
  
    /** Unused functionality added just in case. */
    public exportAsXML(): string {
      return `<shape width="${this.width}" height="${this.height}" color="${this.color}"/>`;
    }
  
    /** Another unused feature. */
    public clone(): ComplexShape {
      return new ComplexShape(this.width, this.height, this.color);
    }
  }