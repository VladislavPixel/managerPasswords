import React from "react"

const Spinner = () => {
	return (
		<div className="spinner-wrapper">
			<div className="spinner-wrapper__element lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Spinner
