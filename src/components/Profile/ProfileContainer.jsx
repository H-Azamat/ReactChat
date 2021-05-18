import {Component} from 'react';
import {profileApi} from "../../api/api";
import {compose} from "redux";
import {connect} from "react-redux";
import { withRouter, Redirect } from 'react-router-dom'
import {Profile} from "./Profile";
import {setCurrentUser} from "../../redux/store";
import Loading from "../common/Loading/Loading";

import firebase from "../../firebase";
import 'firebase/auth';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFound: true,
            img: this.props.img,
            username: this.props.username,
            isLoading: true,
            isRedirect: false,
            isCurrent: false
        };
    }

    refreshProfile = async () => {
        let userId = this.props.match.params.userId;
        if(userId){
            const res = await profileApi.getUserProfile(userId).then(doc => doc.data())
            if(res.userId) {
                this.setState({
                    img: res.img,
                    username: res.username,
                    isLoading: false,
                    isCurrent: false
                })
            }
        }else{
            this.setState({
                img: this.props.img,
                username: this.props.username,
                isLoading: false,
                isCurrent: true
            })
        }
    }

    updateProfile = async (fileValue, setFileValue, setImg, img, username) => {
        if(fileValue) setImg(fileValue);
        await  profileApi.updateProfile(fileValue || img, username, this.props.setCurrentUser);
        setFileValue('');
    }

    async componentDidMount() {
        let user = firebase.auth().currentUser;
        if(user && user.emailVerified){
            this.setState({isRedirect: false})
            await this.refreshProfile()
        }else{
            this.setState({isRedirect: true});
        }
    }

    async componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.userId !== prevProps.match.params.userId || this.state.username !== prevState.username){
            await this.refreshProfile();
        }
    }

    render(){
        if(this.state.isRedirect) return <Redirect to="/login"/>
        return(
            <div>{this.state.isLoading
                ? <Loading />
                : <Profile
                    img={this.state.img} username={this.state.username}
                    updateProfile={this.updateProfile} isFound={this.state.isFound}
                    isCurrent={this.state.isCurrent} />}</div>
        )
    }

}

const mapStateToProps = (store) => ({
    username: store.currentUser.username,
    img: store.currentUser.userImg
})

export default compose(
    connect(mapStateToProps, {setCurrentUser}),
    withRouter
)(ProfileContainer);