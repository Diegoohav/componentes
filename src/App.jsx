import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Titulo } from './components/Titulo'
import { Resultado } from './components/Resultado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo titulo={"Titulo de pagina"}/>
      <Resultado numeroa={5} numerob={7}/>
    </>
  )
}

export default App
