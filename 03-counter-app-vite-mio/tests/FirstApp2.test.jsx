import { getAllByAltText, getAllByText, render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Prueba del archivo FirstApp.jsx', () => { 
   
  const title = 'Hola soy Goku';
  const subTitle = 'Hola soy un subtitulo.';

    test('Debe hacer match con el snapshot.', () => { 
        const {container} = render( <FirstApp title={title} /> );
        // console.log(container);
        expect(container).toMatchSnapshot();
     })

     test('Debe mostrar el mensaje "Hola soy Goku"', () => {
      
       render( <FirstApp title={title}/> );
       expect(screen.getAllByText(title)).toBeTruthy();
       
      //  screen.debug();
      })
    test('Debe mostrar el titulo en un h1', () => { 
      render( <FirstApp title={title}/> );
      console.log( screen.getByRole('heading',{level:1}).innerHTML );
      expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
     })

     test('Debe mostrar el subtitulo enviado por props.', () => { 
      render( < FirstApp title={title} subTitle={subTitle} /> );
      expect( screen.getAllByText(subTitle).length ).toBe(1);

      })
    
 })