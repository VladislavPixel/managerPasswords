import { createSlice } from "@reduxjs/toolkit"
import localStorageService from "../services/localStorage.service"
import httpService from "../services/http.service"
import history from "../utils/history"

const initialState = {
	isAuth: false,
	isAdmin: null,
	error: null,
	isLoading: true
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userAuthRequested(state) {
			state.isLoading = true
			state.error = null
		},
		userAuthRecived(state, action) {
			state.isAuth = true
			state.isAdmin = action.payload
			state.isLoading = false
		},
		userAuthRequestField(state, action) {
			state.error = action.payload
			state.isLoading = false
		},
		userAdditionalInstal(state, action) {
			state.isAuth = true
			state.isAdmin = action.payload
			state.isLoading = false
		},
		userRemoveLoader(state) {
			state.isLoading = false
		}
	}
})

const { actions, reducer: userReducer } = userSlice
const { userAuthRequested, userAdditionalInstal, userAuthRecived, userAuthRequestField } = actions

// Actions
export function signUp(dataLoginForm) {
	return async (dispatch) => {
		dispatch(userAuthRequested())
		try {
			const formData = new FormData()
			formData.append("name", dataLoginForm.name)
			formData.append("password", dataLoginForm.password)
			const { data } = await httpService.post("login", formData)
			localStorageService.set(data)
			dispatch(userAuthRecived(data.role))
			history.push("/createTable")
		} catch (err) {
			const { message } = err.response.data
			if (message === "Unauthorized") {
				dispatch(userAuthRequestField("Убедитесь в корректности заполняемых данных. Отказано в доступе."))
			} else {
				dispatch(userAuthRequestField("Ошибка доступа."))
			}
		}
	}
}
export function additionalInstallation(payload) {
	return (dispatch) => {
		dispatch(userAdditionalInstal(payload))
	}
}

// Selectors
export function getUserError() {
	return (state) => {
		return state.user.error
	}
}
export function getStatusAuth() {
	return (state) => {
		return state.user.isAuth
	}
}

export default userReducer
