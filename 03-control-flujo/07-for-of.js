// Loop muy parecido al loop for, sin embargo es una herramienta un poco más simple.

let animales = ['Chanchito feliz', 'Dragón', 'Perrito'];

for (let animal of animales) {
    console.log(animal);
}


// Se puede obtener el mismo resultado utilizando el loop while.
let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}