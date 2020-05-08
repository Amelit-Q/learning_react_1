import postsData from "./PostsData";
import Post from "../MyPosts/Post/Post";
import React from "react";

let postElements = postsData
    .map(p => <Post message={p.post} likesCount={p.likesCount}/>)

export default postElements;