import { createSlice } from "@reduxjs/toolkit"
import createTableService from "../services/createTable.service"

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
		},
		updateUserCreateTableRecived (state, action) {
			const newArray = [...state.entities]
			const indexEl = newArray.findIndex(item => item.Id === action.payload.Id)
			newArray[indexEl] = { ...newArray[indexEl], ...action.payload }
			state.entities = newArray
		},
		updateUserCreateTableRequested (state) {
			state.error = null
		},
		updateUserCreateTableRequesField (state, action) {
			state.error = action.payload
		}
	}
})

const { actions, reducer: createTableReducer } = createTableSlice
const {
	createTableRequested,
	updateUserCreateTableRequested,
	updateUserCreateTableRequesField,
	updateUserCreateTableRecived,
	createTableRecived,
	createTableRequestField
} = actions

// Actions
export function fetchAllCreateTableData() {
	return async (dispatch) => {
		dispatch(createTableRequested())
		try {
			const data = await createTableService.fetchAllCreateTable()
			dispatch(createTableRecived(data))
		} catch (err) {
			dispatch(createTableRequestField(err.message))
		}
	}
}
export function updateCompleteStatusUserCreateTable(payload) {
	return async (dispatch) => {
		dispatch(updateUserCreateTableRequested())
		payload.Complete = "true"
		try {
			const data = await createTableService.updateStatusComplete(payload)
			if (data === null) {
				delete payload.table
				dispatch(updateUserCreateTableRecived(payload))
			}
		} catch (err) {
			dispatch(updateUserCreateTableRequesField(err.message))
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
export function getCreateTableUserById(id) {
	return (state) => {
		return state.createTable.entities.find(people => people.Id === id)
	}
}

export default createTableReducer
