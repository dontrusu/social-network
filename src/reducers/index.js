import { dialogsReducer, chatReducer } from "./dialogsReducer"
import { combineReducers } from "redux"

let reducers = combineReducers({
    dialogs: dialogsReducer,
    messages: chatReducer,
})

export default reducers