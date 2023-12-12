import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Test para el archivo 07-deses-arr.js', () => { 
    test('Debe devolver un string & number.', () => { 
        const [letters,numbers] = retornaArreglo();

        console.log(typeof letters)
        console.log(typeof numbers)

        // expect (typeof letters).toBe('string')
        // expect (typeof numbers).toBe('number')

        expect (letters).toEqual(expect.any(String));
        expect (numbers).toEqual(expect.any(Number));
     })
 })