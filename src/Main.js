//Main.js
import Forms from './Forms.js';

const Main = (props) => {
    return (
    
    <main className="mainContent">

            <Forms changeScore={props.changeScore}/>

    </main>
    )
}

export default Main;