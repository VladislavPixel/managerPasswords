const recoveryTableUsers = [
	{_id: "1q", name: "Андрей", surName: "Сизов", password: "546456fghfgh", login: "andre999"},
	{_id: "2w", name: "Николай", surName: "Воробьев", password: "776кен", login: "nikola213"},
	{_id: "3e", name: "Максим", surName: "Макаров", password: "543ррапр", login: "maxom768"},
	{_id: "4r", name: "Сергей", surName: "Иванов", password: "9щпмаrtyr", login: "serbnm9"},
	{_id: "5t", name: "Виталий", surName: "Петров", password: "9ghfgh", login: "n,86"},
	{_id: "6y", name: "Камрон", surName: "Сидоров", password: "xcv65", login: "kamrgfh"},
	{_id: "7u", name: "Вячеслав", surName: "Чекрыжов", password: ",m.57", login: "slava790"}
]

function getRecoveryUsersData() {
	setTimeout(() => {
		return recoveryTableUsers
	}, 2000)
}

export default getRecoveryUsersData
