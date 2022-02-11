import React from "react"
import Header from "../../ui/header"
import CreateTableList from "../../ui/createTableList"
import Footer from "../../ui/footer"

const CreateTablePage = () => {
	return (
		<React.Fragment>
			<Header />
			<main className="content-block">
				<CreateTableList />
			</main>
			<Footer />
		</React.Fragment>
	)
}

export default CreateTablePage
