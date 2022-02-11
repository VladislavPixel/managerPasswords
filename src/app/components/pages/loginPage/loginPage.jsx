import React, { useState } from "react"
import Logo from "../../../images/header/logo.png"
import FormComponent from "../../common/form"
import { TextField } from "../../common/form"
import { useDispatch, useSelector } from "react-redux"
import { signInWithNamePassword } from "../../../store/user"
import { getUserError } from "../../../store/user"

const LoginPage = () => {
	const dispatch = useDispatch()
	const errorUser = useSelector(getUserError())
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
		dispatch(signInWithNamePassword(data))
	}
	return (
		<main className="login-block">
			<div className="login-block__content">
				<div className="login-block__image">
					<img src={Logo} alt="Герб Московского университета МВД РФ им. В.Я. Кикотя" />
				</div>
				{errorUser && <div className="login-block__error">{errorUser}</div>}
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
