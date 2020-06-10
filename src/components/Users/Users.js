import React from 'react'
import classes from './Users.module.css'
import { NavLink } from 'react-router-dom'


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

                            ? <button disabled={props.toggleFollowingProgress.some(id => id === ud.id)} onClick={() => { props.unFollow(ud.id) }

                            }>Unfollow</button>

                            : <button disabled={props.toggleFollowingProgress.some(id => id === ud.id)}
                                onClick={() => { props.Follow(ud.id) }}
                            >Follow</button>}

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




