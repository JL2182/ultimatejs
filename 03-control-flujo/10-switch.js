let accion = 'actualizar';

switch (accion) {
    case 'listar':
        console.log('Acción de listar');
        break; // Siempre despues de utilizar un case,  se debe utilizar un break para evitar que se ejecute el siguiente case.

    case 'Guardar':
        console.log('Acción de guardar');
        break;
    default:
        console.log('Acción no reconocida');
}