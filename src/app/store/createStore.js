import { combineReducers, configureStore } from "@reduxjs/toolkit"
import createTableReducer from "./createTable"
import recoveryTableReducer from "./recoveryTable"
import searchReducer from "./searchHeader"

const rootReducer = combineReducers({
	createTable: createTableReducer,
	recoveryTable: recoveryTableReducer,
	search: searchReducer
})

export default function createStore() {
	return configureStore({ reducer: rootReducer })
}
