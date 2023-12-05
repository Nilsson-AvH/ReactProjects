import { useState } from "react"
import PropTypes from "prop-types"

export const CounterApp = ({value}) => {

    const [counter,setCounter] = useState( value );

    const handleMas = () => {
        setCounter(counter+1)
    } 
    
    const handleMenos = () => {
        setCounter(counter-1)
    }
    
    const handleReset = () => {
        setCounter(value)
    }

  return (
    <>
    <h1>CounterApp by NAvH</h1>
    <h1>{counter}</h1>
    <button onClick={handleMas}> + 1 </button>
    <button onClick={handleMenos}> - 1 </button>
    <button onClick={handleReset}> Reset </button>

    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}