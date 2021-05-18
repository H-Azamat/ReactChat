import { NavLink } from "react-router-dom";
import { useState } from "react";
import { authApi } from "../../api/api";

const Register = () => {

    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");     
    let [isSendVerification, setIsSendVerification] = useState(false);

    return(
        <div className="form-block">
        { !isSendVerification 
            ? <form className="form" onSubmit={ (e) => {authApi.register(e, email, password, username, setIsSendVerification)} } >
                <input type="text" placeholder="Username" className="form-field" maxLength="15" onChange={ (e) => {setUsername(e.target.value)} } />
                <input type="email" placeholder="Email" className="form-field" onChange={ (e) => {setEmail(e.target.value)} } />
                <input type="password" placeholder="Password" className="form-field" onChange={ (e) => {setPassword(e.target.value)} } /> 
                <button className="form-send">Зарегистрироваться</button>
                <NavLink to="/login" className="form-send active">Войти</NavLink>
                <button className="form-send active" onClick={() => { authApi.sendEmail(setIsSendVerification) }}>Отправить еще раз письмо</button>
            </form>
            : <div>
                <NavLink to="/" className="send-back">назад &gt;</NavLink>
                <p className="send-text">
                    Письмо отправлено на ваш email <span>{email}</span><br />
                    Нажмите на ссылку в письме <br />
                    *проверьте и спам
                </p>
            </div>
        }
        </div>
    )
}

export default Register;