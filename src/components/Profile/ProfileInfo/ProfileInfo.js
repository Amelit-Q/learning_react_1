import React from "react";
import classes from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHOCs from "./ProfileStatusWithHOCs";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>GIF</div>
    }

    return (

        <div>

            <div className={classes.description}>

                <img src={props.profile.photos.large} />
                <ProfileStatusWithHOCs status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;