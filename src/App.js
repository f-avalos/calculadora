import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val)
  }

  const resultado = () => {
    if(evaluate(input) === Infinity) {
      setInput('ERROR')
    }else if (input) {
      setInput(evaluate(input))
      console.log(evaluate(input))
    }
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla
          input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={resultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClick={() => setInput('')}>Reset</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
