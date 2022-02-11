import React from "react"
import { NavLink } from "react-router-dom"
import Search from "./search"
import logo from "../../images/header/logo.png"
import history from "../../utils/history"
import { logOut } from "../../store/user"
import { useDispatch } from "react-redux"
import localStorageService from "../../services/localStorage.service"
import { resetSearch } from "../../store/searchHeader"

const Header = () => {
	const dispatch = useDispatch()
	const handlerLogOut = () => {
		localStorageService.remove()
		dispatch(logOut())
		history.push("/")
	}
	const handlerLink = () => {
		dispatch(resetSearch())
	}
	return (
		<header className="header">
			<div className="header__container _container">
				<div className="header__title">
					<h1>Московский университет МВД России имени В.Я. Кикотя</h1>
				</div>
				<div className="header__content content-header">
					<div className="content-header__logo">
						<NavLink onClick={handlerLink} to="/createTable">
							<img className="content-header__img" src={logo} alt="Герб Московского университета МВД России имени В.Я. Кикотя" />
						</NavLink>
					</div>
					<nav className="content-header__menu menu-header">
						<ul className="menu-header__list">
							<li>
								<NavLink onClick={handlerLink} to="/recoveryTable">Таблица восстановления</NavLink>
							</li>
							<li>
								<NavLink onClick={handlerLink} to="/createTable">Таблица создания</NavLink>
							</li>
						</ul>
					</nav>
					<Search />
				</div>
			</div>
			<div className="header__log-out-container">
				<button onClick={handlerLogOut} type="button">Выход</button>
			</div>
		</header>
	)
}

export default Header
