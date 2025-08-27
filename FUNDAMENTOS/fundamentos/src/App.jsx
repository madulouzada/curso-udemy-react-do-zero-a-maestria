//importando components
import FirstComponents from "./components/FirstComponents"
//faço a importação usando o nome da const que criei no FirstComponente from a pasta onde esta meu componente

import { useState } from 'react'

//styles / css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1>Fundamentos React</h1>
    <FirstComponents /> 
    </div>
  )
}

export default App
