import {Component} from "react";
import Chat from "./Chat";
import {connect} from "react-redux";
import {setCurrentUser, setUsers} from "../../redux/store";

class ChatContainer extends Component {
    render() {
        return(
            <Chat id={this.props.id} />
        )
    }
}

let mapStateToProps = (state) => ({id: state.currentUser.uid})

export default connect(mapStateToProps, {setUsers, setCurrentUser})(ChatContainer);;