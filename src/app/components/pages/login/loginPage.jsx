import React, { useState } from "react"
import Logo from "../../../images/header/logo.png"
import FormComponent from "../../common/form"
import { TextField } from "../../common/form"

const LoginPage = () => {
	const [initialState] = useState({
		name: "",
		password: ""
	})
	const configError = {
		name: {
			isRequired: { message: `Поле "Имя" обязательно для заполнения.` },
		},
		password: {
			isRequired: { message: `Поле "Пароль" обязательно для заполнения.` }
		}
	}
	const handlerSubmit = (data) => {
		console.log("Отправка данных: ", data)
	}
	return (
		<main className="login-block">
			<div className="login-block__content">
				<div className="login-block__image">
					<img src={Logo} alt="Герб Московского университета МВД РФ им. В.Я. Кикотя" />
				</div>
				<FormComponent config={configError} classesForm="login-block__form" initialState={initialState} onSubmit={handlerSubmit}>
					<TextField
						label="Имя:"
						placeholder="введите имя..."
						name="name"
					/>
					<TextField
						label="Пароль:"
						placeholder="введите пароль..."
						name="password"
					/>
					<button className="form__btn" type="submit">Авторизоваться</button>
				</FormComponent>
			</div>
		</main>
	)
}

export default LoginPage
