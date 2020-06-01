import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsStateful from "./MyPosts/MyPostsStateful";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.props} />
            <MyPostsStateful />
        </div>


    )
}

export default Profile