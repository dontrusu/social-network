import React from "react"
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        const isAuth = useSelector(state => state.auth.isAuth)

        return (
            isAuth ? <Component { ...props } /> : <Redirect to="/login" />
        )
    }
    return RedirectComponent
}

export default withAuthRedirect