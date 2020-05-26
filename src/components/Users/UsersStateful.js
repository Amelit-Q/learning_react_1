import React from "react";
import { connect } from "react-redux";
import UsersStateless from './UsersStateless'
import { followActionCreator, setUsersActionCreator, unFollowActionCreator } from "../../redux/users-reducer";

let mapStateToProps = (state) => {

    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowActionCreator(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersStateful = connect(mapStateToProps, mapDispatchToProps)(UsersStateless)

export default UsersStateful