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
                <input type="email" placeholder="Email" className="form-field" onChange={ (e) => {setEmail(e.target.value)} } />
                <input type="password" placeholder="Password" className="form-field" onChange={ (e) => {setPassword(e.target.value)} } />
                <button className="form-send">Вход</button>
                <NavLink to="/register" className="form-send active">Зарегистрироваться</NavLink>
            </form>
        </div>
    )
}

export default Login;