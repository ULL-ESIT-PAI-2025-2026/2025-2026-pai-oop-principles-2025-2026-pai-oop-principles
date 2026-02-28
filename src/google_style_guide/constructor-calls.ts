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
 * @desc Demonstrates why constructor calls must always use parentheses.
 */

/** Helper class used to illustrate constructor invocation. */
class Foo {
  constructor() {
    console.log('Foo constructor called');
  }

  /** Example instance method. */
  bar(): void {
    console.log('Foo.bar() called');
  }

  /**
   * Static nested class-like property.
   * Used to demonstrate ambiguous `new` behavior.
   */
  static Bar = class {
    constructor() {
      console.log('Foo.Bar constructor called');
    }
  };
}

/** Entry point of the program. */
function main(): void {
  console.log('Correct constructor call:');
  const foo1 = new Foo();
  foo1.bar();
  
  console.log('\nConstructor call without parentheses:');
  // This works, but is discouraged and unclear.
  const foo2 = new Foo;
  foo2.bar();

  console.log('\nAmbiguous constructor call (BUG):');
  // This does NOT create a Foo instance.
  // It creates an instance of Foo.Bar instead.
  new Foo.Bar();

  console.log('\nCorrect and explicit behavior:');
  new Foo().bar();
}

main();