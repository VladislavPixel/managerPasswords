import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import localStorageService from "../../services/localStorage.service"
import { additionalInstallation } from "../../store/user"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllCreateTableData, getStatusLoadingCreateTable } from "../../store/createTable"
import { fetchAllRecoveryTableData, getStatusLoadingRecoveryTable } from "../../store/recoveryTable"
import Spinner from "../common/spinner"

const GlobalCheckAuth = ({ children }) => {
	const [bigLoader, setBigLoader] = useState(true)
	const loaderCreate = useSelector(getStatusLoadingCreateTable())
	const loaderRecovery = useSelector(getStatusLoadingRecoveryTable())
	const dispatch = useDispatch()
	const isToken =  localStorageService.isToken()
	useEffect(() => {
		if (isToken) {
			dispatch(additionalInstallation(localStorageService.getRole()))
			dispatch(fetchAllCreateTableData())
			dispatch(fetchAllRecoveryTableData())
		} else {
			setBigLoader(false)
		}
	}, [isToken, dispatch])
	useEffect(() => {
		if (!loaderCreate && !loaderRecovery) {
			setBigLoader(false)
		}
	}, [loaderCreate, loaderRecovery])
	return (bigLoader && <Spinner />) || children
}

GlobalCheckAuth.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default GlobalCheckAuth
