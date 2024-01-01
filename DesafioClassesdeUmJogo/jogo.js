// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
  
      // Determinando o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque genérico';
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi
  const heroiMago = new Heroi('Merlin', 100, 'mago');
  const heroiGuerreiro = new Heroi('Arthur', 30, 'guerreiro');
  const heroiMonge = new Heroi('Li', 35, 'monge');
  const heroiNinja = new Heroi('Hanzo', 25, 'ninja');
  
  // Realizando os ataques
  heroiMago.atacar();
  heroiGuerreiro.atacar();
  heroiMonge.atacar();
  heroiNinja.atacar();
  