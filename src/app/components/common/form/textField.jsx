import React from "react"
import PropTypes from "prop-types"

const TextField = ({ label, type, placeholder, name, value, error, onChange }) => {
	const handlerChange = ({ target }) => {
		onChange({ name: name, value: target.value })
	}
	return (
		<div className="form__text-field">
			<label htmlFor={name}>{label}</label>
			<div className="form__line-input">
				<input value={value} onChange={handlerChange} name={name} id={name} placeholder={placeholder} type={type} className="form__input" />
			</div>
			{error && <div className="form__error-field">{error}</div>}
		</div>
	)
}

TextField.defaultProps = {
	type: "text"
}

TextField.propTypes = {
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func
}

export default TextField
