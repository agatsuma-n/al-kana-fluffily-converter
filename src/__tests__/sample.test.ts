import { FluffyConverter } from "../";

describe("test", () => {
	it("sample", () => {
		const fluffy = new FluffyConverter();
		const result = fluffy.convert("pitkit man");
		expect(result).toBe("ピットキット マン");
	});
});
