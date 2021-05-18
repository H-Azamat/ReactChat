import {Suspense, lazy, useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import {setCurrentUser} from "./redux/store";
import firebase from './firebase';
import 'firebase/auth';

import './App.css';

import Loading from './components/common/Loading/Loading';

const ChatContainer = lazy(() => import('./components/Chat/ChatContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const Login = lazy(() => import('./components/Login/Login'));
const Register = lazy(() => import('./components/Register/Register'));
const Error = lazy(() => import('./components/Error/Error'));


function App({setCurrentUser, isInitial}){

	useEffect(() => {
		firebase.auth().onAuthStateChanged( (user) => {
			if(user){
				setCurrentUser(user.uid, user.displayName, user.photoURL, true);
			}else{
				setCurrentUser('', '', null, true);
				<Redirect from='/' to="/login" />
			}
		})
	}, [])

	return (
		<div className="App">
			{isInitial
				? <div className="container">
					<Switch>
						<Route exact path="/chat" render={() => <Suspense fallback={<Loading />}><ChatContainer /></Suspense> } />
						<Route exact path="/profile/:userId?" render={() => <Suspense fallback={<Loading />}><ProfileContainer /></Suspense> } />
						<Route path="/login" render={() => <Suspense fallback={<Loading />}><Login /></Suspense> } />
						<Route path="/register" render={() => <Suspense fallback={<Loading />}><Register /></Suspense> } />
						<Redirect exact from="/" to="/chat" />
						<Route path="*" render={() => <Suspense fallback={<Loading />}><Error /></Suspense>} />
					</Switch>
				</div>
				: <Loading />
			}	
		</div>
	)
}

const mapStateToProps = (store) => ({
	isInitial: store.isInitial
})

export default connect(mapStateToProps, {setCurrentUser})(App);
