//Login.js
import './styles/Login.css';

export default function Login(props) {

    function handleSubmit() {
        console.log("login");
        props.changeLogInState(true);
    }

    return (
        <div className="login-wrapper">
            
            <form>
                <p>
                <label>
                    Username: 
                    <input type="text" />
                    </label>
                </p>
                <p>
                <label>
                    Password: 
                    <input type="password" />
                </label>
                </p>
                <div>
                    <button type="button"
                        onClick={handleSubmit}
                    >Log In</button>
                </div>
            </form>
        </div>
    )
}