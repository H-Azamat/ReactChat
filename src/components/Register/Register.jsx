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
                <h3 className="form-title">Регистрация</h3>
                <input
                    type="text" placeholder="Имя пользователя"
                    className="form-field" required={true}
                    pattern='[A-Za-z0-9]{1,15}' title='Макимальная длина 15 символов, не подерживаются спец символы'
                    onChange={ (e) => {setUsername(e.target.value)} }
                />

                <input type="email" placeholder="Email"
                       className="form-field" required={true}
                       onChange={ (e) => {setEmail(e.target.value)} }
                />

                <input type="password" placeholder="Password"
                       className="form-field" required={true} minlength="8"
                       title={'Минимальная длина пароля 8 символов'}
                       onChange={ (e) => {setPassword(e.target.value)} }
                />
                <button className="form-send">Зарегистрироваться</button>
                <p className="form-text">
                    Уже есть аккаунт?<br />
                    <NavLink to="/login" className="form-text link">Войти</NavLink>
                </p>
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