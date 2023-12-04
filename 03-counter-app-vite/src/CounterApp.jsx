import { useState } from 'react'
import PropTypes from 'prop-types'
 

export const CounterApp = ({value}) => {
  
  // function handleAdd(event, newString) {
  //   console.log(event)
  //   console.log(newString)
  // }

  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => {
    // console.log(event)
    setCounter( counter + 1 )
  }

  const handleMinus = () => {
    setCounter(counter - 1 )
  }

  const handleReset = () =>{
    /* setCounter = value */
    setCounter(value)
  }
  
  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        {/* <button onClick={ (event) => handleAdd(event, 'Hola mundos') } > (event) => handleAdd(event) */}
        <button onClick={ handleAdd } > + 1 </button>
        <button onClick={ handleMinus } > - 1 </button>
        <button onClick={ handleReset } > Reset </button>

    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}