import { connect } from 'react-redux';
import logo from '../assets/img/Logo.svg';
import { authApi } from '../api/api';
import defaultImg from '../assets/img/userImg.svg';
import {NavLink} from 'react-router-dom';

const Header = ({username, userImg}) => {
    return(
        <div className="header"> 
            <img src={logo} alt="ReactChat" className="header-logo" />

            <div className="header-info">
                <NavLink to='/profile' className="header-toProfile">
                    <span className="header-username">{username}</span>
                    <img src={userImg ? userImg : defaultImg} alt="imgProfile" className="header-img"/>
                </NavLink>
                {/*<button className="header-logout" onClick={() => { authApi.logout() }}>Выйти</button>*/}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    username: state.currentUser.username,
    userImg: state.currentUser.userImg
})

export default connect(mapStateToProps)(Header);