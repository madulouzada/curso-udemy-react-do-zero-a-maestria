const ShowUserName = (props) => {/* Extrai o name do props */
  return (
    <div>
        <h2>O nome do usuário:{props.name}</h2> {/* acessa o props.name */} {/* Componente filho */}
    </div>
  )
}

export default ShowUserName