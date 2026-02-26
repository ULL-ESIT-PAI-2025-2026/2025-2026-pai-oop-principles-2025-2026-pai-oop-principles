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
 * @desc Example of a class that isn't cohesive.
 */

/**
 * Represents a database service (assumed external dependency).
 */
class Database {
  // Mock implementation for illustration
  users = {
    findOne: async (query: any) => ({ id: query.id, name: 'John' })
  };
  transactions = {
    find: async (query: any) => []
  };
}

/**
 * Represents an email sending service (assumed external dependency).
 */
class EmailSender {
  async send(text: string): Promise<void> {
    console.log(`Sending email: ${text}`);
  }
}

/**
 * Manages user-related operations and notifications.
 * @description This class combines multiple responsibilities: retrieving user data,
 * fetching transactions, and sending various emails. This violates the Single Responsibility
 * Principle, making the class harder to maintain and test.
 */
class UserManager {
  /**
   * Creates an instance of UserManager.
   * @param database - Dependency for database operations.
   * @param emailSender - Dependency for sending emails.
   */
  constructor(
    private readonly database: Database,
    private readonly emailSender: EmailSender) {
  }

  /**
   * Retrieves a user by ID.
   * @param id - The user's unique identifier.
   * @returns A promise that resolves to the user object.
   */
  async getUser(id: number): Promise<User> {
    // Note: 'User' type is not defined here; assume it exists.
    return await this.database.users.findOne({ id });
  }

  /**
   * Retrieves transactions associated with a user.
   * @param userId - The user's ID.
   * @returns A promise that resolves to an array of transactions.
   */
  async getTransactions(userId: number): Promise<Transaction[]> {
    // Note: 'Transaction' type is not defined; assume it exists.
    return await this.database.transactions.find({ userId });
  }

  /**
   * Sends a generic greeting email to the user.
   * @returns A promise that resolves when the email is sent.
   */
  async sendGreeting(): Promise<void> {
    await this.emailSender.send('Welcome!');
  }

  /**
   * Sends a custom notification email.
   * @param text - The content of the notification.
   * @returns A promise that resolves when the email is sent.
   */
  async sendNotification(text: string): Promise<void> {
    await this.emailSender.send(text);
  }

  /**
   * Sends a newsletter email (implementation omitted).
   * @returns A promise that resolves when the newsletter is sent.
   */
  async sendNewsletter(): Promise<void> {
    // ... implementation
  }
}

type User = { id: number; name: string };
type Transaction = any;