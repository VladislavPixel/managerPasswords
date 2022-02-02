import React from "react"
import { useSelector } from "react-redux"
import { getCreateTableData } from "../../store/createTable"
import { getValueSearch } from "../../store/searchHeader"
import NoResultFilterMessage from "../common/noResultFilterMessage"

const CreateTableList = () => {
	const createTableData = useSelector(getCreateTableData())
	const valueSearch = useSelector(getValueSearch())
	const newCreateTableData = (valueSearch === "" ? createTableData : createTableData.filter(people => {
		if (people.surName.includes(valueSearch)) {
			return people
		}
		return null
	}))
	return (
		<section className="content-block__create-table-wrap wrap-table-create">
			{(newCreateTableData.length > 0 &&
				newCreateTableData.map(people => {
					return (
						<div key={people._id} className="wrap-table-create__line">
							{Object.keys(people).map((key, index) => {
								return (
									<div key={index} className="wrap-table-create__column">
										<div className="wrap-table-create__text">{people[key]}</div>
									</div>
								)
							})}
						</div>
					)
				})) || <NoResultFilterMessage offer="Фильтр не дал результатов... Попробуйте вводить другое значение." />
			}
		</section>
	)
}

export default CreateTableList
