import httpService from "./http.service"
import { END_POINT_UPDATE_COMPLETE } from "../../variables"

const END_POINT_CREATE_TABLE = "admin/create"

const createTableService = {
	fetchAllCreateTable: async () => {
		const { data } = await httpService.get(END_POINT_CREATE_TABLE)
		return data
	},
	updateStatusComplete: async (payload) => {
		const { data } = await httpService.put(`${END_POINT_UPDATE_COMPLETE}?id=${payload.Id}&complete=${payload.Complete}&table=${payload.table}`)
		return data
	}
}

export default createTableService
