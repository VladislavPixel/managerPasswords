import React from "react"
import { useSelector } from "react-redux"
import { getStatusAuth } from "../../store/user"
import { Route, Redirect } from "react-router-dom"

const ProtectedRoute = ({ path, component: Component, children, ...rest }) => {
	const statusAuth = useSelector(getStatusAuth())
	if (statusAuth && (path === "/")) return <Redirect to="/createTable" />
	return (
		<Route path={path} {...rest} render={props => {
			if (statusAuth) {
				return (Component ? <Component {...props} /> : children)
			}
			return <Redirect to={{ pathname: "/", state: { from: props.location } }} />
		}} />
	)
}

export default ProtectedRoute
