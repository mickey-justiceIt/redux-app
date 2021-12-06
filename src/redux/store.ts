import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { personalInfoReducer } from "./reducers/personalInfoReducer";

 const store = createStore(combineReducers({
    personalInfo: personalInfoReducer
}), applyMiddleware(thunk))

export default store