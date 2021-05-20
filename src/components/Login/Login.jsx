import { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { authApi } from "../../api/api";

const Login = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [isRedirect, setIsRedirect] = useState(false);

    if(isRedirect) return <Redirect to="/"/>

    return(
        <div className="form-block">
            <form className="form" onSubmit={ (e) => {authApi.signIn(e, email, password, setIsRedirect)} }>
                <h3 className="form-title">Вход</h3>
                <input
                    type="email" placeholder="Email" required={true}
                    className="form-field" onChange={ (e) => {setEmail(e.target.value)} }
                />
                <input
                    type="password" placeholder="Password"
                    required={true}
                    className="form-field" onChange={ (e) => {setPassword(e.target.value)} }
                />
                <button className="form-send">Вход</button>
                <p className="form-text">
                    Еще нет аккаунта?<br />
                    <NavLink to="/register" className="form-text link">Зарегистрироваться</NavLink>
                </p>
            </form>
        </div>
    )
}

export default Login;