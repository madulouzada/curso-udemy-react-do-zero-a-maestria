const Events = () =>{

    const handlMyEvent = () => {
        console.log("Ativou o clique!")
    }
    return (
        <div>
            <div>
                <button onClick ={handlMyEvent}> Clique aqui !</button>
            </div>
        </div>
    )
}

export default Events