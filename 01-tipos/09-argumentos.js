function suma(a, b) { //Cunado referenciamos los valores dentro de las funciones, se llaman parametros. Las funciones pueden recibir multiples argumentos y parametros. 
    return a + b;
}

let resultado = suma(5, 6); // los valores que les pasamos a las funciones cuando las llamamos, se llaman argumentos (5).
console.log(resultado);
console.log(typeof suma);


/** 
 * Expressions = Expresiones
 * Declarations = Declaración (de manera oral)
 * Statement = Declaración (de manera escrita)
 * 
 * En JavaScript se llama declaration cuando vas a crear algo que vas a referenciar en el futuro:
 *
 *  Declaration
 *  let (variable)
 *  const (constante)
 *  function
 *  function*
 *  async function
 *  async funtion*
 *  class
 *  export / import
 * 
 * Statements
 *  if
 *  for
 *  else
 *  switch
 *
 * Expression (cada vez que el código hace algo y puedes obtener u valor, estamos ante una expresión)
 *  4 + 6 = 10
 *  x = 4
 *  mi funcion()
 * 
 * Si no se puede hacer un console.log es una declaración. pero si en cambio te permite, es una expresion.
 *  como por ejemplo:
 *  console.log(let)
 *  console.log(const)
 *  console.log(for)
 *  console.log(it)
 * 
 * Operadoree
 * NOs sirven para crear expresiones y con estas finalmente crear algoritmos para solucionar problemas.
 * Se estudiaran los operadores:
 *  Aritméticos
 *  Asignación
 *  Comparación
 *  Lógicos
 *  Bitwise
 */