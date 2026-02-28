/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * @author Érika Crespo Molero
 * @author César Navarro Santos
 * @author Javier Acosta Portocarrero
 * @since Feb 22 2026
 * @desc Decoupling and Minimum Visibility Example (Bad example)
 */

/**
 * Bad expample. Maximum visibility
 */
class BadCoffeeMachine {
  waterTemperature: number = 20; 

  heatWater(): void {
    this.waterTemperature = 90;
    console.log('Heating water...');
  }

  grindBeans(): void {
    console.log('Grinding beans...');
  }

  makeCoffee(): void {
    this.heatWater();
    this.grindBeans();
    console.log('Coffee is ready!');
  }
}