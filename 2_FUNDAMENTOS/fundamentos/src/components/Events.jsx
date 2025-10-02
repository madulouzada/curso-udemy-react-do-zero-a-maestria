const Events = () =>{
 /*Criamos a função do botão ao ser clicado*/
    const handlMyEvent = (e) => {                   /*No evento, sempre deveremos te acesso ao agrumento EVENTS, que pode set passado como (e)*/      
        console.log(e);                             /*São os dados que o elemento contém*/
        console.log("Ativou o clique!")
    };

    /* Definição da função fora do JSX, Ou seja, ela existe como uma função auxiliar disponível para ser chamada dentro do JSX.*/
    const renderSomethig = (x) => {     /* Se for verdade retorna isso   return <h1>Renderizando isso !</h1>; */
        if(x) {

            return <h1>Renderizando isso !</h1>;

        } else {  /* Se não retorna isso   return <h1>Também pode rederizar isso !</h1>; */

            return <h1>Também pode rederizar isso !</h1>;

        }
    };

    return (
        <div>
            <div>
                <button onClick ={handlMyEvent}> Clique aqui !</button>     {/*Passamos a função*/}
                {/*Se o {handlMyEvent()}, possuir os parenteses, ele ira ler a função antes mesmo de ser clicada*/}
                {/*Se o {handlMyEvent}, sem os parenteses, ele ira ler a função apenas quando a tal, for clicada*/}
            </div>
            <div>
                {/*ação simples*/}
                {/*() => console.log("Clicou!"): Isto é uma Arrow Function */}
                {/*(): Representa os parâmetros da função. Como está vazio, significa que a função não recebe nenhum parâmetro.
                   =>: É o que define isso como uma arrow function.
                   console.log("Clicou!"): Esta é a única ação que a função executa.*/}
                <button onClick = {() => console.log ("Clicou!")}> 
                    Clique aqui também!
                </button>

                {/*ação do clique é mais complexa e envolve múltiplas linhas de código ou lógica.*/}
                {/* Quando este botão é clicado, ele executa uma função que contém um bloco de código. 
                Esse bloco pode ter lógica complexa. No seu exemplo, ele verifica uma condição if e, se for verdadeira, mostra uma mensagem no console.*/}

                <button onClick={() => { {/*Este estilo funciona, mas não se é recomendado */}
                    if(true) { {/*Bloco de codigo*/}
                        console.log("Isso não deveria existir :)")
                    }
                }}>
                    Clique aqui, por favor!
                    </button>
            </div>
            {/*Aqui você chama o resultado da função */} 
            {renderSomethig(true)}   {/* Se for verdade retorna isso   return <h1>Renderizando isso !</h1>; (TRUE)*/}
            {renderSomethig(false)} { /* Se não retorna isso   return <h1>Também pode rederizar isso !</h1>; (FALSE) */}
        </div>
    );
};

export default Events;
