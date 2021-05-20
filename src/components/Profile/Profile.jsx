import {NavLink} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Redirect} from "react-router-dom";
import ProfileSocial from "./ProfileSocial";

import Header from '../Header';
import defaultImg from '../../assets/img/userImg.svg';
import back from '../../assets/img/back.svg';
import edit from '../../assets/img/edit.svg';
import ProfileEdit from "./ProfileEdit";

export const Profile = (props) => {
    const [username, setUsername] = useState(props.username);
    const [description, setDescription] = useState(props.description);
    const [img, setImg] = useState(props.img);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        setUsername(props.username)
        setImg(props.img)
        setDescription(props.description || 'Описание отсутствует :(')
    }, [props])
    
    return (
        <div className='profile'>
            {!props.isFound ?
                <Redirect to="/error" /> :
                <div>

                    <Header />

                    {!isEdit
                        ? <div className="container">

                            <div className="profile-actions">
                                <NavLink to="/chat"> <img src={back} alt="back" className="profile-back"/> </NavLink>
                                {props.isCurrent
                                && <img src={edit} alt="edit" className="profile-edit"
                                        onClick={() => setIsEdit(true)}/>
                                }
                            </div>
                            <div className="profile-info">

                                <div className="profile-photo-block">
                                    {img
                                        ? <div alt="userImg" className="profile-photo" style={{backgroundImage: `url(${img})`}} />
                                        : <div alt="userImg" className="profile-photo" style={{backgroundImage: `url(${defaultImg})`}} />
                                    }
                                </div>

                                <div>
                                    <h2 className="profile-username">{username}</h2>
                                    <p className="profile-description">{description}</p>
                                </div>

                            </div>

                            <ProfileSocial social={props.social} />

                        </div>
                        : <ProfileEdit
                            username={username} setIsEdit={setIsEdit}
                            img={img} description={description} social={props.social}
                            updateProfile={props.updateProfile}
                        />
                    }

                </div>
            }
        </div>
    )
}