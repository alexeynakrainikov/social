import {usersAPI} from "../api/api";

const SET_ACC_DATA = "SET_ACC_DATA"



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACC_DATA: {
            return {
                ...state, ...action.data,
                isAuth: true
            };
        }
        default:
            return state
    }

}

export const setACCDataActionCreator = (data) => {
    return {type: SET_ACC_DATA, data}
}

export const authMeThunkCreator = () => (dispatch) => {
    usersAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setACCDataActionCreator(response.data.data))
        }
    })
}

export default authReducer