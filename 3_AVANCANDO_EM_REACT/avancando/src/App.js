import { useState } from 'react';
import './App.css';

import Noite from "./assets/noite.jpg" //fiz a importação da imagem para usa-la em baixo 
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDatails from './components/UserDatails';


function App() {
 //  const name = "Joaquim";                {/* Passa como variavel */}
   const [userName] = useState ("Maria");   /* Passar como State */

   const cars = [ /* crio as varaiavel e passo seus valores/ que seram reutilizados dentro do loop */
    { id: 1, brand: "Ferrari", color:"Amarelo", newCar:true, km: 0}, 
    { id: 2, brand: "KIA", color:"Branco", newCar:false, km: 15420},
    { id: 3, brand: "Renault", color:"Azul", newCar:false, km: 234},
   ]


   function showMessage(){
    console.log("Evento do componente pai")
   }

// Tenho um estado gerenciado pelo elemento PAI
   const [message, setMessage] = useState("")
// TENHO UMA FORMA DE ALTERAR ESTE ESTADO
      const handleMessage = (msg) => { /* recebe uma mensagem como argumento e alterar essa mensagem no State*/
       setMessage(msg);
    };

{/* DESAFIO */}
    const users = [
        {id: 1, name: "Maria", age: 20, job: "Universitaria"},
        {id: 2, name: "Pedro", age: 6, job: "Estudante"},
        {id: 3, name: "Paula", age: 43, job: "Vendedora"},
    ];


  return (
    <div className="App">
      <h1>Avançando em React</h1>
     {/*Imagem em public */} {/* IMAGENS USADA EM PUBLIC, SÃO IMAGENS QUE NÃO MUDARIAM NA APLICAÇÃO */}
      <div>
        <img src="/imagens1.jpg" alt="Sol" />
      </div>
      <div>
     {/* Imagem em assets */}
        <img src={Noite} alt="Noite" />
      </div>
          <ManageData/>
          <ListRender/>
          <ConditionalRender/>
      {/* PROPS */}
          <ShowUserName name = {userName}/>   {/*agora o componente ShowUserName tem acesso a uma props chamada name com o valor de Matheus */} {/* Componente pai */}
          {/* Passar como State */}
          {/* Passa como variavel */}
      {/* DESTRUCTURING */}
      <CarDetails brand= "VW" km={100000} color="Azul" newCar={false}/> {/* passar numero sem ser em formato de texto, é só passar dentro de chaves {} */}

      {/* REAPROVEITAMENTO */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false}/>

      {/* Loop em array de obejtos */}
      {cars.map((car) => (
        <CarDetails
        key={car.id}
         brand={car.brand}
         color={car.color} 
         km={car.km} 
         newCar={car.newCar} />
      ))}

      {/*Fragment */}
      <Fragment propFragment = "Teste"/>

      {/*Children */}
  {/* PARA USAR O HTML AQUI DENTRO TEREMOS QUE FAZER ATAG DE ABERTURA E FECHAMENTO */}
        <Container myValue= "testing"> 
          <p>E este é o conteúdo</p> {/* só passando desta forma , não mostra na tela  */}
        </Container> 
        <Container myValue= "testing 2"> 
          <h5>Testando o container</h5>
        </Container>

  {/* executar função */}
        <ExecuteFunction myFunction={showMessage}/> {/* Passo a função por meio de uma prop e chame ela no elemento filho (ExecuteFunction.jsx)*/}

  {/*state lift */}
  {/* COMPONENTES QUE CONSOME ESTE ESTADO */}
        <Message msg={message}/>
  {/* COMPONENTES QUE ALTERA E ELEVA ESTE ESTADO, PARA EU TER UMA ATUALIZAÇÃO E RECONSUMO DESTE NOVO ESTADO*/}
        <ChangeMessageState handleMessage={handleMessage}/>
  
{/* DESAFIO */}
      {users.map((user) => (
          <UserDatails  
          key={user.id} 
          name={user.name} 
          age={user.age} 
          job={user.job}/>
      ))}

    </div>
  
  );
}

export default App;

