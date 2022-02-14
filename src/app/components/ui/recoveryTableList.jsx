import React from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import localStorageService from "../../services/localStorage.service"
import { getRecoveryTableData, updateCompleteStatusUserRecoveryTable } from "../../store/recoveryTable"
import configAuxiliary from "../../../configAuxiliary.json"
import { getValueSearch } from "../../store/searchHeader"
import getCorrectDataTable from "../../utils/correctDataTable"
import HeaderTable from "./headerTable"
import RadioField from "../common/form/radioField"
import checkDone from "../../images/icons/check_done.svg"
import NoResultFilterMessage from "../common/noResultFilterMessage"

const RecoveryTableList = () => {
	const dispatch = useDispatch()
	const roleIsAdmin = localStorageService.getRole()
	const headerDataTable = roleIsAdmin ? configAuxiliary.headerTableAdminRecoveryTable : configAuxiliary.headerTableUser
	const recoveryTableData = useSelector(getRecoveryTableData())
	const valueSearch = useSelector(getValueSearch())

	// Filter recoveryTable data если есть что-то в поиске
	const newRecoveryTableData = (valueSearch === "" ? recoveryTableData : recoveryTableData.filter(people => {
		if (people.LastName.toLowerCase().includes(valueSearch.toLowerCase())) return people
		return null
	}))

	// Преобразование данных под шапку таблицы, чтобы они были корректно упорядочены
	const correctDataTable = getCorrectDataTable(newRecoveryTableData, headerDataTable)
	const handlerSubmitRadio = (value) => {
		dispatch(updateCompleteStatusUserRecoveryTable(value))
	}
	const handlerChangeRadio = ({ target }) => {
		handlerSubmitRadio(JSON.parse(target.value))
	}
	const getElement = (valueObject) => {
		if (valueObject.Complete === "true") return <div className="wrap-table-recovery__icon-container"><img src={checkDone} alt="Иконка-выполнено. Галочка-done." /></div>
		return <RadioField value={JSON.stringify(valueObject)} onChange={handlerChangeRadio} name="status" />
	}
	return (
		<>
			<HeaderTable data={headerDataTable} isAdmin={roleIsAdmin} isRecovery={true} />
			<section className="content-block__recovery-table-wrap wrap-table-recovery">
				{(correctDataTable.length === 0 && <NoResultFilterMessage offer="Фильтр не дал результатов... Попробуйте вводить другое значение." />) ||
					correctDataTable.map((arrayPeopleValues, index) => {
						return (
							<div key={index} className={"wrap-table-recovery__line wrap-table-recovery__line_" + (roleIsAdmin ? "admin" : "user")}>
								{arrayPeopleValues.map((value, i) => {
									const valueId = arrayPeopleValues[arrayPeopleValues.length - 1]
									const valueComplete = arrayPeopleValues[arrayPeopleValues.length - 2]
									if (i === 0) return <div key={i} className="wrap-table-recovery__column"><NavLink to={`/recoveryTable/${valueId}`}>{value}</NavLink></div>
									if (i < arrayPeopleValues.length - 1) {
										return (
											<div key={i} className="wrap-table-recovery__column"> 
												{i === (arrayPeopleValues.length - 2) ? getElement({Complete: valueComplete, Id: valueId, table: "recovery_table"}) : <div className="wrap-table-recovery__text">{value}</div>}
											</div>
										)
									}
									return null
								})}
							</div>
						)
					})
				}
			</section>
		</>
	)
}

export default RecoveryTableList
