import React from "react";
import { connect } from "react-redux";
import {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
} from "../../redux/users-reducer";
import Users from './Users'


class UsersStateless extends React.Component {

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
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
})(UsersStateless)