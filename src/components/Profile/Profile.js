import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsStateful from "./MyPosts/MyPostsStateful";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsStateful store={props.store}/>
        </div>


    )
}

export default Profile