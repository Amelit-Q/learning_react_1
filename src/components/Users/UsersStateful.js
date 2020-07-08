import React from "react";
import { connect } from "react-redux";
import {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
} from "../../redux/users-reducer";
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getToggleFollowingProgress,
} from '../../redux/user-selector'
import Users from './Users'
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";


class UsersStateful extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <img src="https://i0.wp.com/codemyui.com/wp-content/uploads/2015/09/spinner-loader-animation.gif?fit=880%2C440&ssl=1" /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersData={this.props.usersData}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        toggleFollowingProgress: getToggleFollowingProgress(state),
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
    })
)(UsersStateful)