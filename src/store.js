import reducers from "./reducers/index"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

let store  = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store