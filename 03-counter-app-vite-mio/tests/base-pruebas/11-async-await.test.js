import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Test del archivo 11-async-await.js', () => { 
    test('getImage debe retornar url de la imagen', async() => { 
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
     })
 })