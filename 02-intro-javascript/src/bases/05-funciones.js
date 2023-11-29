// Funciones en JavaScript

const saludar = function ( nombre ){
    return `Hola, ${nombre}.`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}.`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}.`;

const saludar4 = () => `Hola, Chaos.`;

const getUser = () => ({
    uid: 'ASD123',
    username: 'El_Nino123',
})

console.log(saludar ('Goku'));
console.log(saludar2('Veguetta'));
console.log(saludar3('Yamcha'));
console.log(saludar4());

const user = getUser();
console.log(user);

// Homework
//1. Transtormar a una funcion de flecha
//2. Tienen que retornar un objeto implicito
//3. Pruebas

function getUsuarioActivo(nombre){
    return {
        uid: 'ABC123',
        username: nombre,
    }
};

const usuarioActivo = getUsuarioActivo('Nilson');
console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) => ({
    uid: 'QWE123',
    username: nombre,
})

console.log(getUsuarioActivo2('Nicho'));