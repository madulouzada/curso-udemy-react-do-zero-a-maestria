//importando components
import FirstComponents from "./components/FirstComponents"
import TemplateExpressions from "./components/TemplateExpressions"
import Events from "./components/Events"
import Challenge from "./components/Challenge"

import { useState } from 'react'

//styles / css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> {/*Adiciono a classe que será estilizada*/}
      <h1>Fundamentos React</h1> {/*Passando o H1 da pagina*/}
      <FirstComponents /> {/* Adicionando oque retorna do componente que foi importado*/}
      <TemplateExpressions/> {/* Adicionando oque retorna do componente que foi importado*/}
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App


//Faço a importação dos Componentes 
//retorno oque desejo no site 
