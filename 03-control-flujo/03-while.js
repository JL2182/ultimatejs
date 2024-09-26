// Existen 5 tipos de loops en JavaScript
// 1. while
// 2. do while
// 3. for
// 4. for in
// 5. for of

// 1. while
// El bucle while se repite mientras la condición sea verdadera

// Cuales son los números pares.
let i = 0;
while (i < 10) {
    if (i % 2 == 0) {
        console.log('Numero par', i);

    }
    i++;
}

console.log('Fuera del while')