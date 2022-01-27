import { createSlice } from "@reduxjs/toolkit"
import globalApi from "../fakeApi"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
}

const createTableSlice = createSlice({
	name: "createTable",
	initialState,
	reducers: {
		createTableRequested (state) {
			state.isLoading = true
		},
		createTableRecived (state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		createTableRequestField (state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

const { actions, reducer: createTableReducer } = createTableSlice
const { createTableRequested, createTableRecived, createTableRequestField } = actions

// Actions
export function fetchAllCreateTableData() {
	return async (dispatch) => {
		dispatch(createTableRequested())
		try {
			const data = await globalApi.fetchAllCreate()
			dispatch(createTableRecived(data))
		} catch (error) {
			dispatch(createTableRequestField(error.message))
		}
	}
}

// Selectors
export function getStatusLoadingCreateTable() {
	return (state) => {
		return state.createTable.isLoading
	}
}
export function getCreateTableData() {
	return (state) => {
		return state.createTable.entities
	}
}

export default createTableReducer
