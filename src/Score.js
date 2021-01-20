//Score.js

const Score = (props) => {
    return (
        <div className="score">
            <p>Score:</p>
            <p>{props.value}</p>
        </div>
    )
}

export default Score;