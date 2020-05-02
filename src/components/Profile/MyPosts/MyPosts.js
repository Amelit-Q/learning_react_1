import React from "react";
import "./MyPosts.module.css"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={classes.posts}>
                <Post message={"heya! how's it going ?"} />
                <Post message={"Fine! how about you bro?"} />
            </div>

        </div>


    )
}

export default MyPosts