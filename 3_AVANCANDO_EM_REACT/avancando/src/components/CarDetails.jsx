import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => { /* vou fazer um DESTRUCTURING, que se caracteriza pela abertura e fechamento de {} em onjeto. (se fose em array seria colchetes)*/
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul> {/* terá 3 propriedades */}
            <li> Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro é novo!</p>} {/* Passei a condição do carro ser novo ou não, incluindo a propriedade newCar, onde se é necessario  */}
    </div>
  )
}

export default CarDetails