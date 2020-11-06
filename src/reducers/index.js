import { dialogsReducer, chatReducer } from "./dialogsReducer"
import { myPostsReducer } from "./myPostsReducer"
import { profileReducer } from "./profileReducer"
import { usersReducer } from "./usersReducer"
import { authReducer } from "./authReducer"
import { combineReducers } from "redux"

let reducers = combineReducers({
    dialogs: dialogsReducer,
    messages: chatReducer,
    posts: myPostsReducer,
    users: usersReducer,
    profile: profileReducer,
    auth: authReducer,
})

export default reducers