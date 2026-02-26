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
 * @desc Independent geometric utility functions.
 */

/**
 * Calculates the area of a rectangle.
 * @param width Rectangle width.
 * @param height Rectangle height.
 * @return The area of the rectangle.
 */
function calculateRectangleArea(width: number, height: number): number {
  return width * height;
}

/**
 * Calculates the perimeter of a rectangle.
 * @param width Rectangle width.
 * @param height Rectangle height.
 * @return The perimeter of the rectangle.
 */
function calculateRectanglePerimeter(width: number, height: number): number {
  return 2 * (width + height);
}