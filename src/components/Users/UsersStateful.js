import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator,
    setUsersActionCreator,
    unFollowActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator
} from "../../redux/users-reducer";
import * as axios from "axios"
import Users from './Users'

class UsersStateless extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setCurrentPage(pageNumber)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged} usersData={this.props.usersData} unFollow={this.props.unFollow}
                      follow={this.props.follow}/>
    }
}

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