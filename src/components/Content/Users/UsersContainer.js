
import UsersC from "./UsersC";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCount,
    setUsersActionCreator
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
        isFollowed: (userID) => {
            dispatch(followActionCreator(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setPage: (number) => {
            dispatch(setCurrentPageActionCreator(number))
        },
        setUsersCount: (number) => {
            dispatch(setTotalUsersCount(number))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer