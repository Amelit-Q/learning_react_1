import React from "react";
import classes from './Users.module.css'

let UsersStateless = (props) => {

    if (props.usersData.length === 0) {
        props.setUsers([
            {
                id: 1,
                firstName: "Jack",
                pictureURL: 'https://i.pinimg.com/originals/0f/60/4f/0f604fd139d992450b7c022a12775599.png',
                motto: "I'm just a dreamer",
                location: {city: "Moscow", country: "Russia"},
                isFollowing: true,
            },
            {
                id: 2,
                pictureURL: 'https://avatarfiles.alphacoders.com/127/127130.jpg',
                firstName: "Daniel",
                motto: "ad astra per aspera",
                location: {city: "New-York", country: "USA"},
                isFollowing: false,
            },
            {
                id: 3,
                firstName: "Steve",
                pictureURL: 'https://i.pinimg.com/originals/f2/03/f0/f203f0b0602ec69ed00e2eb845322a45.png',
                motto: "Utraque Unum",
                location: {city: "Chicago", country: "Usa"},
                isFollowing: false,
            },
            {
                id: 4,
                firstName: "Peter",
                pictureURL: 'https://cdn.dribbble.com/users/29574/screenshots/4882066/avatar_-_spider-man_-_dribbble.png',
                motto: "Fatti maschii, parole femine",
                location: {city: "Oslo", country: "Norway"},
                isFollowing: true,
            },
            {
                id: 5,
                firstName: "Franz",
                pictureURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhGyN8Ba3rb8Q5hrTyfzJy_FgD6eqm3wwXB3fGiJ33FQvJ0dcG&usqp=CAU',
                motto: "Perstare et praestare",
                location: {city: "Houston", country: "USA"},
                isFollowing: true,
            },
            {
                id: 6,
                firstName: "Ludwig",
                pictureURL: 'https://i.pinimg.com/736x/14/c7/2c/14c72ce84186246df41b9bf943932d1d.jpg',
                motto: "Sapientia et Doctrina",
                location: {city: "Seattle", country: "USA"},
                isFollowing: false,
            },
        ])
    }
}

return <div>
    {
        props.users.map(ud => <div key={ud.id}>
                <span>
                    <div>
                        <img src={ud.pictureURL} className={classes.userPhoto}/>
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