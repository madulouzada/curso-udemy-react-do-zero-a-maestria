const Challenger = () => {
    const n1 = 5;
    const n2 = 10;
    

    return (
        <div>
            Numero 1: { n1 }
            Numero 2: { n2 }

            <button onClick={() => console.log(n1+n2)}>Somar valores</button>
        </div>
    )
}

export default Challenger;