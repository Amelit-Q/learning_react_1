import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store