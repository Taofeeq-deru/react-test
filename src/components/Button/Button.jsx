import { useState } from "react";

const Button = () => {
	const [value, setValue] = useState("Press here");

	const dummyFunction = () => {
		setValue("You Clicked");
	};

	return (
		<>
			<h1>Button component</h1>
			<button onClick={dummyFunction} title="dummyButton">
				{value}
			</button>
		</>
	);
};

export default Button;
