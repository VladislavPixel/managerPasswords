const getCorrectDataTable = (dataArray, headerArray) => {
	const array = []
	dataArray.forEach(el => {
		let subArray = []
		Object.keys(headerArray).forEach((item, index) => {
			if (index < (Object.keys(headerArray).length - 1)) {
				subArray.push(el[item])
			} else {
				subArray.push(el[item])
				array.push([...subArray])
				subArray = []
			}
		})
	})
	return array
}

export default getCorrectDataTable
