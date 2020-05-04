import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src={'https://images.wallpaperscraft.ru/image/asfalt_luzhi_otrazhenie_167881_1280x720.jpg'}/>
            </div>
            <div>
                Ava + Description
            </div>
            <MyPosts/>
        </div>


    )
}

export default Profile