
import UsersC from "./UsersC";
import {connect} from "react-redux";
import {followThunkCreator, getUsersThunkCreator,
    setCurrentPageActionCreator, unFollowThunkCreator,
} from "../../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followThunkCreator(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowThunkCreator(userID))
        },
        setPage: (number) => {
            dispatch(setCurrentPageActionCreator(number))
        },
        getUsers: (currentPage, pageSize) => {
             dispatch(getUsersThunkCreator(currentPage, pageSize))
            }
        }
    }


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer