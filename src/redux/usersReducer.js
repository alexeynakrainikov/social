import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW"
const SETUSERS = "SETUSERS"
const SETPAGE = "SETPAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"


let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((el) => {
                    return el.id === action.userID ? {...el, followed: !el.followed} : el
                })
            };
        }
        case SETUSERS: {
            return {
                ...state, users: [...action.users]
            }
        }
        case SETPAGE: {
            return {
                ...state, currentPage: action.number
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.number
            }
        }


        default:
            return state
    }

}

export const followActionCreator = (userID) => {
    return {type: FOLLOW, userID}
}

export const setUsersActionCreator = (users) => {
    return {type: SETUSERS, users}
}

export const setCurrentPageActionCreator = (number) => {
    return {type: SETPAGE, number}
}

export const setTotalUsersCount = (number) => {
    return {type: SET_TOTAL_USERS_COUNT, number}
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsersActionCreator(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
        })
    }
}

export const followThunkCreator = (userID) => {
    return (dispatch) => {
        usersAPI.follow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followActionCreator(userID))
            }
        })
    }
}

export const unFollowThunkCreator = (userID) => {
    return (dispatch) => {
        usersAPI.unFollow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followActionCreator(userID))
            }
        })
    }
}

export default usersReducer