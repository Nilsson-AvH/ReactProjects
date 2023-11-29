const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 5546865,
        lat: 14.3344,
        lng: 34.34544,
    }
};

const persona2 = {...persona};
persona2.nombre = "Peter";
persona2.edad = 25;

console.log( persona );
console.log( persona2 );
/*console.log({
    persona:persona
});*/
