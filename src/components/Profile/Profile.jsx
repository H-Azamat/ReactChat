import {NavLink} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Redirect} from "react-router-dom";

import Header from '../Header';
import defaultImg from '../../assets/img/userImg.svg';
import close from '../../assets/img/close.svg';
import check from '../../assets/img/check.svg';

export const Profile = (props) => {
    const [username, setUsername] = useState(props.username);
    const [img, setImg] = useState(props.img);
    const [fileValue, setFileValue] = useState(null);

    useEffect(() => {
        setUsername(props.username)
        setImg(props.img)
    }, [props])
    
    return (
        <div className='profile'>
            {!props.isFound ?
                <Redirect to="/error" /> :
                <div>
                    <Header />
                    <div className="profileInfo">
                        <div className="profileInfo-actions">
                            <NavLink to="/"> <img src={close} alt="close" className="profileInfo-close"/> </NavLink>
                            {props.isCurrent
                            && <img src={check} alt="check" className="profileInfo-check"
                                    onClick={() => props.updateProfile(fileValue, setFileValue, setImg, img, username)}/>
                            }
                        </div>
                        {props.isCurrent
                            ? <input className="profileInfo-username isCurrent" type="text" value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}/>
                            : <input className="profileInfo-username" type="text" value={username} readOnly={true} />
                        }
                        <div className="profileInfo-photo__block">
                            <img alt="userImg" className="profileInfo-photo" src={img ? img : defaultImg} />
                        </div>
                        {props.isCurrent
                        && <div>
                                <p className="profileInfo-text">Вставьте URL ссылку картинки:</p>
                                <input type="url" className="profileInfo-photo__file" value={fileValue ? fileValue : ''}
                                       onChange={(e) => {
                                           setFileValue(e.target.value)
                                       }}/>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}