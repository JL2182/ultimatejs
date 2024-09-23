/*
Lapiz
    Color
    Longitud
    Fabricante
    Peso
*/

// Personaje de TV
let nombre = 'Tanjiro';
let anime = 'Demon Slayer';
let edad = 16;

// Objetos
let personaje = {
    nombre: 'Tanjiro', // Par llave - Valor.
    anime: 'Demon Slayer',
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

personaje['edad'] = 16;

delete personaje.anime;
console.log(personaje); // No se puede eliminar un objeto de un objeto.