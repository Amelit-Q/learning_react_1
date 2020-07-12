import React from "react";
import classes from "./ProfileInfo.module.css"
import ProfileStatusWithHOKs from "./ProfileStatusWithHOKs";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>GIF</div>
    }

    return (

        <div>

            <div className={classes.description}>

                <img src={props.profile.photos.large} />
                <ProfileStatusWithHOKs status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;