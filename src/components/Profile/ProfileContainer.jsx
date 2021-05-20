import {Component} from 'react';
import {profileApi} from "../../api/api";
import {compose} from "redux";
import {connect} from "react-redux";
import { withRouter, Redirect } from 'react-router-dom'
import {Profile} from "./Profile";
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
            description: this.props.description,
            social: this.props.social,
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
                    description: res.description,
                    social: res.social,
                    isLoading: false,
                    isCurrent: false
                })
            }
        }else{
            this.setState({
                img: this.props.img,
                username: this.props.username,
                description: this.props.description,
                social: this.props.social,
                isLoading: false,
                isCurrent: true
            })
        }
    }

    updateProfile = async (newImg, setImg, img, username, description, social) => {
        if(newImg) setImg(newImg);
        await  profileApi.updateProfile(newImg || img, username, description, social);
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
        if(this.props.match.params.userId !== prevProps.match.params.userId
            || this.state.username !== prevState.username
            || this.props !== prevProps){
            await this.refreshProfile();
        }
    }

    render(){
        if(this.state.isRedirect) return <Redirect to="/login"/>
        return(
            <div>
                {this.state.isLoading
                    ? <Loading />
                    : <Profile
                        img={this.state.img} username={this.state.username}
                        updateProfile={this.updateProfile} isFound={this.state.isFound}
                        isCurrent={this.state.isCurrent} description={this.state.description}
                        social={this.state.social}
                    />
                }
            </div>
        )
    }

}

const mapStateToProps = (store) => ({
    username: store.currentUser.username,
    img: store.currentUser.userImg,
    description: store.currentUser.description,
    social: store.currentUser.social
})

export default compose(
    connect(mapStateToProps, {}),
    withRouter
)(ProfileContainer);