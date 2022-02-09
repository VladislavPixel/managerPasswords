import React from "react"
import PropTypes from "prop-types"

const RadioField = ({ name, onChange, value }) => {
	return (
		<div className="radio-field">
			<input name={name} onChange={onChange} value={value} className="radio-field__input" type="radio" />
		</div>
	)
}

RadioField.propTypes = {
	name: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.any
}

export default RadioField
