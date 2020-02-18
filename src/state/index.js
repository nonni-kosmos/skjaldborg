import { combineReducers } from "redux"
import reducer from "./reducer"
import firebaseReducer from "./firebaseReducer"

export default combineReducers({ reducer, firebaseReducer })
