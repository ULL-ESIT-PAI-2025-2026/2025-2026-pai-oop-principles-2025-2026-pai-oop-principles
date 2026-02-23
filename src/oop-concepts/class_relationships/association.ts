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
 * @desc Assotiation (Patient and Doctor)
 */

class Patient {
  private firstName: string;
  private lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Doctor {
  private lastName: string;
  constructor(lastName: string) {
    this.lastName = lastName;
  }
  diagnose(patient: Patient): string {
    return `Dr. ${this.lastName} is diagnosing ${patient.getFullName()}`;
  }
}

function main(): void {
  const ada = new Patient('Ada', 'Lovelace');
  const smith = new Doctor('Smith');
  console.log(smith.diagnose(ada));
};

main();