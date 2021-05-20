import {useState} from "react";
import Modal from 'react-modal';

import back from "../../assets/img/back.svg";
import check from "../../assets/img/check.svg";
import editWhite from "../../assets/img/edit-white.svg";
import defaultImg from "../../assets/img/userImg.svg";
import ProfileSocialEdit from "./ProfileSocialEdit";

Modal.setAppElement('#root')

const ProfileEdit = (props) => {

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

    const [username, setUsername] = useState(props.username);
    const [description, setDescription] = useState(props.description);
    const [img, setImg] = useState(props.img);
    const [newImg, setNewImg] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [social, setSocial] = useState({...props.social});

    const updateImg = async (e) => {
        e.preventDefault();
        await props.updateProfile(newImg, setImg, img, username, description);
        setNewImg('');
    }

    const updateProfile = async () => {
        await props.updateProfile(newImg, setImg, img, username, description, social);
        props.setIsEdit(false)
    }

    return (
        <div className='container'>
            
            <div className="profile-actions">
                <img src={back} alt="back" className="profile-back"
                     onClick={() => props.setIsEdit(false)}/>
                <img src={check} alt="check" className="profile-check"
                     onClick={() => updateProfile()}/>
            </div>
            
            <div className="profile-info">

                <div className="profile-photo-block">

                    {img
                        ? <div alt="userImg" className="profile-photo" style={{backgroundImage: `url(${img})`}} />
                        : <div alt="userImg" className="profile-photo" style={{backgroundImage: `url(${defaultImg})`}} />
                    }

                    <div className="profile-photo-overlay" onClick={() => setModalIsOpen(true)}>
                        <img src={editWhite} alt="edit"/>
                    </div>

                </div>

                <div className="profile-info-block">
                    <input onChange={(e) => setUsername(e.target.value)}
                           className="profile-username edit" value={username} maxLength='15' />
                    <textarea onChange={(e) => setDescription(e.target.value)}
                              className="profile-description edit" value={description} maxLength='150' rows='3' />
                </div>

            </div>
            
            <ProfileSocialEdit social={props.social} setSocial={setSocial} />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => {setModalIsOpen(false)}}
                style={customStyles}
            >
                <form onSubmit={(e) => updateImg(e)}>
                    <h1 className='modal-title'>Поменять изображение</h1>
                    <p className="modal-description">Вставьте URL-ссылку картинки:</p>
                    <input onChange={(e) => setNewImg(e.currentTarget.value)}
                        placeholder='https://example.[jpg/png]' type="text"
                        className='modal-input' pattern='https?:\/\/.*\.(?:png|jpg)'
                        value={newImg} title='Поддерживаются картинки в формате .png и .jpg'
                        required
                    />
                    <button className="modal-submit">Сохранить</button>
                </form>
            </Modal>
        </div>
    )
}

export default ProfileEdit;