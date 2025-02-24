import { useState } from 'react'
import './App.css'
import { Titulo } from './components/Titulo'
import { Resultado } from './components/Resultado'
import { TituloAlternativo } from './components/TituloAternativo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TituloAlternativo condicion={true} />
      <Resultado numeroa={5} numerob={7}/>
    </>
  )
}

export default App
