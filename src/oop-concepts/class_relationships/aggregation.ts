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
 * @desc Association example between Team and Player
 */

/**
 * Represents a player with a name.
 */
class Player {
  /**
   * Creates a Player instance.
   * @param name - The player's name. Automatically assigned as a private property.
   */
  constructor(private name: string) {
    this.name = name;
  }
}

/**
 * Represents a team that can have multiple players.
 */
class Team {
  private players: Player[] = [];

  /**
   * Adds a player to the team.
   * @param player - The player to be added.
   */
  addPlayer(player: Player): void {
    this.players.push(player);
  }
}

/**
 * Main function that runs the association example.
 * Creates players and a team, then adds the players to the team.
 * Demonstrates that Player objects can exist independently of the Team.
 */
function main(): void {
  const playerJohn = new Player("John");
  const playerJane = new Player("Jane");
  const team = new Team();
  team.addPlayer(playerJohn);
  team.addPlayer(playerJane);
  // The players can exist independently of the team
  // (team goes out of scope after main ends, players persist if referenced elsewhere)
}

main();