import { createSlice } from "@reduxjs/toolkit"
import recoveryTableService from "../services/recoveryTable.service"

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
		recoveryTableRecived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		recoveryTableRequestField(state, action) {
			state.error = action.payload
			state.isLoading = false
		},
		updateUserRecoveryTableRequested(state) {
			state.error = null
		},
		updateUserRecoveryTableRequestField(state, action) {
			state.error = action.payload
		},
		updateUserRecoveryTableRecived(state, action) {
			const newArray = [...state.entities]
			const indexEl = newArray.findIndex(item => item.Id === action.payload.Id)
			newArray[indexEl] = { ...newArray[indexEl], ...action.payload }
			state.entities = newArray
		}
	}
})

const { actions, reducer: recoveryTableReducer } = recoveryTableSlice
const {
	recoveryTableRequested,
	updateUserRecoveryTableRequested,
	updateUserRecoveryTableRequestField,
	recoveryTableRecived,
	recoveryTableRequestField,
	updateUserRecoveryTableRecived
} = actions

// Actions
export function fetchAllRecoveryTableData() {
	return async (dispatch) => {
		dispatch(recoveryTableRequested())
		try {
			const data = await recoveryTableService.fetchAllRecoveryTable()
			dispatch(recoveryTableRecived(data))
		} catch (err) {
			dispatch(recoveryTableRequestField(err.message))
		}
	}
}
export function updateCompleteStatusUserRecoveryTable(payload) {
	return async (dispatch) => {
		dispatch(updateUserRecoveryTableRequested())
		payload.Complete = "true"
		try {
			const data = await recoveryTableService.updateStatusComplete(payload)
			if (data === null) {
				delete payload.table
				dispatch(updateUserRecoveryTableRecived(payload))
			}
		} catch (err) {
			dispatch(updateUserRecoveryTableRequestField())
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
export function getRecoveryTableUserById(id) {
	return (state) => {
		return state.recoveryTable.entities.find(people => people.Id === id)
	}
}

export default recoveryTableReducer
