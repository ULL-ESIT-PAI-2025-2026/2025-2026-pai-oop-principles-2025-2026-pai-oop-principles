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
 * @desc Association example between Patient and Doctor
 */

/**
 * Represents a patient with first and last name.
 */
class Patient {
  private firstName: string;
  private lastName: string;

  /**
   * Creates a Patient instance.
   * @param firstName - Patient's first name.
   * @param lastName - Patient's last name.
   */
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Returns the patient's full name.
   * @returns Full name formatted as "FirstName LastName".
   */
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

/**
 * Represents a doctor who can diagnose patients.
 */
class Doctor {
  private lastName: string;

  /**
   * Creates a Doctor instance.
   * @param lastName - Doctor's last name (used as "Dr. LastName").
   */
  constructor(lastName: string) {
    this.lastName = lastName;
  }

  /**
   * Performs a diagnosis on a given patient.
   * @param patient - The patient to be diagnosed.
   * @returns A message indicating the doctor is diagnosing the patient.
   */
  diagnose(patient: Patient): string {
    return `Dr. ${this.lastName} is diagnosing ${patient.getFullName()}`;
  }
}

/**
 * Main function that runs the association example.
 * Creates a patient and a doctor, and logs the diagnosis to the console.
 */
function main(): void {
  const ada = new Patient('Ada', 'Lovelace');
  const smith = new Doctor('Smith');
  console.log(smith.diagnose(ada));
}

main();