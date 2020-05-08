import React from "react";
import "./MyPosts.module.css"
import classes from "./MyPosts.module.css"
import postElements from "../ProfileData/PostElementsData";

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
                {postElements}
            </div>

        </div>


    )
}

export default MyPosts