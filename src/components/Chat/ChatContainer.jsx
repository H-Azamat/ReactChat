import {Component} from "react";
import Chat from "./Chat";
import {db} from "./Messages";
import {connect} from "react-redux";
import {setCurrentUser, setUsers} from "../../redux/store";

class ChatContainer extends Component {

    getMessages() {
        db.collection("users").onSnapshot((snapshot) => {
            let users = [];
            snapshot.forEach(doc => users.push({
                userId: doc.data().userId,
                img: doc.data().img,
                username: doc.data().username
            }));
            this.props.setUsers(users);
        })
    }

    componentDidMount() {
        this.getMessages()
    }

    render() {
        return(
            <Chat />
        )
    }
}

let mapStateToProps = (state) => ({id: state.currentUser.uid})

export default connect(mapStateToProps, {setUsers, setCurrentUser})(ChatContainer);;