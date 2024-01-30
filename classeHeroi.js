function classeHeroi() { // define a classe do heroi de forma aleatoria.
    const classe = ['Mago', 'Guerreiro', 'Monge', 'Ninja'];
    const classeAleatoria = Math.floor(Math.random() * classe.length);
    const classeEscolhida = classe[classeAleatoria];
    return classeEscolhida;
}

function armaHeroi(classeEscolhida) {  // Usamos um laço de repetição para definir a arma do heroi, utilizando o retorno da função classeHeroi.
    let armasEscolhida;
    if (classeEscolhida === 'Mago') {
        armasEscolhida = 'Magia';
    } else if (classeEscolhida === 'Guerreiro') {
        armasEscolhida = 'Espada';
    } else if (classeEscolhida === 'Monge') {
        armasEscolhida = 'Artes Marciais';
    } else {
        armasEscolhida = 'Shuriken';
    }
    return armasEscolhida;
}

class heroi {  
    constructor(nome) {
        this.nome = nome;
        this.tipo = classeHeroi();
        this.arma = armaHeroi(this.tipo); // Passando a classe escolhida como argumento
    }
    imprima() {
        console.log(`O heroi ${this.nome} que é da classe ${this.tipo} atacou com ${this.arma}`);
    }
}

let personagemHeroi = new heroi('DevKing');
personagemHeroi.imprima();