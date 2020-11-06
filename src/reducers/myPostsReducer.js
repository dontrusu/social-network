import { ADD_POST } from "../actions/myPostsActions"

const defaultPosts = [
    {text: "I WANT MY HANDS BACK!", id: 8},
    {text: "Please don't leave the site.. When no one's here.. It gets dark...", id: 7},
    {text: "Please don't reload, I'll DIE!", id: 6},
    {text: "Oil can", id: 5},
    {text: "Your mouse cursor tickles.", id: 4},
    {text: "I'm the best robot here.", id: 3},
    {text: "I'm different!", id: 2},
    {text: "I'm not grumpy, I'm just drawn that way.", id: 1},
]

export const myPostsReducer = (state = defaultPosts, action) => {
    switch(action.type){
        case ADD_POST:
            return [ { ...action.payload }, ...state ]
        default: 
            return state
    }
}