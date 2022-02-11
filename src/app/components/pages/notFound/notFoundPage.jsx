import React from "react"
import notFoundOfficer from "../../../images/404.png"
import history from "../../../utils/history"
import { getStatusAuth } from "../../../store/user"
import { useSelector } from "react-redux"
import Footer from "../../ui/footer"

const NotFoundPage = () => {
	const statusAuth = useSelector(getStatusAuth())
	const handlerBtn = () => {
		if (statusAuth) {
			history.push("/createTable")
		}
		if (!statusAuth) {
			history.push("/")
		}
	}
	return (
		<div className="not-found-container">
			<div className="not-found-container__box not-found">
				<h1 className="not-found__title">Ошибка 404</h1>
				<img className="not-found__image" src={notFoundOfficer} alt="Офицер полиции" />
				<p className="not-found__text">К сожалению, запрошенная Вами страница не найдена.</p>
				<p className="not-found__text not-found__text">Возможно, Вы ошиблись при наборе адреса или искомой страницы больше не существует.</p>
				<button onClick={handlerBtn} className="not-found__back-btn" type="button">Вернуться обратно</button>
			</div>
			<Footer />
		</div>
	)
}

export default NotFoundPage
