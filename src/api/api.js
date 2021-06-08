import firebase from "../firebase";
import 'firebase/auth';
import {setCurrentUser} from "../redux/store";
import {Redirect} from "react-router-dom";

export const db = firebase.firestore();

export const authApi = {

    signIn: async (e, email, password, setIsRedirect) => {
        e.preventDefault();
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user && user.emailVerified) {
                    setIsRedirect(true)
                } else {
                    alert("Не верные данные или аккаунт не подтвержден")
                }
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
            .then(() => {
                setIsSendVerification(true)
            })
            .catch((error) => {
                alert(error.message)
            })
    },

    logout: async () => {
        await firebase.auth().signOut();
    }
}

export const messagesApi = {
    sendMessage: async (message, date, id) => {
        if (message) {
            await db.collection('messages').add({
                message,
                id,
                date,
                type: 'text',
                key: new Date()
            })
        }
    },
    sendMessageWithImg: async (dataImg, date, id) => {
        if (dataImg.src && dataImg.size <= 5000000 &&
            (dataImg.type === 'image/png' || dataImg.type === 'image/jpeg') ) {
            await db.collection('messages').add({
                img: dataImg.src,
                id,
                date,
                type: 'img',
                key: new Date()
            })
            return 'Фотография успешна отправлена :)';
        }else if(dataImg.size > 500000){
            return 'Мы не принимаем фотографии более 5мб :('
        }else if(dataImg.type !== 'image/png' || dataImg.type !== 'image/jpeg'){
            return 'Мы принимаем фотографии с расширением .png/jpg :)'
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
    getUserProfile: async (userId) => await db.collection("users").doc(userId).get(),
    getUsers: async (setCurrentUser, setUsers) => {
        await db.collection("users").onSnapshot((snapshot) => {
            let users = [];
            snapshot.forEach(doc => users.push({
                userId: doc.data().userId,
                img: doc.data().img,
                username: doc.data().username,
                description: doc.data().description,
                social: doc.data().social
            }));
            setUsers(users);
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    const currentUser = users.filter(item => item.userId === user.uid)[0];
                    setCurrentUser(currentUser.userId, currentUser.username, currentUser.img, currentUser.description, currentUser.social, true);
                } else {
                    setCurrentUser('', '', null, '', {}, true);
                    return <Redirect from='/' to="/login"/>
                }
            })
        })
    }
}
