import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe('Test del archivo 08-imp-exp.js', () => { 
    test('getHeroeByID debe retornar un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById( id );

        console.log(hero);
     })
 })