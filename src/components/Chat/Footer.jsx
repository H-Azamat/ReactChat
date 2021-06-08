import { useState } from 'react';
import { messagesApi } from '../../api/api';
import Picker from 'emoji-picker-react';
import Modal from 'react-modal';

import send from '../../assets/img/send.svg';
import emoji from '../../assets/img/emoji.svg';
import clip from '../../assets/img/clip.svg';

Modal.setAppElement('#root')

const Footer = ({id}) => {

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        },
        overlay: {
            backgroundColor       : 'rgba(51, 51, 51, 0.6)'
        }
    };

    const [message, setMessage] = useState('');
    const [isEmojiOpen, setIsEmojiOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectIsImage, setSelectIsImage] = useState(false);
    const [selectDataImg, setSelectDataImg] = useState({});

    const openEmoji = () => setIsEmojiOpen(!isEmojiOpen);

    const onEmojiClick = (e, emojiObject) => {
        setMessage(message + emojiObject.emoji);
    }

    const sendMessage = async (e) => {
        e.preventDefault();
        await messagesApi.sendMessage(message, date(), id)
        setMessage('')
    };

    const changeImg = async (e, file) => {
        e.preventDefault();

        if(file.size < 5000000 &&
            (file.type === 'image/png' || file.type === 'image/jpeg') ){
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = () => {
                setSelectIsImage(true);
                setSelectDataImg({
                    size: file.size,
                    type: file.type,
                    src: reader.result
                })
            }
        }else{
            alert('Мы принимаем файлы не более 5мб и с расширением .png/jpg');
        }
    }

    const setMessageWithImg = async (e) => {
        e.preventDefault();

        if(selectDataImg.src){
            await messagesApi.sendMessageWithImg(selectDataImg, date(), id).then(res => alert(res));
            setModalIsOpen(false)
            setSelectDataImg({})
            setSelectIsImage(false)
        }else{
            alert("А кто выберит изображение? :)")
        }
    }

    const date = () => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let hours = date.getHours();
        let minutes = date.getMinutes();

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

        return day + ' ' + month + ' ' + hours + ':' + minutes;
    }

    return(
        <div>
            <form className="formSending" onSubmit={(e) => sendMessage(e)}>
                <div className="container">
                    <input type="text" value={message} className="formSending-field" placeholder="Введите сообщение"
                           onChange={(e) => {
                               setMessage(e.target.value)
                           }}/>

                    <div className="formSending-emoji">
                        <div onClick={openEmoji} className="formSending-emoji-open">
                            <img width="28" src={emoji} alt="emoji"/>
                        </div>
                        {isEmojiOpen && <div className="formSending-emoji-modal">
                            <Picker onEmojiClick={onEmojiClick}/>
                        </div>}
                    </div>

                    <div className="formSending-sendImage"  onClick={() => setModalIsOpen(true)}>
                        <img src={clip} alt="clip" className="formSending-sendImage__img"/>
                    </div>

                    <button className="formSending-submit">
                        <img src={send} alt="submit" className="formSending-submit__img"/>
                    </button>
                </div>
            </form>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => {
                    setModalIsOpen(false)
                    setSelectIsImage(false)
                    setSelectDataImg({})
                }}
                style={customStyles}
            >
                <form onSubmit={(e) => setMessageWithImg(e)}>
                    <h1 className="modal-title">Отправить изображение:</h1>
                    {!selectIsImage
                        ? <label htmlFor="file" className='modal-file'>Выберите изображение</label>
                        : <img src={selectDataImg.src} alt="img" className='modal-selectImg' />
                    }
                    <input type="file" id='file'
                           className="modal-file__input" placeholder="Выберите изображение"
                           accept='image/jpeg, image/png' onChange={(e) => changeImg(e, e.currentTarget.files[0])}/>
                    <button className="modal-submit">Отправить</button>
                </form>
            </Modal>
        </div>
    )
}

export default Footer;