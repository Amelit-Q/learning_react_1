import React from "react";
import "./MyPosts.module.css"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postElements}
            </div>

        </div>


    )
}

export default MyPosts