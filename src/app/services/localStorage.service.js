const JWT_ACCESS_KEY = "jwtAccess"
const ROLE_USER = "isAdmin"

function setToken({ role, token }) {
	localStorage.setItem(JWT_ACCESS_KEY, token)
	localStorage.setItem(ROLE_USER, role)
}

function checkJWTToken () {
	const token = localStorage.getItem(JWT_ACCESS_KEY)
	if (token) return true
	return false
}

function getRoleUser() {
	return JSON.parse(localStorage.getItem(ROLE_USER))
}

function getAccessToken() {
	return localStorage.getItem(JWT_ACCESS_KEY)
}

const localStorageService = {
	set: setToken,
	isToken: checkJWTToken,
	getRole: getRoleUser,
	getToken: getAccessToken
}

export default localStorageService
