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
 * @desc Method overriding examples
 *
 */

/**
 * Base class defining generic behavior.
 */
class Animal {
  constructor(protected name: string) {}
  
  public makeSound(): void {
    console.log(`${this.name} is making a generic sound...`);
  }
}

/**
 * Derived class that COMPLETELY REPLACES the behavior.
 */
class Dog extends Animal {
  public override makeSound(): void {
    console.log(`${this.name} barks: Woof! Woof!`);
  }
}

/**
 * Derived class that EXTENDS the parent's behavior.
 */
class Lion extends Animal {
  public override makeSound(): void {
    super.makeSound(); 
    console.log('...and roars loudly: ROAR!');
  }
}

/**
 * Main function that initializes the objects and uses them to 
 * demonstrate the example.
 */
function main() {
  const myDog = new Dog('Firulais');
  const myLion = new Lion('Simba');
  console.log('Dog (method overriding)');
  myDog.makeSound(); 
  console.log('\nLion (super and method overriding)');
  myLion.makeSound();
}

main();