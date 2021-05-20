import {createStore} from "redux";

const SET_CURRENT_USER = "SET_CURRENT_USER";
const UPDATE_MESSAGES = "UPDATE_MESSAGES";
const SET_USERS = "SET_USERS";

let initialState = {
    messages: [],
    users: [],
    currentUser: {},
    isInitial: false
}

const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: {...action.currentUser},
                isInitial: action.isInitial
            }
        case UPDATE_MESSAGES:
            return {
                ...state,
                messages: [...action.messages]
            }
        case SET_USERS:
            return {
                ...state,
                users: [
                    ...action.users
                ]
            }
        default:
            return state;
    }
}

export const setCurrentUser = (uid = '', username = '', userImg = null, description = '', social = {}, isInitial = false) => {
    return {type: SET_CURRENT_USER, currentUser: {uid, username, userImg, description, social}, isInitial}
}

export const updateMessages = (messages) => {
    return {type: UPDATE_MESSAGES, messages}
}

export const setUsers = (users) => {
    return {type: SET_USERS, users}
}

const store = createStore(messagesReducer);

window.store = store;
export default store;