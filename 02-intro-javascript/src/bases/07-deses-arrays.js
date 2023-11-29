//Desestructuraicon de Arrays
//Asignacion desestructurante de arrays

const personajes = ['Goku','Vegueta','Trunks'];

const [ , , p] = personajes;
console.log(p);
/*
// Forma clasica de extraer los elementos del array
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
*/

const retornaArray = () =>{
    return ['ABC', 123]
}

const [letras, numeros] = retornaArray();
console.log(letras, numeros)

// Tarea

const retState = (valor) => {
    return [valor, ()=>{ console.log('Hello world')}];
}

const [ nombre, getNombre ] = retState ('Goku');

console.log(nombre);
getNombre();