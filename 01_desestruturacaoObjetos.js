const pessoa = {
    nome: 'Filipe',
    sobrenome: 'Azoubel',
    idade: 30,
    endereco: {
        rua: 'Rua top',
        numero: 330
    }
}

// Atribuição via desestruturação
const { 
    nome, 
    endereco, 
    grana = 20, 
    endereco: { 
        rua: r = 'Rua existe agora', 
        numero: n 
    } 
} = pessoa;

console.log(nome);
console.log(endereco);
console.log(grana);
console.log(endereco);
console.log(r);
console.log(n);

const { sobrenome, ...resto } = pessoa;

console.log('\n________________\n');

console.log(sobrenome);
console.log(resto);