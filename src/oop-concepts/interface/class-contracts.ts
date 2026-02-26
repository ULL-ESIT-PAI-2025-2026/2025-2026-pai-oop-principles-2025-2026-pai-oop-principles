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
 * @desc Interface: class contracts and multiple interfaces
 *
 */

/**
 * Defines the contract for entities that have printing capabilities.
 */
interface Printable {
  print(): void;
}

/**
 * Defines the contract for entities that have scanning capabilities.
 */
interface Scannable {
  scan(): void;
}

/**
 * Represents a multifunction printer.
 * It combines both printing and scanning capabilities into a single device.
 */
class MultiFunctionDevice implements Printable, Scannable {
  public print(): void {
    console.log('Printing high-quality document...');
  }

  public scan(): void {
    console.log('Scanning document to PDF...');
  }
}