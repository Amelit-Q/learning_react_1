import React from "react";
import "./MyPosts.module.css"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, post: "Heya! how's it going ?", likesCount: 2},
        {id: 2, post: "Fine! how about you bro?", likesCount: 23},
        {id: 3, post: "What the hell are you doing here?", likesCount: 228},
        {id: 4, post: "Hey dickhead!", likesCount: 322},
    ];

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
                <Post message={postsData[0].post} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].post} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].post} likesCount={postsData[2].likesCount}/>
                <Post message={postsData[3].post} likesCount={postsData[3].likesCount}/>
            </div>

        </div>


    )
}

export default MyPosts