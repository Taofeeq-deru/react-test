import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

it("checkButtonRender", () => {
	const { queryByTitle } = render(<Button />); //renders Button component
	const btn = queryByTitle("dummyButton"); //checks for html element with title "dummyButton"
	expect(btn).toBeTruthy(); //checks if what it expects actually occurs

	// const {q} = render(<Button />)
});

describe("clickButton", () => {
	it("onClick", () => {
		const { queryByTitle } = render(<Button />);
		const btn = queryByTitle("dummyButton");
		expect(btn.innerHTML).toBe("Press here");
		fireEvent.click(btn);
		expect(btn.innerHTML).toBe("You Clicked");
	});
});
