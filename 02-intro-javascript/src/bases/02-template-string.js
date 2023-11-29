const nombre = 'Nilson';
const apellido = 'Lopez';

// Getter and Setter methods

function getSaludo(nombre){
    return('Hola ' + nombre)
}

//const nombreCompleto = nombre + ' ' + apellido ;
const nombreCompleto = `${nombre} ${apellido}`; // Lo que esta dentro de las llaves es codigo JavaScript

const nombreOperaciones = `
${nombre}
${apellido}
${1+1}
`;

console.log(nombreCompleto);
console.log(nombreOperaciones);
console.log(`Este es un texto: ${getSaludo(nombre)}`);