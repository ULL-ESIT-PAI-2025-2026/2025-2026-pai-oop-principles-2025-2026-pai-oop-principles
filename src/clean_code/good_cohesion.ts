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
 * @desc Refactored example following Single Responsibility Principle.
 *       Responsibilities are split into UserService (data access) and UserNotifier (notifications).
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
 * Service responsible for user-related data operations.
 * Handles fetching user information and transactions.
 */
class UserService {
  /**
   * Creates an instance of UserService.
   * @param db - Database dependency for accessing user and transaction data.
   */
  constructor(private readonly db: Database) {
  }

  /**
   * Retrieves a user by ID.
   * @param id - The user's unique identifier.
   * @returns A promise that resolves to the user object.
   */
  async getUser(id: number): Promise<User> {
    return await this.db.users.findOne({ id });
  }

  /**
   * Retrieves transactions associated with a user.
   * @param userId - The user's ID.
   * @returns A promise that resolves to an array of transactions.
   */
  async getTransactions(userId: number): Promise<Transaction[]> {
    return await this.db.transactions.find({ userId });
  }
}

/**
 * Service responsible for sending notifications to users.
 * Handles various types of email communications.
 */
class UserNotifier {
  /**
   * Creates an instance of UserNotifier.
   * @param emailSender - EmailSender dependency for sending emails.
   */
  constructor(private readonly emailSender: EmailSender) {
  }

  /**
   * Sends a generic greeting email.
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