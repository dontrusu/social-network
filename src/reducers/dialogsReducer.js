import { SET_DIALOGS, ADD_MESSAGE } from "../actions/dialogsActions"

const defaultDialogs = {
    chats: [
        {name: "Katya", id: 1}, 
        {name: "Jeka", id: 2},
        {name: "Old Mike", id: 3},
        {name: "Tesla", id: 4},
        {name: "Columbus", id: 5},
    ]
}

/* Dialogs Reducer */

export const dialogsReducer = (state = defaultDialogs, action) => {
    switch(action.type){
        case SET_DIALOGS:
            return action.payload
        default: 
            return state
    }
}

/* Chat Reducer */

const defaultMessages = [
    {text: "Hello", type: "incoming"},
    {text: "Hi", type: "outcoming"},
    {text: "How are you?", type: "incoming"},
    {text: "Good", type: "outcoming"},
    {text: "Hello", type: "incoming"},
    {text: "Hi", type: "outcoming"},
    {text: "How are you?", type: "incoming"},
    {text: "Good", type: "outcoming"},
    {text: "Hello", type: "incoming"},
    {text: "Hi", type: "outcoming"},
    {text: "How are you?", type: "incoming"},
    {text: "Good", type: "outcoming"},
    {text: "Hello", type: "incoming"},
    {text: "Hi", type: "outcoming"},
    {text: "How are you?", type: "incoming"},
    {text: "Good", type: "outcoming"},
]

export const chatReducer = (state = defaultMessages, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            return [ ...state, { ...action.payload } ]
        default: 
            return state
    }
}