import React from "react";
import classes from './Users.module.css'
import * as axios from 'axios'

let UsersStateless = (props) => {

    let getUsers = () => {

        if (props.usersData.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                props.setUsers(response.data.items)
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get users</button>
        {

            props.usersData.map(ud => <div key={ud.id}>
                <span>
                    <div>
                        <img src={ud.pictureURL} className={classes.userPhoto} />
                    </div>
                    <div>
                        {ud.isFollowing
                            ? <button onClick={() => {
                                props.unFollow(ud.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(ud.id)
                            }}>Follow</button>}
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{ud.firstName}</div>
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


export default UsersStateless