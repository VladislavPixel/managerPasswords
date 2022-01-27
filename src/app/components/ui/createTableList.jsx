import React from "react"
import { useSelector } from "react-redux"
import { getCreateTableData } from "../../store/createTable"

const CreateTableList = () => {
	const createTableData = useSelector(getCreateTableData())
	return (
		<section className="content-block__create-table-wrap wrap-table-create">
			{createTableData.map(people => {
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
			})}
		</section>
	)
}

export default CreateTableList
