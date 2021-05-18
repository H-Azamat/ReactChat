import { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import Loading from "../common/Loading/Loading";
import Message from "./Message";
import { updateMessages } from "../../redux/store";
import firebase from "../../firebase";

export const db = firebase.firestore();

const Messages = (props) => {
 
    let [isLoader, setIsLoader] = useState(true);
    let [limit, setLimit] = useState(15);

    const getData = (id) => props.users.filter(item => item.userId === id)[0]


    useEffect(() => {
        const getMessages = db.collection("messages").orderBy("key", "asc").limitToLast(limit).onSnapshot((snapshot) => {
            let messages = [];
            snapshot.forEach(doc => messages.push({
                userId: doc.data().id,
                message: doc.data().message,
                avatar: doc.data().avatar,
                username: doc.data().username,
                date: doc.data().date,
                key: doc.data().key
            }));
            props.updateMessages(messages);
            setIsLoader(false);
        })

        return() => {
            getMessages();
        }
    }, [limit])

    const messagesBlock = useRef(null);
    if(messagesBlock.current && limit === 15){
        setTimeout(() => {
            messagesBlock.current.scrollTop = messagesBlock.current.scrollHeight;
        }, 1)
    }

    const isScrollTop = () => {
        if(messagesBlock.current.scrollTop === 0){
            setLimit(limit + 15)
        }
    }
    return(
        <div onScroll={() => {isScrollTop()}} className="chat-messages" ref={messagesBlock}>
            {isLoader 
                ? <Loading />
                :<div>
                    {props.messages.map((elem) => <Message key={elem.key} userId={elem.userId} avatar={getData(elem.userId).img} message={elem.message} username={getData(elem.userId).username} currentUserId={props.id} date={elem.date} />)}
                </div>
            }
        </div>
    )
}

let mapStateToProps = (state) => ({
      messages: state.messages,
      users: state.users,
      id: state.currentUser.uid,
})

export default connect(mapStateToProps, {updateMessages})(Messages);