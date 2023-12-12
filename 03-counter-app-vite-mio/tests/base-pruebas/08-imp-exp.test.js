import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";
import myFilter from "../../src/data/heroes";


describe('Test del archivo 08-imp-exp.js', () => { 
    test('getHeroeByID debe retornar un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById( id );

        // console.log(hero);

        expect ( hero ).toEqual({id:1, name:'Batman', owner: 'DC'});
     })
     test('getHeroeByID debe retornar undefined si ID no existe', () => { 

        const id = 100;
        const hero = getHeroeById( id );

        // console.log(hero);

        expect ( hero ).toBeFalsy();
     })
     // tarea: getHeroesByOwner
     test('Debe retornar un arreglo con los heroes de DC', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        console.log(heroes);

        expect (heroes.length).toBe(3);
        expect (heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner));
      })
      test('Debe retornar un arreglo con los heroes de Marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        console.log(heroes);

        expect (heroes.length).toBe(2);
        expect (heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner));
      })
 })