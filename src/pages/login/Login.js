import './Login.scss';

function Login() {
    return (
        <div className="login-page">
            <div className="login-page__login-content">
                <h2 className="login-page__login-heading">Login</h2>

                <div className="login-page__input-container">
                    <div className="login-page__input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email" 
                            id="email" 
                            className="login-page__email-input" 
                            name="email"     
                        />
                    </div>
                    <div className="login-page__input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="login-page__password-input"
                            name="password"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;