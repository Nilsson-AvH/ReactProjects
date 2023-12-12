import PropTypes  from 'prop-types'
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
  

const FirstApp = ( { title, subTitle, name } ) => {
  
  //console.log ( props )
  
    /* if ( !title ) {
      throw new Error('El title no existe.');
    } */
    // Para evitar colocar todo este codigo (el if) se usan las PropTypes en este caso para validar que no exista un titulo.

    return (        
        <> {/* Esta es la abreviación de Fragment: <></> */}

        <h1> { title } </h1>

        <code> { JSON.stringify( getResult() ) } </code>

        {/* el JSON.stringify() me ayuda a imprimir una funcion en este caso con multiples 
        "cosas"  dentro y el <code></code> es simplemtente para que se vea mas bonito,
        facilmente puede ir un <h1></h1> o un <p></p>*/}

        <p> { subTitle } </p>
        <p> { name } </p>
        
        </>

    )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired, //este PropTypes me indica que title deber ser string y es requerido y/o/u obligatorio
  subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  // title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Nilson LoRito',
}

export default FirstApp