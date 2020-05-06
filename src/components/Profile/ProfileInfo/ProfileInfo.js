import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://images.wallpaperscraft.ru/image/asfalt_luzhi_otrazhenie_167881_1280x720.jpg'}/>
            </div>
            <div className={classes.description}>
                Ava + Description
            </div>
        </div>
    )
}

export default ProfileInfo;