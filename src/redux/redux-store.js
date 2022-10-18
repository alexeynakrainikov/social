import {combineReducers, legacy_createStore as createStore} from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    forum: postsReducer,
    users: usersReducer
})

let store = createStore(reducers)

export default store