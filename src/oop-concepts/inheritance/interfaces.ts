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
 * @desc Interfaces to avoid inheritance
 *
 */

/**
 * Contract for anything that has the capability to fly.
 */
interface Flyable {
  fly(): void;
}

/**
 * Contract for anything that has the capability to swim.
 */
interface Swimmable {
  swim(): void;
}

/**
 * A Duck is an animal that can both fly and swim.
 */
class Duck implements Flyable, Swimmable {
  public fly(): void {
    console.log('The duck flaps its wings and flies over the lake.');
  }

  public swim(): void {
    console.log('The duck floats peacefully on the water.');
  }
}

/**
 * A Penguin is a bird, but it can only swim, not fly.
 */
class Penguin implements Swimmable {
  public swim(): void {
    console.log('The penguin dives and swims extremely fast');
  }
}

/**
 * An Airplane is completely unrelated to animals, but it can fly.
 */
class Airplane implements Flyable {
  public fly(): void {
    console.log('The airplane takes off using its jet engines.');
  }
}

/**
 * Main function to demonstrate the power of capability interfaces.
 */
function main(): void {
  const donald = new Duck();
  const pingu = new Penguin();
  const boeing747 = new Airplane();
  console.log('Duck');
  donald.fly();
  donald.swim();
  console.log('\nPenguin');
  pingu.swim();
  console.log('\nAirplane');
  boeing747.fly();
}

main();