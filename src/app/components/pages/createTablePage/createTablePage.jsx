import React, { useEffect } from "react"
import Header from "../../ui/header"
import CreateTableList from "../../ui/createTableList"
import { getStatusLoadingCreateTable, fetchAllCreateTableData } from "../../../store/createTable"
import { useSelector, useDispatch } from "react-redux"
import Spinner from "../../common/spinner"
import Footer from "../../ui/footer"

const CreateTablePage = () => {
	const dispatch = useDispatch()
	const statusLoading = useSelector(getStatusLoadingCreateTable())
	useEffect(() => {
		if (statusLoading) {
			dispatch(fetchAllCreateTableData())
		}
	}, [dispatch, statusLoading])
	return (
		<React.Fragment>
			<Header />
			<main className="content-block">
				{(statusLoading && <Spinner />) ||
					<CreateTableList />
				}
			</main>
			{!statusLoading && <Footer />}
		</React.Fragment>
	)
}

export default CreateTablePage
