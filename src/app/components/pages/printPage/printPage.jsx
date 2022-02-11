import React from "react"
import { useSelector } from "react-redux"
import { useParams, useLocation } from "react-router-dom"
import configAuxiliary from "../../../../configAuxiliary.json"
import NoResultFilterMessage from "../../common/noResultFilterMessage"
import { getCreateTableUserById } from "../../../store/createTable"
import { getRecoveryTableUserById } from "../../../store/recoveryTable"
import history from "../../../utils/history"

const PrintPage = () => {
	const { pathname } = useLocation()
	const { userID } = useParams()
	const pathMode = pathname.split("/")[1]
	const createTableUser = useSelector(getCreateTableUserById( Number(userID) ))
	const recoveryTableUser = useSelector(getRecoveryTableUserById( Number(userID) ))
	const dataPrintPage = pathMode === "createTable" ? createTableUser : pathMode === "recoveryTable" ? recoveryTableUser : null
	const handlerBackBtn = () => history.push(`/${pathMode}`)
	const handlerPrintBtn = () => window.print()
	return (
		<div className="print-container">
			<div className="print-container__button-block">
				<button className="print-container__button" onClick={handlerBackBtn} type="button">Вернуться обратно</button>
				{dataPrintPage && <button className="print-container__button print-container__button_print" onClick={handlerPrintBtn} type="button">Отправить на печать</button>}
			</div>
			{(!dataPrintPage && <NoResultFilterMessage offer="Попробуйте указать другой Id в адресной строке... По такому запросу ничего не найдено." />) ||
				<>
					<div className="print-container__status-doc">Конфиденциально</div>
					<h1 className="print-container__title">
						<p>Учетная запись СУДИС для доступа к сервисам единой системы информационно-аналитического обеспечения деятельности МВД России</p>
					</h1>
					<div className="print-container__table-data data-table">
						<div className="data-table__line">
							{configAuxiliary.headerPrintTable.map((text, index) => <div key={index} className="data-table__column">{text}</div>)}
						</div>
						<div className="data-table__line">
							{configAuxiliary.bodyPrintTable.map((key, index) => <div key={index} className="data-table__column">{dataPrintPage[key]}</div>)}
						</div>
					</div>
					<div className="print-container__paragraph-block">
						<p>В случае обнаружения ошибочных сведений в переданной учетной записи Вам необходимо незамедлительно сообщить об этом администратору доступа.</p>
						<p>Предоставленный на данном бланке пароль является временным, Вам необходимо самостоятельно его сменить при первом входе в течение 30 дней с момента его генерации. Инструкция по смене пароля содержится в документе "СУДИС. Краткая инструкция пользователя", размещенном по адресу <span>http://it.mvd.ru/поиб/sudis</span>.</p>
					</div>
					<div className="print-container__flag">
						<span></span>
						<span>{`(линия сгиба)`}</span>
						<span></span>
					</div>
					<div className="print-container__memo memo">
						<h2 className="memo__title">Памятка по обеспечению конфиденциальности учетной записи</h2>
						{configAuxiliary.memoParagraphs.map((item, index) => <p key={index}>{item}</p>)}
					</div>
					<div className="print-container__forbidden forbidden">
						<div className="forbidden__head">Пользователю категорически запрещено:</div>
						<ul className="forbidden__list">
							{configAuxiliary.forbiddenList.map((item, index) => <li key={index}>{item}</li>)}
						</ul>
					</div>
					<div className="print-container__questions info-questions">
						<p>В случае возникновения вопросов по использованию учетной записи Вам необходимо обратиться по телефону круглосуточной линии поддержки Единого центра эксплуатации ИСОД МВД РОССИИ 8-800-2000-462.</p>
					</div>
					<div className="print-container__flag">
						<span></span>
						<span>{`(линия сгиба)`}</span>
						<span></span>
					</div>
				</>
			}
		</div>
	)
}

export default PrintPage
