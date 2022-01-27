import React from "react"
import notFoundFilter from "../../images/icons/notFoundFilter.svg"
import PropTypes from "prop-types"

const NoResultFilterMessage = ({ offer }) => {
	return (
		<div className="message-no-result">
			<div className="message-no-result__container">
				<img src={notFoundFilter} className="message-no-result__img" />
				<div className="message-no-result__offer">{offer}</div>
			</div>
		</div>
	)
}

NoResultFilterMessage.propTypes = {
	offer: PropTypes.string.isRequired
}

export default NoResultFilterMessage
