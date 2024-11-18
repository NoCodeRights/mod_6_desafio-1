const { registrar, leer } = require('./operaciones');


const argumentos = process.argv.slice(2);

if (argumentos[0] === 'registrar') {
    if (argumentos.length > 6) {
        console.log('Error. Demasiados argumentos.');
        process.exit();
    }
    else if (argumentos.length < 6) {
        console.log('Error. Faltan argumentos.');
        process.exit();
    }
    else if (argumentos.length === 6) {
        registrar(argumentos);
    }
} else if (argumentos[0] === 'leer') {
    leer();
} else {
    console.log('Opción no válida.');
    process.exit();
}