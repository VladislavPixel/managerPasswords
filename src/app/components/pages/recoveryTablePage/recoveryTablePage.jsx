import React, { useEffect } from "react"
import Header from "../../ui/header"
import { useSelector, useDispatch } from "react-redux"
import { getStatusLoadingRecoveryTable, fetchAllRecoveryTableData } from "../../../store/recoveryTable"
import RecoveryTableList from "../../ui/recoveryTableList"
import Spinner from "../../common/spinner"
import Footer from "../../ui/footer"

const RecoveryTablePage = () => {
	const dispatch = useDispatch()
	const statusLoadingRecoveryTable = useSelector(getStatusLoadingRecoveryTable())
	useEffect(() => {
		if (statusLoadingRecoveryTable) {
			dispatch(fetchAllRecoveryTableData())
		}
	}, [dispatch, statusLoadingRecoveryTable])
	return (
		<React.Fragment>
			<Header />
			<main className="content-block">
				{(statusLoadingRecoveryTable && <Spinner />) ||
					<RecoveryTableList />
				}
			</main>
			{!statusLoadingRecoveryTable && <Footer />}
		</React.Fragment>
	)
}

export default RecoveryTablePage
