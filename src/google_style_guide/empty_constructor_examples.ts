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
 * @desc Ilustrates when to use or not use empty constructors.
 */

/**
 * Unnecessary constructor.
 * TypeScript will generate this constructor automatically.
 */
class UnnecessaryConstructor {
  constructor() {}
}

/**
 * Unnecessary override.
 * This constructor only delegates to the parent constructor
 * without adding any new behavior.TypeScript automatically generates this 
 * constructor if not provided.
 */
class UnnecessaryConstructorOverride extends Base {
  constructor(value: number) {
    super(value);
  }
}

// Bellows examples illustrate cases where an empty constructor is necessary and must be kept:

/**
 * Default constructor is implicitly provided by ES2015.
 * This is equivalent to an empty constructor.
 */
class DefaultConstructor {
}

/**
 * Constructor must be kept.
 * Parameter property defines and initializes a class attribute,
 * defining its visibility.
 */
class ParameterProperties {
  constructor(private myService) {}
}

/**
 * Constructor must be kept.
 * Parameter decorator introduces side effects at construction time.
 */
class ParameterDecorators {
  constructor(@SideEffectDecorator myService) {}
}

/**
 * Constructor must be kept.
 * Private constructor prevents external instantiation.
 */
class NoInstantiation {
  private constructor() {}
}