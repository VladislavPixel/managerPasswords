import getRecoveryUsersData from "./api/recoveryTable.api"
import getCreateUsersData from "./api/createTable.api"

const globalApi = {
	fetchAllRecovery: getRecoveryUsersData,
	fetchAllCreate: getCreateUsersData
}

export default globalApi
