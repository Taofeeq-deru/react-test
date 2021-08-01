import React from "react";

const Search = () => {
	const [inputValue, setInputValue] = React.useState("");

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<>
			<h1>Search component</h1>
			<input
				type="text"
				onChange={handleChange}
				title="dummySearch"
				value={inputValue}
			/>
		</>
	);
};

export default Search;
