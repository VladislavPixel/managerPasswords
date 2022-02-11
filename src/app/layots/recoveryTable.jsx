import React from "react"
import RecoveryTablePage from "../components/pages/recoveryTablePage"
import PrintPage from "../components/pages/printPage"
import { useParams } from "react-router-dom"

const RecoveryTable = () => {
	const { userID } = useParams()
	return userID ? <PrintPage /> : <RecoveryTablePage />
}

export default RecoveryTable
