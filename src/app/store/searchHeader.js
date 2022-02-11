import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: ""
}

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		updatedValueSearch(state, action) {
			state.value = action.payload
		},
		resetValueSearch(state) {
			state.value = ""
		}
	}
})

const { actions, reducer: searchReducer } = searchSlice
const { updatedValueSearch, resetValueSearch } = actions

// Actions
export function updateValueSearch(newValue) {
	return (dispatch) => {
		dispatch(updatedValueSearch(newValue))
	}
}
export function resetSearch() {
	return (dispatch) => {
		dispatch(resetValueSearch())
	}
}

// Selectors
export function getValueSearch() {
	return (state) => {
		return state.search.value
	}
}


export default searchReducer
