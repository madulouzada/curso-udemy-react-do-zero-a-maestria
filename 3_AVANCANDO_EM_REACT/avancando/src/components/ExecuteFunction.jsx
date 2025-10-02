const ExecuteFunction = ({myFunction}) => { //extraio a prop da função aqui
  return (
    <div>
        <button onClick={myFunction}>Clique aqui para executar a função!</button>
    </div>
  )
}

export default ExecuteFunction