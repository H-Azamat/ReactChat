import { useState } from 'react';
import { messagesApi } from '../../api/api';
import Picker from 'emoji-picker-react';

import send from '../../assets/img/send.svg';
import emoji from '../../assets/img/emoji.svg';

const Footer = ({id}) => {

    let [message, setMessage] = useState('');
    let [isEmojiOpen, setIsEmojiOpen] = useState(false);

    const openEmoji = () => setIsEmojiOpen(!isEmojiOpen);

    const onEmojiClick = (e, emojiObject) => {
        setMessage(message + emojiObject.emoji);
    }

    const sendMessage = async () => {
        await messagesApi.sendMessage(message, date(), id)
        setMessage('')
    };

    const date = () => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let hours = date.getHours();
        let minuts = date.getMinutes();

        switch(month) {
            case 1: month = 'Январь'; break;
            case 2: month = 'Февраль'; break;
            case 3: month = 'Март'; break;
            case 4: month = 'Апрель'; break;
            case 5: month = 'Май'; break;
            case 6: month = 'Июль'; break;
            case 7: month = 'Июнь'; break;
            case 8: month = 'Август'; break;
            case 9: month = 'Сентябрь'; break;
            case 10: month = 'Октябрь'; break;
            case 11: month = 'Ноябрь'; break;
            case 12: month = 'Декабрь'; break;
            default: return '';
        }

        return day + ' ' + month + ' ' + hours + ':' + minuts;
    }

    return(
        <form className="formSending" onSubmit={(e) => { e.preventDefault(); sendMessage(e) }}>
            <div className="container">
                <input type="text" value={message} className="formSending-field" placeholder="Введите сообщение" onChange={(e) => {setMessage(e.target.value)}} />

                <div className="formSending-emoji">
                    <div onClick={openEmoji} className="formSending-emoji-open">
                        <img width="28" src={emoji} alt="emoji"/>
                    </div>
                    {isEmojiOpen && <div className="formSending-emoji-modal">
                        <Picker onEmojiClick={onEmojiClick} />
                    </div>}
                </div>

                <button className="formSending-submit">
                    <img src={send} alt="submit" className="formSending-submit__img" />
                </button>
            </div>
        </form>
    )
}

export default Footer;