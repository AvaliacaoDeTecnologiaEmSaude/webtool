//Header.js
import logo from './images/logo.png';

const Header = () => {
    return (
        <header className="App-header">
            <nav className="nav wrapper">
                <ul>
                    <li><img src={logo} className="App-logo" alt="logo" /></li>
                    <li>FAQ</li>
                    <li>About</li>
                </ul>
            </nav>
            <h1 className="wrapper">Evaluate New Technologies</h1>
        </header>
    )
}

export default Header;