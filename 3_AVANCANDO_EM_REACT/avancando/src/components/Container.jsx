const Container = ({children, myValue}) => { //chamo a propriedade children e passo ela ali em baixo 
//componentes estrutural, que ira imprimir um container um pouco menor que a area totala do site
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
        <p>O valor é:{myValue}</p>
    </div>
  )
}

export default Container