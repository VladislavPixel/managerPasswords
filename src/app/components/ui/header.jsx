import React from "react"
import { NavLink } from "react-router-dom"
import Search from "./search"
import logo from "../../images/header/logo.png"

const Header = () => {
	return (
		<header className="header">
			<div className="header__container _container">
				<div className="header__title">
					<h1>Московский университет МВД России имени В.Я. Кикотя</h1>
				</div>
				<div className="header__content content-header">
					<div className="content-header__logo">
						<NavLink to="/createTable">
							<img className="content-header__img" src={logo} alt="Герб Московского университета МВД России имени В.Я. Кикотя" />
						</NavLink>
					</div>
					<nav className="content-header__menu menu-header">
						<ul className="menu-header__list">
							<li>
								<NavLink to="/recoveryTable">Таблица восстановления</NavLink>
							</li>
							<li>
								<NavLink to="/createTable">Таблица создания</NavLink>
							</li>
						</ul>
					</nav>
					<Search />
				</div>
			</div>
		</header>
	)
}

export default Header
