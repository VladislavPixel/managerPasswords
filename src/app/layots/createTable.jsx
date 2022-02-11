import React from "react"
import CreateTablePage from "../components/pages/createTablePage"
import PrintPage from "../components/pages/printPage"
import { useParams } from "react-router-dom"

const CreateTable = () => {
	const { userID } = useParams()
	return userID ? <PrintPage /> : <CreateTablePage />
}

export default CreateTable
