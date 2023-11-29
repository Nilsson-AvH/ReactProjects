//Desestructuración
//Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

const {clave, nombre:nombre2, edad, } = persona;

console.log(nombre2);
console.log(edad);
console.log(clave);

const retornaPersona = ({nombre, edad, rango='capitan'}) => {
    console.log(nombre, edad, rango);

}

const retContext = ({nombre, clave, edad, rango='capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1257,
            lng: -12.5486,
        }
    }
    
}

// Main method

retornaPersona(persona);

const {nombreClave, anios, latlng:{lat,lng}} = retContext(persona);
console.log(nombreClave, anios);
console.log(lat,lng);