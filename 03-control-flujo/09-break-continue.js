// Existen momentos en los que se desean detener la ejecución de algún loop.
// Break nos permite salirnos del loop y continue nos permite saltarnos una iteracción.
// Se puede utilizar para  controlar el flujo de un loop (for, for in, for of , while y do while)


let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue; //  Salta la iteración actual y continua con la siguiente (no se ejecuta esta operación)

    }
    if (i === 4) {
        break; // Detiene  la ejecución del loop y sale del mismo.

    }
    console.log(i);
}
