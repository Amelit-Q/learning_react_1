import React from "react";
import { connect } from "react-redux";
import UsersStateless from './UsersStateless'
import { followActionCreator, setUsersActionCreator, unFollowActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from "../../redux/users-reducer";

let mapStateToProps = (state) => {

    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator)(totalCount)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersStateless)