import { combineReducers, configureStore } from "@reduxjs/toolkit"
import createTableReducer from "./createTable"

const rootReducer = combineReducers({
	createTable: createTableReducer
})

export default function createStore() {
	return configureStore({ reducer: rootReducer })
}
