import { NavLink } from "react-router-dom";
import defaultImg from '../../assets/img/userImg.svg';

const Message = (props) => {
    return(
        <div className={`chat-message__block ${props.currentUserId === props.userId ? 'my-message__block' : ''}`}>
            <img src={props.avatar || defaultImg} alt="avatar" className="message-avatar"/>
            <div className={`chat-message ${props.currentUserId === props.userId ? 'my-message' : ''}`}>
                {props.currentUserId !== props.userId && <NavLink to={'/profile/' + props.userId} className="chat-message-username">{props.username}</NavLink>}
                {props.type === 'text' && <p className="chat-message-text">{props.message}</p>}
                {props.type === 'img' && <img src={props.img} alt="img" className="chat-message-img"/>}
                <span className="chat-message-date">{props.date}</span>
            </div>
        </div>
    )
}

export default Message;