import firebase from "../firebase";
import 'firebase/auth';
import {setCurrentUser} from "../redux/store";

export const db = firebase.firestore();

export const authApi = {

    signIn: async (e, email, password, setIsRedirect) => {
        e.preventDefault();
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if(user && user.emailVerified){setIsRedirect(true)}
            else{alert("Не верные данные или аккаунт не подтвержден")}
        })
        .catch((error) => {
          alert("Не верные данные или аккаунт не подтвержден");
        });
    }, 

    register: async (e, email, password, username, setIsSendVerification) => {
        e.preventDefault();
        await firebase.auth().createUserWithEmailAndPassword(email.trim(), password.trim())
        .then((userCredential) => {
            let user = userCredential.user;
            user.updateProfile({
                displayName: username
            })

            db.collection("users").doc(user.uid).set({
                username,
                img: null,
                description: "",
                social: {
                    github: null,
                    instagram: null,
                    telegram: null,
                    vk: null,
                    youtube: null
                },
                userId: user.uid
            })
            
            user.sendEmailVerification().then(() => {
                setIsSendVerification(true)
            }).catch((error) => {
                alert(error.message)
            })
        })
        .catch((error) => {
            alert(error.message);
            throw error
        });
    },

    sendEmail: async (setIsSendVerification) => {
        const user = firebase.auth().currentUser;
        await user.sendEmailVerification()
            .then(() => { setIsSendVerification(true) })
            .catch((error) => { alert(error.message) })
    },
    
    logout: async () => {
        await firebase.auth().signOut();
    }
}

export const messagesApi = {
    sendMessage: async (message, date, id) => {
        if(message){
            await db.collection('messages').add({
                message,
                id,
                date,
                key: new Date()
            })
        }
    }
}

export const profileApi = {
    updateProfile: async (img, username, description, social) => {
        const user = firebase.auth().currentUser;

        await db.collection("users").doc(user.uid).update({
            username,
            img,
            description,
            social
        }).then(() => {
            setCurrentUser(user.uid, username, img, description, true);
        })

        await user.updateProfile({
            displayName: username,
            photoURL: img,
            description
        }).then(() => {
            setCurrentUser(user.uid, username, img, description, true);
        })
    },
    getUserProfile: async (userId) => await db.collection("users").doc(userId).get()
}
