// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Nilson'
// }

const getResult = () => {
  return ({
    // <div>FirstApp</div>
    message: 'Hola Mundo',
    title: 'El gato',
    text: 'internal test text',
  })
}


const FirstApp = ( { title, subTitle } ) => {
    
    //console.log ( props )

    // No es recomentable que este valor este dentro de este functional component
    // es mejor sacarlo aunque eso no significa que vaya a ser un valor dentro del scope global,
    // por que el queda encapsulado dentro de FirstApp.jsx

    return (

        
        <> {/* Esta es la abreviación de Fragment: <></> */}

            <h1> { title } </h1>

            {/* <code>First App by { JSON.stringify( newMessage ) } </code> */}

            <code> { JSON.stringify( getResult() ) } </code> 

            {/* el JSON.stringify() me ayuda a imprimir una funcion en este caso con multiples 
            "cosas"  dentro y el <code></code> es simplemtente para que se vea mas bonito,
            facilmente puede ir un <h1></h1> o un <p></p>*/}

            <p> { subTitle + 7 } </p>
        </>
    )
}

export default FirstApp