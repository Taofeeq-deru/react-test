import { render, fireEvent } from "@testing-library/react";
import Search from "./Search";

it("searchCheck", () => {
	const { queryByTitle } = render(<Search />);
	const input = queryByTitle("dummySearch");
	expect(input).toBeTruthy();
});

describe("changeInInput", () => {
	it("onChange", () => {
		const { queryByTitle } = render(<Search />);
		const input = queryByTitle("dummySearch");
		fireEvent.change(input, { target: { value: "testValue" } });
		expect(input.value).toBe("testValue");
	});
});
