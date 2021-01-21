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
    let score = totalGeral + totalResultado;

    return (
        <div className="score">
            <p>SCORE: {score}</p>
            <p>Geral: {totalGeral}</p>
            <p>Resultado: {totalResultado}</p>
        </div>
    )
}

export default Score;