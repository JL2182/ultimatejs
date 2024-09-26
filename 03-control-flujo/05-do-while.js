// Números pares

let i = 2;
// while (i < 2) {
//     if (i % 2 == 0) {
//         console.log('Número par', i);
//     }
//     i++;
// }

do {
    if (i % 2 == 0) {
        console.log('Número par', i);
    }
    i++;
} while (i < 2);

console.log('Fuera del while');

// La diferencia entre while y do while, es que while evalua primero si se cumple la condición y  luego ejecuta el código, mientras que do while ejecuta el código y luego evalua si se cumple la condición.