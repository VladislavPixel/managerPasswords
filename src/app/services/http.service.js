import axios from "axios"

const http = axios.create({
	baseURL: "http://localhost:8080/"
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
