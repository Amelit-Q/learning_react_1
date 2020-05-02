import React from "react";
import classes from "./Post.module.css";


const Post = () => {
    return (
        <div className={classes.item}>
            <img src={'https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png'}/>
            post 1
            <div>
                <span>like</span>
            </div>


        </div>
    )
}

export default Post