import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Test para 05-funciones.js', () => { 
    test('getUser debe retornar un objeto ', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        // console.log(testUser, user);

        expect ( testUser ).toEqual ( user );
     })
     test('getUsuarioActivo debe retornar un objeto', () => { 
        const name = 'Nilson';
        const user = getUsuarioActivo(name);

        expect ( user ).toEqual( {
            uid: 'ABC567',
            username: name,
        } );
      })
 })