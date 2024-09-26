// Nos sirve para iterar las propiedades de un objeto.
let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

// ANtiguamente se utilizaba el for in loop; sin embargo se recomienda utilizar el for of.

let animales = ['Chanchito feliz', 'Dragón', 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}