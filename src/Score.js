//Score.js

const Score = (props) => {
    let totalGeral = 0;
    props.Geral.forEach(element => {
        totalGeral += parseInt(element);
    });

    let totalResultado = 0;
    props.Resultado.forEach(element => {
        totalResultado += parseInt(element);
    });

    return (
        <div className="score">
            <p>SCORE: {totalGeral+totalResultado}</p>
            <p>Geral: {totalGeral}</p>
            <p>Resultado: {totalResultado}</p>
        </div>
    )
}

export default Score;