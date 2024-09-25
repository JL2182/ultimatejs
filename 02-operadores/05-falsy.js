// Short-circuit

// Falso
// false
// 0
//  "" (empty string)
// null
// undefined
// NaN (Not a Number)
// Infinity
// 0.0 (zero with decimal point)
// -0.0 (negative zero with decimal point)

let nombre = 'Chanchito Feliz';
let username = nombre || 'Anonimo';
console.log(username); // Anonimo   

function fn1() {
    console.log('soy funcion 1');
    return true;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();
