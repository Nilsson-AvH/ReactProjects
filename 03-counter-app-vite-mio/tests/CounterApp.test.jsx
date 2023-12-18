import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas del archivo CounterApp.jsx', () => {

    const initialValue = 123;

    // test('Debe hacer Match con en Snapshot', () => { 
    //     const {containter} = render( <CounterApp value={ initialValue } /> );
    //     expect(containter).toMatchSnapshot();
    //  });
       
    test('Debe mostrar el valor inicial de 100 <CounterApp value = {100}/> ', () => { 
        render(< CounterApp  value={ initialValue } />);
        expect( screen.getByText(123) ).toBeTruthy(); 
     });

    test('Debe incrementar con el boton +1', () => { 
        render(< CounterApp  value={ initialValue } />);
        fireEvent.click( screen.getByText('+ 1') )
        expect( screen.getAllByText( '124' ) ).toBeTruthy()
    })
    test('Debe decrementar con el boton -1', () => { 
        render(< CounterApp  value={ initialValue } />);
        fireEvent.click( screen.getByText('- 1') )
        // screen.debug()
        expect( screen.getAllByText( '122' ) ).toBeTruthy()
    })
    test('Debe funcionar el boton de reset', () => { 
        render( <CounterApp value={ initialValue }/> )
        fireEvent.click( screen.getByText('+ 1') )
        fireEvent.click( screen.getByText('+ 1') )
        fireEvent.click( screen.getByText('+ 1') )
        fireEvent.click( screen.getByText('Reset') )
        screen.debug()
        fireEvent.click(screen.getByRole( 'button', {name: 'btn-reset'} ))
        expect( screen.getAllByText( '123' ) ).toBeTruthy()

     })
})