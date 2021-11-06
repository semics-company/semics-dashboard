import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const is_login = !!localStorage.getItem("access")
    return (
        <Route { ...rest } render = { props => (is_login ? <Redirect to = "/dashboard/" /> : <Component {...props}/>)}/>
    )
}
export default PublicRoute
