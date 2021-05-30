import { multiply, makeLowerCase } from "./HelperFunction";

test("multiply", () => {
	expect(multiply(2, 10)).toBe(20);
	expect(multiply(2, -6)).toBe(-12);
	expect(multiply(-3, -6)).toBe(18);
});

test("lowerCase", () => {
	expect(makeLowerCase("PEDro")).toBe("pedro");
	expect(makeLowerCase("hFDGuriH")).toBe("hfdgurih");
});

test("mm", () => {
	expect(2 * 5).toBe(10);
});
