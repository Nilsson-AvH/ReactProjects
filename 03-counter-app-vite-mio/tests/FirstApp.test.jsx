import { getAllByAltText, getAllByText, render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Prueba del archivo FirstApp.jsx', () => { 
    // test('Debe hacer match con el snapshot', () => { 
    //     const title = 'Hola soy Krillin muriendose.';
    //     render( < FirstApp title={title} /> )

    //     const { container } =  render ( < FirstApp title={title} /> );
    //     console.log( container );

    //     expect(container).toMatchSnapshot()
    //  })
     test('Debe mostrar el titulo en un h1', () => { 
        const title = 'Hola soy Krillin muriendose.';
        const { container, getByText, getByTestId } =  render ( < FirstApp title={title} /> );
        expect( getByText( title ) ).toBeTruthy();

        // expect( getByTestId( 'test-title' )).toBeTruthy()
        // expect( getByTestId( 'test-title' ).innerHTML).toBe(title)
        expect( getByTestId( 'test-title' ).innerHTML).toContain(title)

      })
      test('Debe mostrar el subtitulo enviado por prost', () => { 
        const title = 'Hola soy Krillin muriendose.';
        const subTitle = 'Hola soy un subtitulo.';
        console.log(subTitle.length);
        const { getAllByText } =  render ( < FirstApp title={title} subTitle={subTitle} /> );
        // expect( getByText( subTitle ) ).toBeTruthy(); //Verificar que subTitle exista
        expect( getAllByText(subTitle).length ).toBe(1);

       })
    
 })