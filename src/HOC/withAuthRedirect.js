import { Redirect } from "react-router-dom"
import React from 'react'


export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) { return <Redirect to={"/login"} /> }

            return <Component {...this.props} />
        }

    }
    return RedirectComponent
}