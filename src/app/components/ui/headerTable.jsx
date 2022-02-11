import React from "react"
import PropTypes from "prop-types"

const HeaderTable = ({ data, isAdmin, isRecovery }) => {
	return (
		<div className={"content-block__header-table table-header table-header_" + (isAdmin && isRecovery ? "admin-recovery" : isAdmin && !isRecovery ? "admin" : "user")}>
			{Object.keys(data).map((item, index) => {
				if (index < Object.keys(data).length - 1) {
					return (
						<div key={index} className="table-header__column">
							<div className="table-header__text">{data[item]}</div>
						</div>
					)
				}
				return null
			})}
		</div>
	)
}

HeaderTable.propTypes = {
	data: PropTypes.object,
	isAdmin: PropTypes.bool,
	isRecovery: PropTypes.bool
}

export default HeaderTable
