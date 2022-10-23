import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    forum: postsReducer,
    users: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store