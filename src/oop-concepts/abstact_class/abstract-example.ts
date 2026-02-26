/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * @author Érika Crespo Molero
 * @author César Navarro Santos
 * @author Javier Acosta Portocarrero
 * @since Feb 22 2026
 * @desc Abstract Classes Example
 */

/**
 * Base abstract class representing a generic Employee.
 * You cannot instantiate this class directly.
 */
abstract class Employee {
  constructor(protected name: string, protected id: string) {}

  public displayInfo(): void {
    console.log(`[ID: ${this.id}] Name: ${this.name}`);
  }

  public abstract calculateSalary(): number;
}

/**
 * A concrete class representing a Full-Time Employee.
 */
class FullTimeEmployee extends Employee {
  constructor(name: string, id: string, private monthlySalary: number) {
    super(name, id);
  }

  public override calculateSalary(): number {
    return this.monthlySalary;
  }
}

/**
 * A concrete class representing a Freelance.
 */
class HourlyEmployee extends Employee {
  constructor(name: string, id: string, private hourlyRate: number, private hoursWorked: number) {
    super(name, id);
  }

  public override calculateSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

/**
 * Main function to demonstrate Abstract Classes.
 */
function main(): void {
  const alice = new FullTimeEmployee('Alice Smith', 'EMP-001', 3000);
  const bob = new HourlyEmployee('Bob Johnson', 'EMP-002', 20, 120);
  console.log('Employee Payroll');
  const companyEmployees: Employee[] = [alice, bob];
  for (const employee of companyEmployees) {
    employee.displayInfo(); 
    console.log(`Salary this month: $${employee.calculateSalary()}\n`);
  }
}

main();