import React from 'react'

const ChangeMessageState = ({handleMessage}) => { // recebe a propriedade handleMessage
    const messages = ["Oi", "Olá", "Oi, tudo bem ?"] //defini um array messages

  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button> {/*handleMessage(...)	É a propriedade (função) que seu componente ChangeMessageState recebeu do componente pai (App.js). */}
        <button onClick={() => handleMessage(messages[1])}>2</button> {/*messages[índice]	É a mensagem específica (por exemplo, "Oi", "Olá") que está sendo passada como argumento para a função handleMessage.*/}
        <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState