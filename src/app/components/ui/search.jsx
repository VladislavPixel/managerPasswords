import React from "react"
import { useDispatch } from "react-redux"
import { updateValueSearch } from "../../store/searchHeader"

const Search = () => {
	const dispatch = useDispatch()
	const handlerChange = (event) => {
		event.preventDefault()
		const { target } = event
		dispatch(updateValueSearch(target.value))
	}
	return (
		<div className="content-header__search">
			<input onChange={handlerChange} type="text" id="search" placeholder="Поиск по фамилии" className="content-header__input" />
		</div>
	)
}

export default Search
