import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15); // normal variables will not be propagated to the ui.

  const increaseValue = () => {
    setCounter(prev => prev + 1)
  }

  const decreaseValue = () => {
    if(counter > 0) {
      setCounter(prev => prev - 1)
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={increaseValue}
        >Increase Counter</button>
      <br />
      <button
        onClick={decreaseValue}x
        >Decrease Counter</button>
    </>
  )
}

export default App
