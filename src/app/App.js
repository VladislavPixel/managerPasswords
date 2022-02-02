import React from "react"
import Login from "./layots/login"
import CreateTable from "./layots/createTable"
import RecoveryTable from "./layots/recoveryTable"
import NotFound from "./layots/notFound"
import { Switch, Route, Redirect } from "react-router-dom"

const App = () => {
	return (
		<Switch>
			<Route path="/recoveryTable" component={RecoveryTable} />
			<Route path="/createTable" component={CreateTable} />
			<Route path="/notFound" component={NotFound} />
			<Route path="/" exact component={Login} />
			<Redirect to="/notFound" />
		</Switch>
	)
}

export default App
