import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsStateful from "./MyPosts/MyPostsStateful";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsStateful />
        </div>


    )
}

export default Profile