for (let i = 0; i <= 5; i++) {
    console.log(`Linha: ${i}`);
}

for (let i = 5; i >= 0; i--) {
    console.log(`Nova linha: ${i}`);
}

// Par ou ímpar
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par.`);
    } else {
        console.log(`${i} é ímpar.`);
    }
}

console.log();

const frutas = [ 'maçã', 'pera', 'uva', 'melancia' ];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta: ${frutas[i]}`);
}