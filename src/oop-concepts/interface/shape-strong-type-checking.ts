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
 * @desc Interface: shape and strong typing
 *
 */

// Define the "shape"
interface UserProfile {
  username: string;
  age: number;
}

// Apply strong typing to the object
const activeUser: UserProfile = {
  username: 'Jose',
  age: 21
  //`role: "admin"` error.
};