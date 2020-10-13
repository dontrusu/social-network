import reducers from "./reducers/index"
import { createStore } from "redux"

let store  = createStore(reducers)

export default store