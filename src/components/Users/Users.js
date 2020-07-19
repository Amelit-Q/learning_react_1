import React from 'react'
import classes from './Users.module.css'
import { NavLink } from 'react-router-dom'
import Paginator from './Paginator'


let Users = ({ currentPage, toggleFollowingProgress, unFollow, Follow, users, onPageChanged, totalUsersCount, pageSize }) => {

    return <div>

        <Paginator currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize} />

        {
            users.map(ud => <div key={ud.id}>
                <span>
                    <div>
                        <NavLink to={'/profile' + ud.id}>
                            <img src={ud.photos.small != null ? ud.photos.small : null} className={classes.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {ud.isFollowing

                            ? <button disabled={toggleFollowingProgress.some(id => id === ud.id)}
                                onClick={() => { unFollow(ud.id) }

                                }>Unfollow</button>

                            : <button disabled={toggleFollowingProgress.some(id => id === ud.id)}
                                onClick={() => { Follow(ud.id) }}
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




