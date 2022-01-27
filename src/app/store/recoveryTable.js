import { createSlice } from "@reduxjs/toolkit"
import globalApi from "../fakeApi"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
}

const recoveryTableSlice = createSlice({
	name: "recoveryTable",
	initialState,
	reducers: {
		recoveryTableRequested(state) {
			state.isLoading = true
		},
		recoveryTableRequestRecived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		recoveryTableRequestField(state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

const { actions, reducer: recoveryTableReducer } = recoveryTableSlice
const { recoveryTableRequested, recoveryTableRequestRecived, recoveryTableRequestField } = actions

// Actions
export function fetchAllRecoveryTableData() {
	return async (dispatch) => {
		dispatch(recoveryTableRequested())
		try {
			const data = await globalApi.fetchAllRecovery()
			dispatch(recoveryTableRequestRecived(data))
		} catch (error) {
			dispatch(recoveryTableRequestField(error.message))
		}
	}
}

// Selectors
export function getStatusLoadingRecoveryTable() {
	return (state) => {
		return state.recoveryTable.isLoading
	}
}
export function getRecoveryTableData() {
	return (state) => {
		return state.recoveryTable.entities
	}
}

export default recoveryTableReducer
