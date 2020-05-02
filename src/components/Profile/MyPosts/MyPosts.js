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
                <button>Remove</button>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />


            </div>
        </div>


    )
}

export default MyPosts