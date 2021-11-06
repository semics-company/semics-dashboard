
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const PrivateRoute = ({component: Component, ...rest}) => {
    const is_login = !!localStorage.getItem("access")
    return (
        <Route {...rest} render={props => (is_login ? <Component {...props} /> : <Redirect to="/auth/login" />)} />
    )
}

export default PrivateRoute
