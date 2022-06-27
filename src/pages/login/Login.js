import axios from 'axios';
import './Login.scss';

function Login() {
    const handleLogin = (e) => {
        const LOGIN_ENDPOINT = "/login";

        // prevent page redirection
        e.preventDefault();

        // get login data from the form
        let loginData = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        // send POST request to backend
        axios.post(LOGIN_ENDPOINT, loginData);
    }

    return (
        <div className="login-page">
            <div className="login-page__login-content">
                <div className="login-page__login-container">
                    <h2 className="login-page__login-heading">Login</h2>

                    <div className="login-page__input-container">
                        <div className="login-page__input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email" 
                                id="email" 
                                className="login-page__input" 
                                name="email"     
                            />
                        </div>
                        <div className="login-page__input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="login-page__input"
                                name="password"
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="login-page__submit-button"
                        onClick={handleLogin}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;