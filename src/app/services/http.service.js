import axios from "axios"
import localStorageService from "./localStorage.service"

const http = axios.create({
	baseURL: "http://localhost:8080/"
})

http.interceptors.request.use(function (config) {
	if (localStorageService.isToken()) {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${localStorageService.getToken()}`,
			"Access-Control-Allow-Methods": "*"
		}
	}
	return config
}, function (error) {
	return Promise.reject(error)
})

const httpService = {
	post: http.post,
	get: http.get,
	put: http.put,
	delete: http.delete,
	patch: http.patch,
	options: http.options
}

export default httpService
