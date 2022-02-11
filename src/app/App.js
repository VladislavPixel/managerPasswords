import React from "react"
import Login from "./layots/login"
import CreateTable from "./layots/createTable"
import RecoveryTable from "./layots/recoveryTable"
import NotFound from "./layots/notFound"
import { Switch, Route, Redirect } from "react-router-dom"
import ProtectedRoute from "./components/common/protectedRoute"
import GlobalCheckAuth from "./components/HOC/globalCheckAuth"
import { useSelector } from "react-redux"
import { getStatusAuth } from "./store/user"

const App = () => {
	const isAuth = useSelector(getStatusAuth())
	return (
		<GlobalCheckAuth>
			<Switch>
				<ProtectedRoute path="/recoveryTable/:userID?" component={RecoveryTable} />
				<ProtectedRoute path="/createTable/:userID?" component={CreateTable} />
				<Route path="/" exact render={() => {
					if (isAuth) return <Redirect to="/createTable" />
					return <Login />
				}} />
				<Route path="/notFound" component={NotFound} />
				<Redirect to="/notFound" />
			</Switch>
		</GlobalCheckAuth>
	)
}

export default App
