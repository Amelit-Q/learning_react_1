import React from "react";
import Profile from './Profile'
import { connect } from "react-redux";
import {
    getUserProfile
} from "../../redux/profile-reducer";
import { withAuthRedirect } from './../../HOC/withAuthRedirect'
import { withRouter, Redirect } from "react-router-dom";


class ProfileStateful extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)

    }



    render(props) {

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

let AuthRedirectComponent = withAuthRedirect(ProfileStateful)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

let WithUrlDataStatefulComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataStatefulComponent)