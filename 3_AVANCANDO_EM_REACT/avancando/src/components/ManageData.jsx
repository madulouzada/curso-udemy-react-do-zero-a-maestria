//FIZ A RENDERIZAÇÃO DO MANAGEDATA, NO APP.JS
import { useState } from "react"; //IMPORTAÇÃO DO userState

const ManageData = () => {   
  let someData = 10;
  const[number, setNumber] = useState(10); //FIZEMOS A CRIAÇÃO DA CONSTA number E da função setNumber, que virão do useState 

  return (
    <div>
         <div>
         <p>Valor: {someData}</p>  
         <button onClick={() => (someData = 15)}>Mudar variável</button>
         </div>
        <div>
         <p>Valor: {number}</p>  
         <button onClick={() => setNumber (25)}>Mudar state</button>
{/* o setNumber se comportar como uma função, onde eu passo o novo valor, ao ser clicado */}
{/*Ao usar o console.log, com o state, verifica o número de incio e o alterado */}
        </div>
    </div>
  )
}

export default ManageData