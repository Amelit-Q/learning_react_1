import React from "react";
import "./MyPosts.module.css"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                <Post message={"heya! how's it going ?"} likesCount={'2'}/>
                <Post message={"Fine! how about you bro?"} likesCount={'6'}/>
                <Post message={"What the hell are you doing here?"} likesCount={'22'}/>
            </div>

        </div>


    )
}

export default MyPosts