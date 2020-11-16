import { dialogsReducer, chatReducer } from "./dialogsReducer"
import { myPostsReducer } from "./myPostsReducer"
import { profileReducer } from "./profileReducer"
import { usersReducer } from "./usersReducer"
import { authReducer } from "./authReducer"
import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    dialogs: dialogsReducer,
    messages: chatReducer,
    posts: myPostsReducer,
    users: usersReducer,
    profile: profileReducer,
    auth: authReducer,
    form: formReducer,
})

export default reducers