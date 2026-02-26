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
 * @desc Interface: Function types
 *
 */

// Interface describing a mathematical function 
// (takes two numbers as arguments and returns a number)
interface MathOperation {
  (firstNumber: number, secondNumber: number): number;
}

const add: MathOperation = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber; // Valid
};

const isGreater: MathOperation = (firstNumber, secondNumber) => {
  // return x > y; // Error: The contract expects a 'number' return type, not a 'boolean'.
  return firstNumber > secondNumber ? 1 : 0; //Valid
};