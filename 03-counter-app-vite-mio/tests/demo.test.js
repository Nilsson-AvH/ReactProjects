describe('Pruebas en <DemoComponent />', () => { 

    /* Esto fue creado por mi para el primer test de jest, en la terminal >> yarn test*/
    test('Esta prueba no debe fallar',() => {
        
        /* if ( 1 === 0 ) {
            throw new Error('No puede dividir entre cero.');
        } */ 
        // Este tipos de pruebas no se va a realizar en Jest, ya que Jest nos ayuda con todo esto
        
        // 1. incializacion
        const message1 = 'Hello world  ';
    
        // 2. Estimulo
        const message2 = message1.trim(); // trim() borra espacios
    
        // 3. Observar el comportamiento... esperado
        // expect ( message1 ).toBe ( message2 );
        expect ( message1 ).toBe ( message2 );
    })
    /* Acá termina el codigo que le adicione para el primer test */

 })
