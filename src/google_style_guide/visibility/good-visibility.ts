/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * @author Érika Crespo Molero
 * @author César Navarro Santos
 * @author Javier Acosta Portocarrero
 * @since Feb 22 2026
 * @desc Decoupling and Minimum Visibility Example
 */

/**
 * Good example of minimum visibility
 */
class GoodCoffeeMachine {
  private waterTemperature: number = 20;

  makeCoffee(): void {
    console.log('Starting coffee proces');
    this.heatWater();
    this.grindBeans();
    console.log('Here is your coffee!\n');
  }

  private heatWater(): void {
    this.waterTemperature = 90;
    console.log(`[Internal] Water heated to ${this.waterTemperature}°C`);
  }

  private grindBeans(): void {
    console.log('[Internal] Grinding premium coffee beans...');
  }
}