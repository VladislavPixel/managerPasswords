import React, { useState } from "react"
import PropTypes from "prop-types"
import eye from "../../../images/icons/icon-eye.svg"
import eyeSlash from "../../../images/icons/icon-eye-slash.svg"

const TextField = ({ label, type, placeholder, name, value, error, onChange, isPassword }) => {
	const [stateIconPass, setStateIconPass] = useState("show")
	const handlerChange = ({ target }) => {
		onChange({ name: name, value: target.value })
	}
	const handlerIcon = () => {
		if (stateIconPass === "show") {
			setStateIconPass("noShow")
		} else {
			setStateIconPass("show")
		}
	}
	const getIcon = () => {
		if (stateIconPass === "show") return <img onClick={handlerIcon} src={eye} alt="Иконка человеческого глаза." />
		if (stateIconPass === "noShow") return <img onClick={handlerIcon} src={eyeSlash} alt="Иконка перечерктнутого человеческого глаза." />
	}
	const typeCorrect = (type === "password" && stateIconPass === "noShow") ? "text" : (type === "password" && stateIconPass === "show") ? "password" : "text"
	return (
		<div className="form__text-field">
			<label htmlFor={name}>{label}</label>
			<div className={"form__line-input" + (isPassword ? " form__line-input_password" : "")}>
				<input value={value} onChange={handlerChange} name={name} id={name} placeholder={placeholder} type={typeCorrect} className="form__input" />
				{type === "password" && getIcon()}
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
	onChange: PropTypes.func,
	isPassword: PropTypes.bool
}

export default TextField
