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
        // case SETUSERS: {
        //     return {
        //         ...state, users: [...action.users]
        //     }
        // }
        default:
            return state
    }

}

export const setACCDataActionCreator = (data) => {
    return {type: SET_ACC_DATA, data}
}

export default authReducer