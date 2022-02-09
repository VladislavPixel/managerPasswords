import httpService from "../services/http.service"

const endPointCreateTable = "admin/create"

const createTableService = {
	fetchAllCreateTable: async () => {
		const { data } = await httpService.get(endPointCreateTable)
		return data
	},
	updateStatusComplete: async (payload) => {
		const { data } = await httpService.put(endPointCreateTable, {
			params: {
				id: payload.Id,
				complete: payload.Complete,
				table: payload.table
			}
		})
		return data
	}
}

export default createTableService
