import { useEffect, useState } from 'react';
import {Redirect} from "react-router-dom";
import firebase from "../../firebase";
import 'firebase/auth';
import Header from '../Header';
import Messages from './Messages';
import Footer from './Footer';

const Chat = (props) => {

    let [isRedirect, setIsRedirect] = useState(false);
    let [username, setUsername] = useState('');

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if(user && user.emailVerified){
                setIsRedirect(false)
                setUsername(user.displayName);
            }else{
                setIsRedirect(true);
            } 
            
        });
    }, [])

    if(isRedirect) return <Redirect to="login"/>

    return(
        <div className="chat">
            <Header />
            <Messages />
            <Footer id={props.id} />
        </div>
    )

}

export default Chat;