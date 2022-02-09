import React from "react"
import { useSelector } from "react-redux"
import { getStatusAuth } from "../../store/user"
import { Route, Redirect } from "react-router-dom"

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
	const statusAuth = useSelector(getStatusAuth())
	return (
		<Route {...rest} render={props => {
			if (statusAuth) return (Component ? <Component {...props} /> : children)
			return <Redirect to={{ pathname: "/", state: { from: props.location } }} />
		}} />
	)
}

export default ProtectedRoute
