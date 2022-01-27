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
		}
	}
})

const { actions, reducer: searchReducer } = searchSlice
const { updatedValueSearch } = actions

// Actions
export function updateValueSearch(newValue) {
	return (dispatch) => {
		dispatch(updatedValueSearch(newValue))
	}
}

// Selectors
export function getValueSearch() {
	return (state) => {
		return state.search.value
	}
}


export default searchReducer
