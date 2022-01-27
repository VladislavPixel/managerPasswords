const createTableUsers = [
	{_id: "qq", name: "Павел", surName: "Картавых", password: "рол", login: "pavel"},
	{_id: "ww", name: "Руслан", surName: "Самсонов", password: "мсимс546", login: "ruslan"},
	{_id: "ee", name: "Петр", surName: "Булеков", password: "лод56", login: "petr546"},
	{_id: "rr", name: "Алексей", surName: "Семянов", password: "чсяч234", login: "alex342"},
	{_id: "tt", name: "Александр", surName: "Баклажанов", password: "809890ен", login: "fgh345"},
	{_id: "yy", name: "Николай", surName: "Курочкин", password: "смис435", login: "nicola543"},
	{_id: "uu", name: "Валерий", surName: "Панютин", password: "итьбьб435", login: "valera345"}
]

const promiseCreateTable = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(createTableUsers)
	}, 1000)
})

function getCreateUsersData() {
	return promiseCreateTable
}

export default getCreateUsersData