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
 * @desc Composition over Inheritance
 *
 */

/**
 * Defines the contract for all sound-producing behaviors.
 * Any specific sound implementation must adhere to this interface.
 */
interface SoundBehavior {
  makeSound(): void;
}

/**
 * Implements the sound behavior specifically for animals that bark, such as dogs.
 */
class BarkBehavior implements SoundBehavior {
  public makeSound(): void {
    console.log('barks: Woof! Woof!');
  }
}

/**
 * Implements the sound behavior specifically for animals that roar, such as lions.
 */
class RoarBehavior implements SoundBehavior {
  public makeSound(): void {
    console.log('roars loudly: ROAR!');
  }
}

/**
 * Represents an animal entity that uses composition to perform sounds.
 * Instead of inheriting a sound, it delegates the action to an injected behavior.
 * * @param name  The name or identifier of the animal.
 * @param soundBehavior  The specific sound strategy assigned to this instance.
 */
class Animal {
  constructor(private name: string, private soundBehavior: SoundBehavior) {}
  
  public performSound(): void {
    console.log(`[${this.name}]`); 
    this.soundBehavior.makeSound();
  }
}

/**
 * Main function to initialize the objects and run the composition example.
 */
function main(): void {
  const bark: BarkBehavior = new BarkBehavior();
  const roar: RoarBehavior = new RoarBehavior();
  const myDog: Animal = new Animal("Firulais", bark);
  const myLion: Animal = new Animal("Simba", roar);
  myDog.performSound();
  myLion.performSound();
}

main();