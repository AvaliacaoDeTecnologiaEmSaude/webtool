//Header.js
import logo from './images/logo.png';
import { Link } from 'react-router-dom';


export default function Header(props) {
    
    function handleSubmit() {
        console.log("logout");
        props.changeLogInState(false);
    }

    return (
        <header className="App-header">
            <nav className="nav wrapper">
                <ul>
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    
                    {props.LoggedIn
                        && <div className="loggedInMenu">
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                                
                            </li>
                            <li>
                                <Link to="/preferences">Preferences</Link>
                                
                        </li>
                        <li>
                            <button type="button"
                                onClick={handleSubmit}
                            >Log Out</button>
                        
                        </li>
                        </div>
                    }
                </ul>
            </nav>
            <h1 className="wrapper">Evaluate New Technologies</h1>
            {/* <p>User is logged in: {props.LoggedIn ? 'true' : 'false'}</p> */}

        </header>
    )
}