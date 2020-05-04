import React from "react";
import classes from "./Post.module.css";


const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src={'https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png'}/>
            {props.message};
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post