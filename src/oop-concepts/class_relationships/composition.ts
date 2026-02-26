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
 * @desc Composition example between Car and Engine
 */

/**
 * Represents an engine that can be started.
 */
class Engine {
  /**
   * Starts the engine.
   * @returns A message indicating the engine has started.
   */
  start(): string {
    return "Engine started.";
  }
}

/**
 * Represents a car composed of an engine.
 * The engine is created when the car is instantiated and is destroyed
 * when the car is destroyed (composition relationship).
 */
class Car {
  private engine: Engine;

  /**
   * Creates a Car instance and instantiates its engine.
   */
  constructor() {
    this.engine = new Engine();
  }

  /**
   * Starts the car by starting its engine.
   * @returns The result of starting the engine.
   */
  startCar(): string {
    return this.engine.start();
  }
}

/**
 * Main function that runs the composition example.
 * Creates a car and starts it, demonstrating that the engine's lifecycle
 * is tied to the car's lifecycle.
 */
function main(): void {
  const car = new Car();
  console.log(car.startCar());  
  // When the Car object is destroyed (goes out of scope), the Engine is also destroyed.
}

main();