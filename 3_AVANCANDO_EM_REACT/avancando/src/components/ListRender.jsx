import {useState} from 'react' // Importa o Hook useState da biblioteca React.

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Joao", "Maria"]) // Define o valor inicial do estado list como o array ["Matheus", "Pedro","Josias"].

    const[users, setUsers] = useState([ /* e parafinalizar, eu crio o setState */
      {id: 1, name: "Matheus", age: 31},
      {id: 2, name: "Pedro", age: 28},
      {id: 3, name: "Joao", age: 44}
    ]);

    const deleteRandom = () => {/* Em vez de passar o useState,eu passo o valor antigo, que no caso é o atual agora */
      const randomNumber = Math.floor(Math.random() * 4); /*  Math.random(), gera um número de ponto flutuante entre 0 (inclusivo) e 1 (exclusivo). Multiplicamos pela quantidade de itens que tem na lista a cimea. Math.floor() arredonda para o inteiro mais próximo para baixo. Isso gera um número inteiro aleatório entre 0, 1, 2 ou 3.          */

      setUsers((prevUsers) => { /*prevUsers, função onde tera o resultado anterior do usuarios (prev: de previous e Users: e o nome do State)*/
          return prevUsers.filter((user) => randomNumber !== user.id) /* Vou filtrar um usuario que tenha o ID diferente daquele ID que eu passei  */
      });
    };

  return (
    <div>
        <ul> {/* elemento HTML de lista não ordenada. */}
            {list.map((item, i) => ( /* O método JavaScript map é chamado no array list. Ele itera sobre cada elemento do array. */ 
                <li key={i}>{item}</li>/*A função de callback retorna um elemento <li> (item de lista) para cada item no array. */
                /*key: atributo html, passando o i, como algo unico um indice */
            ) )}
        </ul>
        <ul>
{/*user: É o parâmetro que, a cada iteração, representa o objeto de usuário completo, por exemplo: {id: 1, name: "Matheus", age: 31}. */}
          {users.map((user) => ( /*Esta é a expressão JavaScript inserida no JSX. Ela chama o método .map() no array de objetos users. */
            <li key={user.id}> {/* logo aqui, passamos o id, name, age, que criamos no const, onde serão retornados seus respectivos valores*/}
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button> {/* Botão chamandando a variavel deleteRandom, para deletar o usuario criado no const [users, setUsers] atraves do ID */} 
    </div>
  );
};

export default ListRender


