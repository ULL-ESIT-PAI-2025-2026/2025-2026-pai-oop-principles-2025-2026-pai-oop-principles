/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Erika Crespo Molero
 * @author César Navarro Santos
 * @author Javier Acosta Portocarrero
 * @since Feb 22 2026
 * @desc Composition (Car and Engine)
 */

class Engine {
  start(): string {
    return "Engine started.";
  }
}

class Car {
  private engine: Engine;
  constructor() {
    this.engine = new Engine();
  }
  startCar(): string {
    return this.engine.start();
  }
}

function main(): void {
  const car = new Car();
  console.log(car.startCar());  
  // When the Car object is destroyed (goes out of scope), the Engine is also destroyed.
}

main();