import React from 'react'

const Fragment = ({propFragment}) => {
  return (
    <> {/* exclui o nome da div, tera o mesmo comportamento, mas este componenetes serão jogados no elemento pai de onde o componenete foi inserido*/}
        <h2>Primeiro título</h2>
        <h3>Segundo título</h3>
        <h4>{propFragment}</h4>
    </>
  )
}

export default Fragment