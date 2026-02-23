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
 * @desc Association (Team and Player)
 */

class Player {
  constructor(private name: string) {
    this.name = name;
  }
}

class Team {
  private players: Player[] = [];
  addPlayer(player: Player): void {
    this.players.push(player);
  }
}

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