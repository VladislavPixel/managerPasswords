import { useEffect } from "react"
import PropTypes from "prop-types"
import localStorageService from "../../services/localStorage.service"
import { additionalInstallation } from "../../store/user"
import { useDispatch } from "react-redux"

const GlobalCheckAuth = ({ children }) => {
	const dispatch = useDispatch()
	const isToken =  localStorageService.isToken()
	useEffect(() => {
		if (isToken) {
			dispatch(additionalInstallation(localStorageService.getRole()))
		}
	}, [])
	return children
}

GlobalCheckAuth.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default GlobalCheckAuth
