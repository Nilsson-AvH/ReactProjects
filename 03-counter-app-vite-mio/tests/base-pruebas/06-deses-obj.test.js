import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Este test prueba el archivo 06-deses-obj.js', () => { 
    test('usContext debe devolver un ebjeto', () => { 
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const superHero = usContext(persona);

        console.log(superHero);

        expect ( superHero ).toEqual ( {
            nombreClave: persona.clave,
            anios: persona.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }} );
     })
 })