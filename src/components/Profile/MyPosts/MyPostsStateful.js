import React from "react";
import "./MyPosts.module.css"
import { addPostActionCreator, } from "../../../redux/profile-reducer";
import MyPostsStateless from "./MyPostsStateless";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostElement) => {
            dispatch(addPostActionCreator(newPostElement))
        }
    }
}

const MyPostsStateful = connect(mapStateToProps, mapDispatchToProps)(MyPostsStateless)

export default MyPostsStateful