import errorImg from "../../assets/img/404.png";
import {NavLink} from 'react-router-dom';

const Error = () => {
    return(
        <div className="error">
            <img src={errorImg} alt="404" className="error-img" />
            <button className="error-button"><NavLink to="/">На главную</NavLink></button>
        </div>
    )
}

export default Error;