import { useState } from "react"

const ConditionalRender = () => {
/*Inicializa o X com true */
    const [x] = useState(false); /*Se eu por x como false, a condição simples ali de baixo não funciona */

    const [name, setName] = useState("Maria") /* Crio a variavel name e passo como valor João */


  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>} {/* Adiciono a variavel e concateno (&&/AND) e passo a condição(dentro do P)*/} {/* Uma condicional simples */}
        {!x && <p>Agora x é falso</p>} {/* Adiciono a variavel como forma de negação (!) e concateno (&&/AND) e passo  a condição(dentro do P */} {/* Uma condicional simples */}

{/* Passa a variavel é igual a João e passa a bifurcação */}
        <h1>If Ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é João</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        ) } 
{/* no primeiro (), passo a  codnição verdareira e no segundo (), passo a condição caso for falsa*/}

        <button onClick={() => setName ("João")}> CLica aqui !</button> {/* aqui crio um botão que ao ser clicado, redirecionar para o nome do João novamente [setName ("João")] */}

    </div>
  )
}

export default ConditionalRender
