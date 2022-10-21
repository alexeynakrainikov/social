import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {setACCDataActionCreator} from "../../redux/authReducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authMe().then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setACCDataActionCreator(response.data.data)
                }
            })
    }

    render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {setACCDataActionCreator}) (HeaderContainer)