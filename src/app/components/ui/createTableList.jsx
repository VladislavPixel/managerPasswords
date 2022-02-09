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

const CreateTableList = () => {
	const dispatch = useDispatch()
	const roleIsAdmin = localStorageService.getRole()
	const headerDataTable = roleIsAdmin ? configAuxiliary.headerTableAdmin : configAuxiliary.headerTableUser
	const createTableData = useSelector(getCreateTableData())
	const valueSearch = useSelector(getValueSearch())
	
	// Filter createTable data если есть что-то в поиске
	const newCreateTableData = (valueSearch === "" ? createTableData : createTableData.filter(people => {
		if (people.Surname.includes(valueSearch)) return people
		return null
	}))

	// Преобразование данных под шапку таблицы, чтобы они были корректно упорядочены
	const getCorrectDataTable = () => {
		const array = []
		newCreateTableData.forEach(el => {
			let subArray = []
			Object.keys(headerDataTable).forEach((item, index) => {
				if (index < (Object.keys(headerDataTable).length - 1)) {
					subArray.push(el[item])
				} else {
					subArray.push(el[item])
					array.push([...subArray])
					subArray = []
				}
			})
		})
		return array
	}
	const correctDataTable = getCorrectDataTable()

	const handlerSubmitRadio = (value) => {
		dispatch(updateCompleteStatusUserCreateTable(value))
	}
	const handlerChangeRadio = ({ target }) => {
		handlerSubmitRadio(JSON.parse(target.value))
	}
	const getElement = (valueObject) => {
		if (valueObject.Complete === true) return <div className="wrap-table-create__icon-container"><img src={checkDone} alt="Иконка-выполнено" /></div>
		return <RadioField value={JSON.stringify(valueObject)} onChange={handlerChangeRadio} name="status" />
	}
	return (
		<>
			<HeaderTable data={headerDataTable} isAdmin={roleIsAdmin} />
			<section className="content-block__create-table-wrap wrap-table-create">
				{(correctDataTable.length > 0 &&
					correctDataTable.map((arrayPeopleValues, index) => {
						return (
							<div key={index} className="wrap-table-create__line">
								{arrayPeopleValues.map((value, i) => {
									const valueId = arrayPeopleValues[arrayPeopleValues.length - 1]

									if (i === 0) return <div key={i} className="wrap-table-create__column"><NavLink to={`/createTable/${valueId}`}>{value}</NavLink></div>
									if (i < arrayPeopleValues.length - 1) {
										// ПЕРЕСТАВИТЬ ПОТОМ В ПЕРЕДАВАЕМОМ ОБЪЕКТЕ COMPLETE value на динамическое, которое приходит с сервера
										return (
											<div key={i} className="wrap-table-create__column"> 
												{i === (arrayPeopleValues.length - 2) ? getElement({Complete: false, Id: valueId, table: "create_table"}) : <div className="wrap-table-create__text">{value}</div>}
											</div>
										)
									}
									return null
								})}
							</div>
						)
					})) || <NoResultFilterMessage offer="Фильтр не дал результатов... Попробуйте вводить другое значение." />
				}
			</section>
		</>
	)
}

export default CreateTableList
