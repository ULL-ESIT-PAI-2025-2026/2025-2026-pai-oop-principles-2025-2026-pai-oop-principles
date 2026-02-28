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
  private creationDate: Date;

  constructor(private width: number, private height: number, private color: string) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.creationDate = new Date();
  }
  
  calculateArea(): number {
    return this.width * this.height;
  }
  
  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
  
  changeColor(color: string): void {
    this.color = color;
  }
  
  scale(factor: number): void {
    this.width *= factor;
    this.height *= factor;
  }
  
  getMetadata(): string {
    return `Created at ${this.creationDate.toISOString()}`;
  }
  
  exportAsXML(): string {
    return `<shape width="${this.width}" height="${this.height}" color="${this.color}"/>`;
  }
  
  clone(): ComplexShape {
    return new ComplexShape(this.width, this.height, this.color);
  }
  
  /**
   * Very complex method that changes color, scales, calculates area & perimeter,
   * returns metadata + XML export, all in one.
   */
  complexOperation(newColor: string, scaleFactor: number): string {
    // Change color
    this.color = newColor;
    // Scale dimensions
    this.width *= scaleFactor;
    this.height *= scaleFactor;
    // Calculate metrics
    const area = this.width * this.height;
    const perimeter = 2 * (this.width + this.height);
    // Compose a detailed result string
    const metadata = `Created at ${this.creationDate.toISOString()}`;
    const xml = `<shape width="${this.width}" height="${this.height}" color="${this.color}"/>`;
    return `Complex Operation Result:
            - Color: ${this.color} 
            - Width: ${this.width}, Height: ${this.height}
            - Area: ${area}, Perimeter: ${perimeter}
            - Metadata: ${metadata}
            - XML: ${xml}`;
  }
}