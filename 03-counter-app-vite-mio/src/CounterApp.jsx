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
    <h2>{counter}</h2>
    <button onClick={handleMas}> + 1 </button>
    <button onClick={handleMenos}> - 1 </button>
    <button aria-label="btn-reset" onClick={handleReset}> Reset </button>

    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}

// export default CounterApp;