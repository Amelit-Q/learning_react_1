import React from 'react'
import classes from './Users.module.css'
import { NavLink } from 'react-router-dom'
import * as axios from "axios"

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
            })}
        </div>
        {
            props.usersData.map(ud => <div key={ud.id}>
                <span>
                    <div>
                        <NavLink to={'/profile' + ud.id}>
                            <img src={ud.photos.small != null ? ud.photos.small : null} className={classes.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {ud.isFollowing
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${ud.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "d6941dc2-59bb-479a-9c7e-6b812d8b18b7"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(ud.id)
                                        }
                                    })

                                props.unFollow(ud.id)

                            }}>Unfollow</button>

                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${ud.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "d6941dc2-59bb-479a-9c7e-6b812d8b18b7"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(ud.id)
                                        }
                                    })

                                props.follow(ud.id)

                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{ud.name}</div>
                        <div>{ud.status}</div>
                    </span>
                    <span>
                        <div>{"ud.location.country"}</div>
                        <div>{"ud.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}

export default Users




