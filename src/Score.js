//Score.js

function sumAll(array) {
    let result = 0;
    array.forEach(element => {
        result += parseInt(element);
    });
    return result;
}

const Score = (props) => {
    let totalGeral = sumAll(props.Geral);
    let totalResultado = sumAll(props.Resultado);
    //PLACE TO ADD NEW DIMENSION

    let score = totalGeral + totalResultado;
    if (score < 0) {
        
    }
    return (
        <div className="score">
            <p className={score >= 0 ? "goodScore" : "badScore"}>SCORE: {score}</p>
            <p>Geral: {totalGeral}</p>
            <p>Resultado: {totalResultado}</p>
            {/* PLACE TO ADD NEW DIMENSION: */}
        </div>
    )
}

export default Score;