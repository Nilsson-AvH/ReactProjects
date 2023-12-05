

/* Esto fue creado por mi para el primer test de jest, en la terminal >> yarn test*/
test('Esta prueba no debe fallar',() => {
    if ( 1 === 0 ) {
        throw new Error('No puede dividir entre cero.');
    } 

})
/* Acá termina el codigo que le adicione para el primer test */