import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>GIF</div>
    }

    return (

        <div>
            <div>
                <img
                    src={'https://images.wallpaperscraft.ru/image/asfalt_luzhi_otrazhenie_167881_1280x720.jpg'} />
            </div>
            <div className={classes.description}>

                <img src={props.profile.photos.large} />
            </div>
        </div>
    )
}

export default ProfileInfo;