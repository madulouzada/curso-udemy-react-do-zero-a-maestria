const TemplateExpressions = () => {
    const name = "Maria"
    const data = {
        age: 20,
        job:"Developer "
    };

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    )

}

export default TemplateExpressions

//Crio um variavel name e passo um valor;
// retorno oque quer do site, sendo passado dentro da div 
// e exporto
