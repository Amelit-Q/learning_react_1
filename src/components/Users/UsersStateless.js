import React from "react";
import classes from './Users.module.css'
import * as axios from 'axios'
import { render } from "@testing-library/react";

class UsersStateless extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    onPageChanged = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`).then(response => {
            this.props.setCurrentPage(pageNumber)
        })
    }

    render() {


        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && classes.selectedPage}
                        onClick={(e) => { this.props.onPageChanged(p) }}>{p}</span>
                })}

                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            {
                this.props.usersData.map(ud => <div key={ud.id}>
                    <span>
                        <div>
                            <img src={ud.pictureURL} className={classes.userPhoto} />
                        </div>
                        <div>
                            {ud.isFollowing
                                ? <button onClick={() => {
                                    this.props.unFollow(ud.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(ud.id)
                                }}>Follow</button>}
                            <button>Follow</button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{ud.name}</div>
                            <div>{ud.motto}</div>
                        </span>
                        <span>
                            <div>{ud.location.country}</div>
                            <div>{ud.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>

    }
}

export default UsersStateless