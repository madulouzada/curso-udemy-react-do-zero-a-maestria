import MyComponent from "./MyComponent";

const FirstComponents = ()  => { /* função, passando uma variavel */

    return(                       /* retornando algo */                      
        <div>
            <h1>Meu primeiro componentes</h1>
            <p className="teste">Meu texto </p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponents /* fazer a exportação, quando desejado */
