import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCreateTableData, updateCompleteStatusUserCreateTable } from "../../store/createTable"
import { getValueSearch } from "../../store/searchHeader"
import NoResultFilterMessage from "../common/noResultFilterMessage"
import configAuxiliary from "../../../configAuxiliary.json"
import localStorageService from "../../services/localStorage.service"
import HeaderTable from "./headerTable"
import RadioField from "../common/form/radioField"
import checkDone from "../../images/icons/check_done.svg"
import { NavLink } from "react-router-dom"
import getCorrectDataTable from "../../utils/correctDataTable"

const CreateTableList = () => {
	const dispatch = useDispatch()
	const roleIsAdmin = localStorageService.getRole()
	const headerDataTable = roleIsAdmin ? configAuxiliary.headerTableAdmin : configAuxiliary.headerTableUser
	const createTableData = useSelector(getCreateTableData())
	const valueSearch = useSelector(getValueSearch())
	
	// Filter createTable data если есть что-то в поиске
	const newCreateTableData = (valueSearch === "" ? createTableData : createTableData.filter(people => {
		if (people.LastName.toLowerCase().includes(valueSearch.toLowerCase())) return people
		return null
	}))

	// Преобразование данных под шапку таблицы, чтобы они были корректно упорядочены
	const correctDataTable = getCorrectDataTable(newCreateTableData, headerDataTable)

	const handlerSubmitRadio = (value) => {
		dispatch(updateCompleteStatusUserCreateTable(value))
	}
	const handlerChangeRadio = ({ target }) => {
		handlerSubmitRadio(JSON.parse(target.value))
	}
	const getElement = (valueObject) => {
		if (valueObject.Complete === "true") return <div className="wrap-table-create__icon-container"><img src={checkDone} alt="Иконка-выполнено. Галочка-done." /></div>
		return <RadioField value={JSON.stringify(valueObject)} onChange={handlerChangeRadio} name="status" />
	}
	return (
		<>
			<HeaderTable data={headerDataTable} isAdmin={roleIsAdmin} />
			<section className="content-block__create-table-wrap wrap-table-create">
				{(correctDataTable.length === 0 && <NoResultFilterMessage offer="Фильтр не дал результатов... Попробуйте вводить другое значение." />) ||
					correctDataTable.map((arrayPeopleValues, index) => {
						return (
							<div key={index} className={"wrap-table-create__line wrap-table-create__line_" + (roleIsAdmin ? "admin" : "user")}>
								{arrayPeopleValues.map((value, i) => {
									const valueId = arrayPeopleValues[arrayPeopleValues.length - 1]
									const valueComplete = arrayPeopleValues[arrayPeopleValues.length - 2]
									if (i === 0) return <div key={i} className="wrap-table-create__column"><NavLink to={`/createTable/${valueId}`}>{value}</NavLink></div>
									if (i < arrayPeopleValues.length - 1) {
										return (
											<div key={i} className="wrap-table-create__column"> 
												{i === (arrayPeopleValues.length - 2) ? getElement({Complete: valueComplete, Id: valueId, table: "create_table"}) : <div className="wrap-table-create__text">{value}</div>}
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

export default CreateTableList
