import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Prueba del archivo FirstApp.jsx', () => { 
    test('Debe hacer match con el snapshot', () => { 
        const title = 'Hola soy goku';
        render( < FirstApp title={title} /> )
     })
 })