import { Sample } from "../";

describe("test", () => {
	it("sample", () => {
		const spyConsole = jest.spyOn(console, "log");
		const test = new Sample();
		test.main();
		const result = test.plus(1, 2);

		expect(spyConsole).toHaveBeenCalledWith("main");
		expect(result).toBe(3);
	});
});
