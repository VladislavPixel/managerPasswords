import React, { useEffect } from "react"
import Header from "../../ui/header"
import { getStatusLoadingCreateTable, fetchAllCreateTableData } from "../../../store/createTable"
import { useSelector, useDispatch } from "react-redux"

const CreateTablePage = () => {
	const dispatch = useDispatch()
	const statusLoading = useSelector(getStatusLoadingCreateTable())
	useEffect(() => {
		if (statusLoading) {
			dispatch(fetchAllCreateTableData())
		}
	}, [])
	return (
		<React.Fragment>
			<Header />
			<main className="content-block">
				CreateTable
			</main>
		</React.Fragment>
	)
}

export default CreateTablePage
