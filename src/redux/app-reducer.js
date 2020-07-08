import { authAPI } from "../api/api"
import { stopSubmit } from "redux-form"
import { getAuthUserData } from "./auth-reducer"

let initialState = {
    initialized: false,

}


const appReducer = (state = initialState, action) => {

    if (action.type === 'SET-INITIALIZED') {
        return {
            ...state,
            initialized: true,
        }

    }
    return state
}


export const initializedSuccess = () => ({ type: 'SET-INITIALIZED' })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })

}



export default appReducer